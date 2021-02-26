var arr = [13,1,4,17,20,5,8,16,10,3,14,2,11,6,9,19,7,12,15,18]
arr.sort(
    function(){
        return (0.5-Math.random())
    }
)
var result =[];
for(var i =0;i<arr.length;i+=4){
    result.push(arr.slice(i,i+4));
}
console.log(result)
