// nodejs <-> js
// npm 프로그램 설치 도구 : package 메니저 역활
// http  모듈 내장 하고 있음 : 서버를 만들 수 있음

const http = require('http');

const str = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>응답</h1>
</body>
</html>
`
// page가 매우 크다 문자열로 모두 처리할 순 없음

const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.write(str);
    response.end();
}); 
const PORT = 3000; 
server.listen(PORT, ()=>{
    console.log('listening PORT ', PORT);
});

