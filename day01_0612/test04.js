const user = {
    firstname: 'jemicom',
    lastname : 'kim'
}
const { firstname, lastname }  = user;
console.log( firstname, lastname );

const { firstname : fn, lastname : ln }  = user;
console.log( fn, ln );

const { 
    firstname : fname = "hello" , 
    lastname : lname,
    age = 30
}  = user;
console.log( fname, lname, age ); // jemicom kim 30

const userTwo = {
    firstname : 'korea',
    address : {
        zipcode : '038569',
        city : 'Seoul'
    }
}

const { address } = userTwo;
console.log( address ); // 객체 

const { address : { city } } = userTwo;
console.log( city );

// 디스트럭처링 ... rest operater 역활(나머지 연산자)
const { x, ...rest } = { x :1, y:2, z :3}
console.log( x, rest ); // 1 { y: 2, z: 3 }