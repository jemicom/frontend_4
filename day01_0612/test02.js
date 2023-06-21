// 디스트럭쳐링 
// 배열, 오브젝트의 구조를 깨서 내가 필요한 값으로 변환 하는 문법

let ary = [1,2,3];
// let one = ary[0];
// let two = ary[1];
// let three = ary[2];

let [one, two, three] = ary;
// 순차적으로 순서대로 꺼냄 : 이터러블

console.log( one, two, three );

const user = {
    name : 'kim',
    age : 30, 
    subject : 'node.js'
}

// let name = user.name; 
// let age = user.age; 
// let subject = user.subject; 

const { name, age, subject } = user;
// 객체는 순서가 없으므로 같은 속성명으로 꺼내옴 

console.log( name, age, subject );