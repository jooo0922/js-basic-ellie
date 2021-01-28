// 1. Use strict
// added in ES5
// use this for Vanilla Javascript
'use strict';

// 2. Variable (변수, 변경될 수 있는 값.), rw(read/write)->메모리에 값을 읽고 쓰는것이 가능함.
// let (added in ES6) ...이 수업은 ES6문법을 기준으로 수업함. ES6문법을 배우면서 복습하는 셈 치고 듣기
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
/*  
Block scope
{}를 이용해서 block안에 코드를 작성하면
block 밖에서는 더 이상 block 안에 있는 내용을 볼 수 없음!
그래서 콘솔창에 block 내부에 변수를 찍어보면 아무것도 안나옴.
*/

console.log(globalName);
/*  
Global scope
{}를 이용해 block을 사용하지 않고 파일 안에다가 바로 정의해서 쓰는 변수들
어느 곳에서나 접근이 가능
어플리케이션이 실행되는 순간부터 끝날때까지 항상 메모리에 탑재되어 있음.
최소한으로 쓰는 것이 좋다.
가능하면 class, 함수, if, for loop 등 필요한 부분에서만 정의해서 쓰는 것이 좋다.
*/

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) 
// 어디에 변수를 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것. js가 미친짓을 할 수 있었던 이유...
// has no block scope -> var는 {}안에서 사용한 변수도 밖에서 볼 수 있음. block을 무시해버림. 그래서 쓰면 안되는 거...
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant (한 번 할당하면 값이 절대 바뀌지 않는 아이.), r(read only)->할당된 값을 읽기만 가능
// Use const whenever possible.
// only use let if variable needs to change.
// 값이 계속 변경되는 것을 Mutable data type 이라고 함.
// constants는 변경이 불가능하기 때문에 immutable data type이라고 함.
// favor immutable data type always for a few reason:
// 많은 개발자들이 '웬만하면 값을 할당하면 다시는 변경되지 않는 데이터 타입을 사용하라'고 함. 그 이유 3가지는?
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = '7';
const maxNumber = '5';

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data types always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types(자바스크립트 데이터 타입)
/* 
primitive (single item): number, string, boolean, null, undefined, symbol 
더 이상 작은 단위로 나눠질 수 없는 한가지의 작은 아이템들
값 자체가 메모리에 저장됨
*/
/* 
object (box container)
single item들을 여러개 묶어서 한 단위로, 한 박스로 관리할 수 있게 해주는 것들
너무 커서 메모리에 다 한번에 올라갈 수 없음.
해당 object가 가리키는 곳에는 ref(reference)가 담겨있음.
이 ref는 실제 object의 값들이 담겨있는 메모리를 가리키게 됨
*/
/* 
function (first-class function)
js에서는 function도 데이터 타입 중 하나임.
'js는 first-class function을 지원한다' 
= js에서는 function도 다른 데이터 타입처럼 변수에 할당할 수 있고, 또 그렇기 때문에
함수의 parameter, 인자로도 전달이 되고, 함수에서 return type으로도 function을 return할 수 있다는 뜻. 
*/
/* 
c나 java는 data types for number만 해도 여러개이지만,
js는 'number' 하나면 숫자는 다 끝남. 모든 number data types는 저거 하나로 할당됨.
그래서 integer랑 decimal number를 각각 입력해서 콘솔창에 데이터타입을 확인해봐도 둘다 number라고만 뜸.
심지어 number라고 선언하지도 않아도 됨. js는 type이 dynamic하게 결정되기 때문.
typescript는 
let a: number = 12; 처럼 'number' 라고 명확하게 선언만 해주면 됨.
*/
const count = 17; // integer
const size = 17.1; // decimal number  
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
// number중에서도 좀 특별한 값들. 대부분의 프로그래밍 언어들에서도 동일 적용
const infinity = 1 / 0; // 양의 숫자를 0으로 나누면 그래프에서는 무한대의 숫자값이 생김. -> infinity
const negativeInfinity = -1 / 0; // 음의 숫자를 0으로 나누면 -> -infinity
const nAn = 'not a number' / 2; // string을 숫자로 나누면 -> NaN (Not a Number. 숫자가 아니다.)
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (새롭게 추가됨. 이 정도로 큰 범위의 숫자들은 프로그래밍 하면서도 잘 안쓰임. 크롬, 파이어폭스에서만 지원됨)
// js에서 number는 (-2**53)(-2의 53제곱) ~ 2**53(2의 53제곱) 이 정도 범위안의 숫자까지만 표현됨.
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2**53
// 이런 숫자 뒤에 n만 붙이면 bigInt로 간주되어 짐. 콘솔창에 찍으면 bigint 라고 나옴.
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan'; // js는 글자가 1개든 여러개든 다 string으로 할당됨. 다른 프로그래밍 언어는 두개가 또 다른가봄.
const greeting = 'hello ' + brendan; // 일반 string과 다른 변수를 + 기호로 붙이는 것도 가능
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; 
/*
template literals (string)
`string ${}` 백틱안에 원하는 string을 적고 달러 sign과 괄호를 이용하면 
괄호안의 변수의 값이 자동적으로 string으로 고쳐져서 나옴.
*/
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); 
/* 
console에 찍을때는 
console.log('value ' + helloBob + 'type: ' + typeof helloBob);
이렇게 따옴표안에 일일이 넣어서 +기호, 띄어쓰기 다 해야해서 굉장히 번거로움.
그래서 ``(백틱)을 이용하면 안에 있는 띄어쓰기, 변수 값들이 그대로 나옴. 더 간편하게 string을 만들 수 있음.
*/

