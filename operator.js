'use strict';

// 1. String concatenation
// 문자열을 +를 이용해서 합쳐주는 방법
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder 나누고 나머지 값
console.log(2 ** 3); // exponentiation 2의 3제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // ++는 해당 변수의 값에 1을 더해서 넣어주라는 뜻.
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// counter = counter + 1; 
// preIncrement = counter; 
// 이 코드와 동일. counter 안의 값에 1을 증가시켜 counter에 다시 넣어주고, 그렇게 override된 conuter를 preIncrement에 넣어라
// 그래서 counter도 3으로 나오고, preIncrement도 3이라고 나온다.

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// postIncrement = counter;
// counter = counter + 1;
// 이거는 원래의 counter 값을 postIncrement에 넣은 다음에 counter의 값을 1 증가시켜서 counter에 넣어주라는 뜻 

const preDecrement = --counter; 
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
// 위와 동일

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y; 에서 반복되는 x생략해서 코드를 작성한 것. 즉, x값에 y값을 더해서, 할당해서 대입해라는 뜻인거지
console.log(x);
x -= y;
console.log(x);
x *= y;
console.log(x);
x /= y;
console.log(x);

// 5. Comparison operators (비교 연산자)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal 
console.log(10 > 6); // greater than 
console.log(10 >= 6); // greater than or equal 

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value!!
console.log(`or: ${value1 || value2 || check()}`); // 셋 중 하나만 true면 true값을 반환해줌

// || (or), finds the first falsy value!!
console.log(`and: ${value1 && value2 && check()}`); // 셋 다 true여야 true값을 반환해줌

// often used to compress long if-statement
// nullableObject && nullableObject.something
/*
if (nullableObject != null){
    nullableObject.something;
}

이게 뭐냐면 앞에 nullableObject가 진짜로  null이면 false가 되기 때문에
뒤에 nullableObject.something를 실행하지 않음.
즉 앞에 nullableObject가 null이 아닐때에만 뒤에서 nullableObject의 something값을 받아오게 됨.
이런식으로 null check 할때도 쓰인다는 거임.
*/

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('😱')
    }
    return true;
} // check() 함수는 for loop로 쓸데없이 시간낭비 좀 하다가 어쨋든 결국에는 true값을 리턴함.
/*
이 때 정말 중요한 거!!!
|| (or)는 하나만 true면 되니까, console.log안에 첫번째 값이 true면 
뒤에 값들은 아예 쳐다보지도 않음. 그니까 마지막 check()함수도 실행을 안함.
그래서 value1 = true; 로 하면 check()안에 이모지가 콘솔창에 찍히지 않음. 애초에 함수실행을 안하니까!

마찬가지로 && (and) 에서는 맨 첫번째거가  false면 
하나만 false여도 성립이 안되니까 뒤에 것들은 쳐다보지도, 실행하지도 않음.

그니까! 이런 computer가 연산을 많이해야 하는 함수같은 건 || (or) 나 && (and) 에서 첫번째에 두지 말고
가급적 마지막에 두는게 낫겠지? 그래야 만약 앞에서 true값 또는 false값만 찾는다면 
heavy한 연산을 최대한 안할 수 있을테니까!!
*/

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 
// js가 야 문자열이긴 한데 안에 들어있는건 숫자 5로 똑같으니까 같은거야 로 인식. 느슨하게 같은지 확인함
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// js type을 신경써서 type이 다르면 다른 애들인거야로 인식. 엄격하게 같은지 확인함
// 코딩할때는 왠만하면 strict equality를 사용하는게 당연히 좋겠지
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);
/* 
ellie1 과 ellie3은 서로 같은 reference를 공유하고 있으므로 같다고 인식하지만,
ellie1 과 ellie2는 object안에 data들만 같을 뿐 reference가 다르므로 다르다고 인식함.
object가 같은지 여부는 해당 메모리에 들어있는 reference가 같은지 다른지에 달림!
*/

// equality - puzzler
// '', null, undefined는 모두 false로 간주하기 때문에 ==(느슨한 연산자)로 비교하면 다 true가 됨
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false);  // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'df';

if(name2 === 'ellie'){
    console.log('Welcome, Eliie!');
} else if(name2 === 'coder'){
    console.log('You are amazing coder');
} else{
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// condition이 true니? true면 value1을 실행하고, 아니면 : 다음에 있는 아이(value2)를 실행하는거야
// if구문을 좀 더 간단하게 쓸 수 있게 해줌
// 간혹 얘를 2개 이상으로 묶고 묶어서 사용하는 경우가 있는데 이러면 코드의 가독성이 떨어짐
// 이런 경우라면 if나 나중에 배우게 될 switch를 쓰는게 나음. 간단할때만 Ternary operator를 쓸 것
console.log(name2 === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks if와 else if를 여러개 반복해서 사용한다면 switch사용을 고려해보는게 좋음
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE'
switch (browser){
    case 'IE':
        console.log('go away!');
        break; // browser의 값이 'IE'면 console.log('go away!');를 실행하고 멈춘다(break;) ->요거의 반복
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    /* 
    위에 두개는 같은 연산을 실행하기 때문에
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    이렇게 써도됨
    */
    default:
        console.log('same all!');
        break;
}   
    
// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}
// ()안에 statement가 false로 나오기 전까지는 무한대로 반복해서 계속해서 도는 것

// do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// 먼저 block{} 을 실행한 다음에 조건이 맞는지 안맞는지를 검사함

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
} 
/*
begin을 처음에 딱 1번만 호출하고
block{}을 실행하기 전에 condition이 맞는지 확인하고
block안에 것들을 실행하고 
그 다음에 step을 실행함

그래서 결국 begin -> (condition -> block -> step) -> (condition -> block -> step) -> (condition -> block -> step) ->
(condition -> block -> step)의 무한반복이라고 보면 됨
condition이 안맞을 때까지 계속 반복 실행함
*/

for (let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    // 그냥 'i = 3' 처럼 기존 변수에 값을 할당해도 되고 
    // block 안에 let이라는 지역변수를 선언해서 작성하는 것도 좋다.
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j <10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}
/*
이렇게 for안에 for를 넣게 되면
i === 0 일 때, j를 0~9까지 계속 삥 돌리게 되고
i === 1 일 때, j를 0~9까지 계속 삥 돌리게 되고 이런식으로 i가 9가 될때까지 하다가 10이 되면 멈추겠지

그런데 이렇게 nesting해서 작성하게 되면 cpu에 좋지 못함.
되도록이면 피하는 게 좋다!
*/

// break, continue 이런 키워드를 써서 loop를 끝낼 수 있다
// break는 loop를 완전히 끝냄
// continue는 지금것만 skip하고 다시 다음 step으로 넘어가는 것을 말함
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <= 10; i++){
    if(i % 2 === 1){
        continue;
    } else {
        console.log(`i: ${i}`);
    }
}

for (let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log(`q1. ${i}`);
    } 
} // ->사실 굳이 continue를 써야하는 게 아니라면 더 짧고 간단한 코드로 원하는 값만 얻을 수 있도록 쓰는 게 더 좋다.

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++){
    if(i > 8){
        break;
    } else {
        console.log(`i: ${i}`);
    }
}