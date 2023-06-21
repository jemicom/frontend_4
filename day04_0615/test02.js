const fs = require('fs');
// front : 파일 읽기 => fetch 
const path = require('path');

/*
// 동기처리, 비동기처리 async
fs.readFile('./datas/lorem.txt', (err, data)=>{
    if(err) consolog.error(err);

    console.log(data); // <Buffer 6c 6f 72 65 6d 20 74 78 74>
    console.log(data.toString()); // lorem txt
})
*/

/*
fs.readFile('./datas/lorem.txt', 'utf-8', (err, data)=>{
    if(err) consolog.error(err);

    console.log(data); // lorem txt
})
*/

const readPath = path.join(__dirname , 'datas', 'lorem.txt');
console.log( readPath ); // D:\frontend_4\day04_0615\datas\lorem.txt

fs.readFile(readPath, 'utf-8', (err, data)=>{
    if(err) consolog.error(err);

    console.log('lorem : ', data); // lorem txt
})

/*
const readJson = path.join(__dirname , 'datas', 'user.json'); 
fs.readFile(readJson,  (err, data)=>{
    if(err) consolog.error(err);

    console.log(data); //  Buffer 
    console.log(data.toString()); // 문자열 그대로 읽기

    const user = JSON.parse(data);
    console.log(user); // js Object 
    console.log(user.first_name); // js Object 

    const { first_name, last_name } = JSON.parse(data);
    console.log( first_name, last_name);
})
*/
const user = require('./datas/user.json');
console.log( user );

// node.js : 코드 순서대로 처리된다는 보장이 없어요.
// 싱글쓰레드 : 한번에 하나의 코드만 실행됨
// 처리 => 처리 : 느려요
// 처리 순서가 달라지고, data 읽기 완료전 처리하면 문제 발생
// 비동기처리 : 순차처리 되도록 해주고 완료시키고