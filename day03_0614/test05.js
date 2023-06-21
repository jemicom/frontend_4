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
// const EventEmitter = require('events');
// const myEvent = new EventEmitter();
// pocess는 EventEmitter를 상속 받음 

process.on('hello', ()=>{
    console.log('hello event 발생');
})

process.on('javascript', ()=>{
    console.log('javascript event 발생');
})
process.on('bye', ()=>{
    const err = new Error();
})

process.emit('hello');
process.emit('javascript');
process.emit('bye');

process.on('exit', ()=>{
    console.log('process 종료')
})

// error  발생했을때 
process.on('uncaughtException', (err)=>{
    console.log(err);
    process.exit(1);
})

