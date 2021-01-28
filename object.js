'use strict';
// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects int JavaScript are instance of Object(이거는 자바스크립트에 내장된 하나의 class임)
// object = { key : value }; 즉, 오브젝트는 key와 value의 집합체라는 걸 짚고 넘어갈 것!
// key: 우리가 접근할 수 있는 변수, propertry. 
// value: 그 property가 가지고 있는 값.

// 1. Literals and properies
/*
premitive type: 변수 하나당 값을 하나만 담을 수 있음.

const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}

이렇게 했을 때, full name, last name, address 등
인자가 많아지게 되면 원하는 데이터를 print하고자 한다면
추가해야하는 것들이 아주 많아지겠지?
관리하기도 어렵고, logical하게 그룹으로 묶어서 생각하기도 어렵지.
*/

// 그래서 이러한 점들을 개선하고자 object를 씀
// object는 class를 활용하거나 {} 컬리브라켓을 활용해서 만드는 등 2가지 syntax(문법) 있다!
const obj1 = {}; // 'object literal' syntax 
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4}; // 자바스크립트에서는 class 없이도 이렇게 {}를 이용해서 바로 object 생성 가능.
print(ellie);

/* 
js 는 Dynamically typed language 라고 했지?
동적으로 타입이 runtime(프로그램이 동작하고 있을 때) 때 결정되는 언어.
그래서 이런 미친짓을 할 수 있음
이렇게 뒤늦게 하나의 property를 추가할 수 있음.
이것은 다른 언어에서는 흔한 일이 아님.
이렇게 동적으로 코딩하면 금방금방 추가하기는 좋더라도
나중에 유지보수가 힘들고
생각지 못한 에러 발생 가능. 가급적 이렇게 코딩하는 걸 지양해야 됨.
*/
ellie.hasJob = true;
console.log(ellie.hasJob);

/*
하나 더 미친짓이 가능함.
delete를 이용해서
맘이 바뀌어서 나중에 property를 삭제할 수도 있음.
*/
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties (계산된 properties)
// key should be always string ... object[property] NO! / object['property'] YES!
console.log(ellie.name); // object는 .(dot) 를 이용해서 property에 접근이 가능
console.log(ellie['name']); // 또는 computed property 즉, 배열에서 데이터를 받아오는 것처럼 ['property'] 이런식으로도 접근 가능.
ellie['hasJob'] = true; // computed property로도 앞서 했던것처럼 나중에 property를 추가할 수 있다.
console.log(ellie.hasJob);
/*
언제 무엇을 쓰나?
.(dot): 코딩하는 그 순간, 그 key에 해당하는 value를 받아오고 싶을 때. 일반적으로 코딩할 때는 그냥 dot을 쓰는 게 맞다.
computed properties: 우리가 정확하게 어떤 key가 필요한지 모를 때, 또는 어떤 key가 오게될 지 모를 때, 즉! runtime에서 결정될 때!!
ex>
function printValue(obj, key){
    console.log(obj.key);
}
printValue(ellie, 'name');
이렇게 해서 오브젝트와 그 안의 key를 받아서 그에 상응하는 value를 출력하고 싶을때,
이 함수를 선언하고 작성하는 순간에는 key가 뭘로 올 지 모를거아냐?
이럴때 obj.key이렇게 써버리면
실제 obj라는 오브젝트 안에 key라는 이름의 키에 담겨진 value에 접근하려고 할거임.
그런데 실제로 obj는 실제로 있는 오브젝트가 아니라 저거는 그냥 임의의 parameter 이름이잖아.
그니까 콘솔에는 undefined로 나오지.
이런 경우에 computed property가 필요하다고.

이처럼 나중에 동적으로 runtime에서 key에 관련된 value를 받아와야 할 때 쓴다.
*/
function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
// 여기서 person4, 5, 6... 만들고 싶으면 위에랑 똑같이 또 번거롭게 작성하기 싫다
// 그러면 함수를 이용해서 만들 수 있겠지?
/*
function makePerson(name, age){
    return{
        name: name,
        age: age
    };
}
이 때, name: name처럼 key와 value의 이름이 동일하다면 name으로 생략 가능하다.
이것이 js의 기능인 Property value shorthand

function makePerson(name, age){
    return{
        name,
        age
    };
}

const person4 = makePerson('ellie', 30);
console.log(person4);

그런데 곰곰히 생각해보니 이 makePerson() 함수는
우리가 지난번에 만들었던 class 즉, template같은 아이라고도 볼 수 있지?
그래서 js에 class 개념이 도입 안됬을 때는
이런식으로 템플릿 함수를 만들어서 사용하기도 했다.

이렇게 다른 계산을 하지 않고 순수하게 object를 만드는 함수들은 
이런식으로 마치 class를 만드는 것처럼
대문자로 함수명을 지정하고,
호출할때도 new를 붙여서 호출하고,
this.name으로 변수를 만들어서 전달받은 값을 할당하는 식으로 작성하는 것도 가능하다!!
*/

// 4. Constructor function
function Person(name, age){
    // 여기서 생략된것은 this = {}; 로 새로운 오브젝트를 만들어서 this에 name이라는 새로운 property를 넣는것과
    this.name = name;
    this.age = age;
    // return this; 이 this를 리턴하는 함수가 생략되어 있는 형태이다.
}
const person4 = new Person('ellie', 30);
console.log(person4);