// boolean
// false: 0, null, undefined, NaN, ''(비어있는 string) 요런 애들은 다 false로 간주
// true: any other value 즉, 1이나 string 등 다른 값들은 전부 true로 간주.
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null; // 명확하게 '너는 텅 비어있는 empty값이야' 라고 지정해주는 것.'
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x; // 변수가 선언은 되었지만 아무것도 값이 지정되어있지 않음.
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 정말 고유한 식별자가 필요하거나 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 사용.
// 동일한 id로 symbol을 만들어도 밑에 처럼 각기 다른 변수에 넣었다면 두 가지의 심볼은 다른 심볼로 간주함
// 주어진 'id' 스트링에 상관없이 정말정말로 고유한 식별자를 주고싶을 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); 
console.log(symbol1 === symbol2);

// string이 똑같다면 동일하게 간주해주는 symbol을 만들고 싶을 땐 Symbol.for('id');
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id'); 
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// symbol 안에 값을 template literals로 출력시 반드시 '.description'을 써서 심볼값을 string으로 변환해줘야 콘솔창에 나옴.

// 5. Dynamic typing: dynamically typed language
/*
변수를 선언할 때 어떤 타입인지 선언하지 않고 run time, 즉 프로그램이 동작할 때
할당된 값에 따라서 타입이 변경될 수 있다는 뜻

내가 좋은 아이디어가 있거나 빠르게 프로토타이핑을 할 수 있을때는 좋은 언어임.
다수의 엔지니어 또는 규모있는 프로젝트에서는 dynamic typing때문에 발등에 불이 떨어질 일이 생김.
*/
let text = 'hello';
console.log(text.charAt(0)); // 변수안에 담긴 문자의 첫번째 글자를 출력함. h를 출력하겠지?
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // js 엔진이 'number' + number 인 경우 'number'가 string이기 때문에 number도 string으로 변환해서 합해줌.
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // js 엔진이 'number' / 'number' 인 경우, 나눗셈 연산자를 쓰면 두 string을 숫자로 인식해서 나누기해줌.
console.log(`value: ${text}, type: ${typeof text}`);
// onsole.log(text.charAt(0)); 만약 여기서도 text가 string인줄 알고 이렇게 콘솔찍으면 에러가 발생함
// run time에서 type이 정해지기 때문에 에러가 발생한 것.
// 이런 통수를 하도많이 맞아서 typescript가 나온 것...
// js에 type만 얹어진 거기 때문에 js부터 충분히 배우고 ts로 넘어가도 됨.  

// object, real-life object, data structure
// 우리가 일상생활에서 보는 물건과 물체들을 대표할 수 있는 box 형태를 말함.
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;
console.log(ellie);
/* 
ellie는 const로 정의되어 있기 때문에 다른 object로 할당이 불가하지만
그 안에는 name, age 라는 변수들이 존재해서 
ellie.name
ellie.age
이런식으로 하면 해당 변수들이 가리키는 메모리에 다른 값으로 할당이 가능하다는 것!
오브젝트로는 못바꾸지만, 오브젝트 안의 변수로는 바꿀 수 있다는 거야!
*/

//function과 object는 너무 중요한 주제라 나중에 따로 다루게 될 것