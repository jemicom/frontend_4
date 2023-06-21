const http = require('http');
const PORT = 3000; 
/*  json 읽고 쓰기 
const users = [
    { 
        first_name: "jemicom",
        last_name :"kim"
    }
]

const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    // response.write(JSON.stringify(users));
    // response.end();

    response.end(JSON.stringify(users));
}); 
*/
const fs = require('fs');
const fsPromises = fs.promises;
/*
const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
     
    // const data = fsPromises.readFile('./model/users.json', 'utf-8');
    const data = fs.readFileSync('./model/users.json');
 
    response.end(data);
}); 
*/
const server = http.createServer(async(request, response)=>{
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
     
    //const data = await fsPromises.readFile('./model/users.json', 'utf-8');
    const data = fs.readFileSync('./model/users.json');

    await fs.writeFileSync('./my-data.txt', data);
    response.end(data);
}); 

server.listen(PORT, ()=>{
    console.log('listening PORT ', PORT);
});

