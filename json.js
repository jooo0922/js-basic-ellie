'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
// stringfy = 이름으로도 유추가 됨. '아, object를 string화 하는거구나!'
// 반대로 parse는 그럼 string을 object로 변환하는 거겠구나!
/* 
ctrl + 우클릭 해보면 동일한 stringify가 2개 나옴. 
근데 두 개의 전달되는 매개변수가 조금 차이가 있지?
이런 걸 오버로딩(Overloading)이라고 함.
함수의 이름은 동일하지만 어떤 파라미터를 전달하는지, 몇 개의 파라미터를 전달하는지에 따라
각각 다른 방식으로 호출 가능한 것.
*/
let json = JSON.stringify(['apple', 'banana']); // 이런 premitive한 boolean type도 json으로 변환 가능
console.log(json); 
// 콘솔창에는 ["apple","banana"] 이렇게 작은 따옴표가 "" 큰따옴표로 바뀜. 이게 json의 규격사항.
// 그리고 어느 정도 [] 도 사용되서 string으로 변환하더라도 배열처럼 보이는 걸 확인할 수 있지?

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(), // Date 생성자는 시간의 특정 지점을 나타내는 Date 객체를 생성하는 자바스크립트의 표준 내장 객체, class겠지?
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

/*
new Date()로 새롭게 생성된 object의 날씨정보가 string 변환되어서 json으로 만들어진 걸 볼 수 있고
jump에 할당된 함수는 이 json에 포함되지 않는 것을 확인할 수 있다.
함수는 object에 있는 데이터가 아니기 때문에 함수는 제외.
Symbol("") 같은 자바스크립트에만 있는 특별한 데이터도 json에 포함되지 않음.
*/
json = JSON.stringify(rabbit);
console.log(json);

// stringify(rabbit, ['name']); 하면 rabbit에서 'name'이라는 key와 value만 json으로 변환해줌. 
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// replacer?() 로 json을 디테일하게 컨트롤함. 
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    /*
    return value; 로 해서 콘솔에 찍어보면
    key: , value: [object Object]
    이렇게 맨 처음에는 rabbit을 둘러싼 제일 최상위 것이 전달됨.
    그 뒤부터 각각의 key와 value들이 전달됨.
    */ 
    return key === 'name' ? 'ellie' : value;
    // key가 name이면 ellie 값을 넣어서 json으로 변환하고, 아니면 기존의 값으로 변환하라
    // 이런식으로 replacer() 콜백함수를 이용해서 json 변환 시 세밀하게 통제할 수 있음.
});
console.log(json);


// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);

// JSON.parse(변환하고 싶은 json); 하면 쉽게 object로 변환 가능
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
    /* 
    key가 birthDate면 해당 value를 new Date() 생성자에 넣어서 새로운 Date() 오브젝트를 생성해서 변환하고 
    (왜냐하면 나중에 다시 Date()의 API를 써먹고 싶으니까)
    key가 그게 아니라면 원래 value로 변환하라 
    -> stringify에서 replacer()과 마찬가지로 변환 시 세밀한 조정 가능
    */
}); 
console.log(obj);

/* 
rabbit 오브젝트를 만들 때 함수가 있었으니 호출이 가능하지만
rabbit object를 json으로 변환하면 함수가 포함되지 않음.
따라서 serialize 된, string으로 만들어진 json으로부터 object로 변환했을때도 해당 함수가 포함되지 않음.
*/ 
rabbit.jump();
// obj.jump(); 

console.log(rabbit.birthDate.getDate());
// rabbit에 있던 birthDate는 Date() 생성자에서 만든 object이므로, Date()안에 존재하는 getDate()같은 API도 사용 가능!

console.log(json);
console.log(obj.birthDate);
// console.log(obj.birthDate.getDate()); 앞에서 parse로 변환 시 reviver()를 사용하지 않는다면 API사용하려고 할 때 에러가 뜰거임. 
// json에 있는 string이 obj.birthDate에 할당된 것이기 때문에 obj.birthDate는 string임. 그러니까 API를 사용 못함!
// 그래서 얘내들을 좀 더 세밀하게 다시 Date() 오브젝트로 변환하고 싶을 때 콜백함수 reviver()를 사용함

/*
유용한 사이트:
JSON Diff checker: http://www.jsondiff.com/
JSON Beautifier/editor: https://jsonbeautifier.org/
JSON Parser: https://jsonparser.org/
JSON Validator: https://tools.learningcontainer.com/json-validator/
*/
