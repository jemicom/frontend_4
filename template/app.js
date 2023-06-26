/*
// 회원가입 
/register/post
/register/get : confirm get
/register/confirm : post, get
/register/delete
/register/put

// 로그인
/login/post

// 장바구니, product
/product/get
/product/post
/product/delete
/product/put
*/

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3000; 

app.use(express.static('/public'));// 공유폴더 지정
app.use(express.json()); // json포맷 사용
app.use(express.urlencoded({ extended:false})); // form데이터 읽기


// http://localhost:3000/
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

// http://localhost:3000/register
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
})
app.get('/register/confirm', (req, res)=>{})
app.post('/register', (req, res)=>{
    const newUser = req.body; 
    const rows =  fs.readFileSync(path.join(__dirname, 'model', 'users.json')); // 읽고
    console.log( rows )
    const users = JSON.parse(rows);

    // 기존에 id, email 있다면 중복데이터로 처리불가 
    users.push( newUser ); // 읽은 데이터이 넣기

    fs.writeFileSync(path.join(__dirname, 'model', 'users.json'),
        JSON.stringify(users, null, "  "),
        'utf-8',
        err=> console.error(err)
    )

    const res_message = {
        success : 'ok',
        message : '회원가입 완료'
    }
    res.send( res_message );
})
app.delete('/register', (req, res)=>{})
app.put('/register', (req, res)=>{})

app.post('/login', (req, res)=>{})

app.get('/product', (req, res)=>{}) 
app.post('/product', (req, res)=>{})
app.delete('/product', (req, res)=>{})
app.put('/product', (req, res)=>{})

app.listen(PORT, ()=>{
    console.log('lienning port ', PORT);
})