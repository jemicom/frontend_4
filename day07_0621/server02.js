const http = require('http');
const fs = require('fs');
const PORT = 3000;
const path = require('path');

const server = http.createServer();
server.on('request', async (req, res)=>{
    let filePath = path.join(__dirname, 'views', req.url === '/' ? 'index.html' : req.url);
    
    // 수정
    let contentType  = 'text/html;charset=utf-8';  
    let extname = path.extname( filePath );
    
    switch(extname){
        case '.css': contentType = 'text/css'; break;
        case '.jpg': contentType = 'image/jpg'; break;
        case '.png': contentType = 'image/png'; break;
        case '.gif': contentType = 'image/gif'; break;
        case '.js': contentType = 'text/javascript'; break;
        case '.json': contentType = 'application/json'; break;
        case '.mp3': contentType = 'audio/mp3'; break;
        case '.mp4': contentType = 'video/mp4'; break;
        case '.txt': contentType = "text/plan"
    }
    
    try{
        //post : localhost:3000/user/name/
        //post : localhost:3000/name/user
        //post : localhost:3000/name
        //브라우저 <-> 서버
        if( req.url.includes('name') && req.method === 'POST'){
            let body = '';
            req.on('data', (chunk)=>{
                body = chunk.toString();
                //안에서 처리할 수 있음
                
            })

            req.on('end', ()=>{
                const newUser = JSON.parse(body);
                console.log(newUser);

                const response = fs.readFileSync(path.join(__dirname, 'model', 'users.json'))
                const users = JSON.parse(response);
                users.push( newUser );

                fs.writeFileSync(
                    path.join(__dirname, 'model', 'users.json'),
                    JSON.stringify(users, null, "    "),
                    "utf-8", 
                    (err)=>{
                        console.log(err)
                    }
                )

                // const content = {
                //     success :'ok',
                //     message : '정상등록 되었습니다.',
                //     name : newUser  // 
                // }
                // res.end(JSON.stringify(content));
            })
            //chunk 사용시 newUser.first_name 주의
            const content = {
                success :'ok',
                message : '정상등록 되었습니다.' 
            }
            res.end(JSON.stringify(content));
        }
    }catch(err){
        console.log(err);
    }
    
    res.end();
})

server.listen(PORT, ()=>{
    console.log('listing PORT ', PORT );
})

/* 
다음주 : 
javascript : document.querySelector()
jQuey :      $()

node route 매우 불편 (99%)
express route
*/