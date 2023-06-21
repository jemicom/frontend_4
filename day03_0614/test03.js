/*
브라우저js 
fetch
dom
events


nodejs
fs
eventEmitter : dom 없으니 클릭 불가, 시스템끼리 서로 데이터 주고 받는 이벤트
*/

// node가 event 사용하는 방법
const EventEmitter = require('events');
const myEvent = new EventEmitter();

// 이벤트 처리
// document.addEventListener('click',()=>{})
myEvent.once('event01', ()=>{
    console.log('event01 발생');
    // 어떤 처리하기 
})
setInterval(()=>{
    console.log('setInterval ');
    myEvent.emit('event01'); /// 이벤트 발생
}, 3000) 

// 프로그램이 종료 될때마다 발생하는 이벤트
process.on('exit', ()=>{
    console.log('exit bye');
})
 