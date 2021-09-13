//main.js
import _ from 'lodash';
import './style/index.css';
import './style/a.scss';

function creatDomElement(){
    const dom = document.createElement('div')
    dom.innerHTML = _.join(['holle,word!','你好！'])
    return dom
}
let divDom = creatDomElement();
document.body.appendChild(divDom);