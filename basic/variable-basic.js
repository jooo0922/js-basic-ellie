'use strict';

// variable (변수): 데이터를 담을 수 있도록 도와주는, 담고있는 것. 변수를 통해 데이터에 접근, 데이터를 업데이트 할 수 있음.
// premitive data type(변수에 담을 수 있는 '가장 작은 단위'의 데이터들): number, string, boolean, null, undefined
let age = 2; // 변수명은 변수에 담긴 데이터와 연관된, 의미있는 이름으로 짓는 게 좋다.
let num = '2';

let number = 2;
let number2 = number;
// 이러면 number2만을 위한 메모리 공간이 생기고, number에 있는 2 값을 그대로 복사해서 메모리 공간에 할당함.
console.log(number);
console.log(number2);

number2 = 3;
// 이제 number2에 있는 값을 숫자 3으로 업데이트한거임.
console.log(number);
console.log(number2);

// object data type
// 최소한 한 두가지 이상의 다양한 데이터를 한 군데에 묶어놓은 것.
// premitive data type을 제외한 모든 데이터 타입은 'object'다
// array, list, function 이런 것들도 결국엔 모두 object라구.
// 이런 애들은 데이터가 너무 커서 변수를 선언해서 할당된 메모리공간에 다 담아놓을 수가 없다.
// 그래서 object안의 각각의 데이터들은 자기들만의 공간에 있고, 이 공간들을 가리키는 reference가 해당 메모리 공간에 들어간다.
let obj = {
    // object에 있는 key들도 각각의 key마다 메모리공간이 할당되서 그 공간에 해당 key의 value가 들어가는거임.
    name: 'ellie',
    age: 5,
}
// 이 key의 value들이 들어있는 메모리 위치, 메모리 주소를 나타내는 reference들이 있음
// 이 reference들이 let obj에 할당된 메모리공간에 들어가 있는 상태인거쥐!

// 이렇게하면 obj 중에서도 name이라는 이름을 가진 변수를 찾고있구나 라고 이해할 수 있음.
console.log(obj.name); 

let obj2 = obj; 
// 변수를 할당할 때는 무조건 그 변수에 들어기있는 값이 '복사'되어서 들어온다.
// obj2에 해당하는 새로운 메모리 공간이 생기고, 그 공간으로 obj에 들어가있는 reference 값이 '복사'되어서 들어간다! 
console.log(obj2.name); 

obj.name = 'james';
console.log('------');
console.log(obj.name); 
console.log(obj2.name); 
// 이렇게 하면 둘 다 james로 바뀌어서 나온다. 왜?
// obj에서 name을 가리키는 ref나, obj2에서 name을 가리키는 ref는 모두 name: 'ellie' 가 담긴 메모리 공간을 가리키니까!
// 여기의 value를 'james'로 바꾼다면, 콘솔창에 obj.name으로 찍으나 obj2.name으로 찍으나 똑같은 name: 'james'가 담긴 메모리 공간을 가리키게 되는 것! 
// 이런 부분이 premitive data type이 담긴 변수와 object가 담긴 변수의 차이점이다.
// premitive value 그 자체가 담긴다는 것 vs ref가 담긴다는 것
// 그래서 값을 업데이트 하면 value 자체가 바뀐다는 것 vs 'ref가 가리키는 메모리 공간에 담긴' value가 바뀐다는 것 

// let은 마음이 바뀌면 언제든 안에 들어있는 value를 바꿀 수 있음
let a = 2;
a = 5;
a = 9; 

// const는 안에 담긴 value를 바꾸는 게 불가능
const b = 2; 
// b = 4; 

// 그렇지만, object는 const로 선언해도 안에 담긴 값을 바꾸는 게 가능한 이유가 뭘까?
// 정확히 말하면, object안에 있는 reference 즉, 주소값을 바꾸는 게 아니라, 그 '주소가 가리키는 메모리에 담긴 값'이 바뀌는 거니까!
const object = {
    myName: 'ellie',
    myAge: 5,
};

/*
object = {
    myName: 'james',
    myAge: 7
};
이런식으로 object 자체에 담긴 reference 변경은 불가능함.
*/

// 대신에 object가 가리키고 있는 myName을 다른 값으로 바꾸는 건 가능하다!
// const를 쓴다는 것은 const에 담겨있는 value 자체만 변경이 불가능하다는 거지!
// 그래서 const에 premitive type data를 넣으면, const안에 값 자체가 담긴 것이라서 변경이 안되는 거야.
object.myName = 'james';

/* 
여기까지, 이 개념을 정말 잘 이해해야 한다.
이 부분이 매우 중요한 개념들이다.
*/