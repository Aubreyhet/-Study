const io = require('socket.io')
const utf8 = require('utf8')
const SSHClient = require('ssh2').Client



function createNewServer(machineConfig, socket) {
    var ssh = new SSHClient()
    let { ip, username, password} = machineConfig;
    ssh.on('ready', function () {
        socket.emit('returnCode', '\r\n***' + ip + ' SSH CONNECTION ESTABLISHED ***\r\n')
        ssh.shell(function(err, stream) {
            if(err) {
                return socket.emit('returnCode', '\r\n*** SSH SHELL ERROR: ' + err.message + ' ***\r\n');
            }
            socket.on('sendCode', function (data) {
                stream.write(data.code);
            });
            stream.on('data', function (d) {
                socket.emit('returnCode', utf8.decode(d.toString('binary')));
            }).on('close', function () {
                ssh.end();
            });
        })
    }).on('close', function () {
        socket.emit('returnCode', '\r\n*** SSH CONNECTION CLOSED ***\r\n');
    }).on('error', function (err) {
        console.log(err);
        socket.emit('returnCode', '\r\n*** SSH CONNECTION ERROR: ' + err.message + ' ***\r\n');
    }).connect({
        host: ip,
        port: 22,
        username: username,
        password: password,
        readyTimeout: 5000
    });
}


module.exports = httpServer => {
    const server = io(httpServer)
    let sessionObj = {}
    server.on('connection', socket => {
        const ids = socket.id
        socket.on('loginSsh', (obj, callback) => {
            // 处理obj
            sessionObj = obj
            var timestamp = (new Date()).valueOf()
            callback(`${ids}-${timestamp}`)
        })
        socket.on('enter', (idsObj) => {
            console.log(idsObj)
            createNewServer(sessionObj, socket)
        })
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    })
}