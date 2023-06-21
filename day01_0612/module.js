// node가 사용하는 모듈
const user = {
    firstName : "jemicom"
}

const userName = "hello";

// 외부에서 사용할 거야 
// module.exports = userName;
module.exports = { userName, user };
// module.exports = { userName : userName , user : user };


// 내가 만들수도 있지만 
// 이미 개발자 많이 만들어 둠 
// https://www.npmjs.com/  모듈 모아둔 사이트  