// 5. in operator: property existence check (key in obj) 
// 해당하는 오브젝트 안에 key가 있는지 없는지 확인하는 거. true/false로 나오겠지?
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random); // 우리가 만약 정의하지 않은 key를 접근하게 되면 undefined라고 콘솔에 찍힘

// 6. for..in vs for..of
// for (key in obj)
for (let key in ellie){
    console.log(key);
}
/*
forr loop + in operator

이것은 ellie가 가지고 있는 key들이
해당 {}블록을 돌 때마다 let key라는 for 구문 안에 있는 지역변수에 할당이 된다.
이 블록 안에서 console.log(key)해서 찍어보면
ellie안에 있는 모든 key들이 출력됨.
모든 key들을 받아와서 일들을 처리하고 싶을 때 for..in을 씀.

참고로 이 key는 그냥 임의의 변수명으로 potato라고 해도 상관없음.
*/

// for (value of iterable)
// object에 쓰는 것이 아니라 배열, 리스트같은 순차적으로 iterable한 것들에 씀.
const array = [1, 2, 4, 5];
for(let value of array){
    console.log(value);
}
/*
이렇게 하면 array에 있는 모든 값들이
순차적으로 value에 할당되면서
{}블록안에서 콘솔창에서 그 값들을 순차적으로 찍어줌.
*/

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: 20};
const user2 = user; // user 안에 들어있는 (object안에 실제 데이터들을 가리키게 될) reference값이 user2 에도 동일하게 할당된다는 뜻.
user2.name = 'coder'; // user2에 있는 name의 value를 'coder'로 바꾸면
console.log(user); // uswr에 있는 name의 value도 'coder'로 바뀐다!
// 이건 그림으로 보면 당연한거임. 왜냐? user와 user2에는 동일한 ref가 들어가있고
// 이 ref도 결국 동일한 object 데이터들을 가리키기 때문에, user2에서 수정하면, user에서도 수정되어있는 것이다. 복사된 게 아님.

// 그럼 이렇게 const user2 = user; 이런거 말고 정말 각각의 독립된 오브젝트로 복사할 수 있는 방법은 뭘까?
// old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
    /*
    user 안에 키 두개
    1. name
    2. age
    {}블록이 첫번째로 돌 때는, user3에 새로운 property, 즉 name을 추가하고, value는
    기존에 있는 user의 key, 즉 name에 있는 value('coder')가 할당이 되고,
    {}블록이 두번째로 돌 때는, 첫번째와 마찬가지로 두번째 key인 user가 추가됨.
    이런식으로 예전에는 manual 하게 복사할 수 있는 방법이 있었다.
    */
}
console.log(user3);

// new way
/* 
Object는 자바스크립트 안에 있는, 기본적으로 탑재된 object중에 하나였고, 
또 자바스크립트안에 있는 모든 object는 이 Object를 상속함.
이 assign은 MDN에서도 찾아볼 수 있는 Object안에 있는 하나의 method
이거를 ctrl+우클릭하면 해당 함수가 정의된 곳으로 이동할 수 있음.
이렇게 새로운 함수나 API를 쓸때는 어떤 parameter를 전달해서 어떤 값이 return
되는지 꼭 확인하면서 쓰는 것이 좋다.

assign<T, U>(target: T, source: U): T & U;
복사하려는 target과 복사하고자 하는 해당 source를 같이 전달해줘야 되고,
return값은 target과 복사하고자 하는 source가 통합된 것이 리턴됨을 확인할 수 있다.
*/
const user4 = {}; // 텅 비어져있는 target 오브젝트, 즉 복사하려는 타겟을 먼저 만든다.
Object.assign(user4, user); // assign<T, U>(target: T, source: U) 이렇게 하면 복사가 된다.
console.log(user4);
/*
const user4 = Object.assign({}, user);
이런식으로 써도 됨.
전달하려는 target 오브젝트값은 비어져있고 {}
Object.assign({}, user);얘는 target과 source가 섞인 게 return되니까
이 리턴값을 user4에 할당하는 식으로 작성해도 됨.
*/

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'}; // 일단 color라는 공통된 property가 있고, size라는 새로운 property가 있지?
const mixed = Object.assign({}, fruit1, fruit2);
// 얘내 두개를 섞어서 복사한 것이 mixed인데 이 mixed의 color와 size는 무엇이 출력될까?

console.log(mixed.color);
console.log(mixed.size);
/* 
Object.assign({}, source1, source2);
source는 뒤에 나오는 것일수록
앞에 나오는 source에도 동일한 property가 들어있다면
해당 property의 value를 뒤에 source안에 있는 value가 계속 덮어써준다.
그러니까 color: 'red'에서 'blue'로 덮어쓸테니 콘솔창에 찍으면 mixed.color의 value는 'blue'가 나오겠지
*/

/* 
혹시 앞서 공부한 class나 객체지향언어가 잘 이해안되도 괜찮음.
js는 사실 오브젝트를 더 많이 씀.
나중에 TS나 다른 언어 공부할때는 객체지향언어가 중요한 개념이기 때문에
객체지향개념이 많이 부족한 사람들은 JAVA 관련 서적을 구입해서 보면 도움이 될 것이다.
쨋든 이거는 배워두면 나중에 TS배울때 도움이 되니까 잘 공부해두자.
*/