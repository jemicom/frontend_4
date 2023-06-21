const math = require('./modues/math');
// math = { add, sub }

console.log(math.add(1, 2));
console.log(math.sub(11, 2));

const {  sub, add } = require('./modues/math');
// 전개 연산자 
// 필요한 속성만 꺼내올 수도 있고 순서도 상관 없음 

console.log( add(50, 100))
console.log( sub(50, 100))

const { mod } = require('./modues/math');
console.log( mod(50, 9));
// 필요한 기능만 꺼내 올수도 있음 