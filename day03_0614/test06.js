const fs = require('fs');
// 파일 읽기, 쓰기 
// 폴더만들고 지우고
process.on('mkdir', ()=>{
    console.log('폴더 생성 ')
})
process.on('rmdir', ()=>{
    console.log('폴더 삭제 ')
})

setTimeout(()=>{
    fs.mkdir('./newDir', (err)=>{
        console.log(err)
    })
    process.emit('mkdir');// 이벤트
}, 1000)


setTimeout(()=>{
    fs.rmdir('./newDir', (err)=>{
        console.log(err);
    })
    process.emit('rmdir');
}, 3000)

