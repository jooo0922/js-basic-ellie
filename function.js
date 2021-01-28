// Function
// - fundemental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body...return; }
// one function === one thing 하나의 함수는 한가지의 일만 하도록 만들 것
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS 그래서 함수를 변수에다 할당하거나, 파라미터에다 전달하거나, 함수를 return 할수도 있다.
'use strict';

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);
// JS는 타입을 지정하지 않기 때문에 파라미터에도 string이 전달될 것인지, number가 전달될 것인지 딱히 선언하지 않고 그냥 씀
// 그래서 조금 난해하다.
// 그래서 TS에서는 항상 parameter나 return값의 type을 명시하도록 되어있음.
// 규모있는 프로젝트, 현업에서 다양한 개발자들과 업무시, 우리가 작성한 것을 library형태로 api로 제공해야 할 때
// 타입스크립트를 쓰는 게 조금 더 명확하고 개발일을 더 쉽게 만들어 줌

// 2. Parameters
// premitive parameters: passed by value 메모리에 value값이 바로 저장되니 value전달
// object parameters: paseed by reference 메모리에 reference가 저장되어 있어 reference를 전달
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
/*
function showMessage(message, from){
    if(from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
옛날에는 이런식으로 from에 해당하는 파라미터값을 전달받지 못할 경우에
어떻게 해줄것인지 if구문으로 따로 써줬음
*/
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// 하지만 지금은 이렇게 값을 전달받지 못한 파리미터 옆에 원하는 default값을 지정해 놓으면
// 값을 전달받지 못했을 때 해당 default 값을 대체해서 사용함.

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    // ...args 
    // 이렇게 쓰면 rest parameter 라고 부르며, Array 형태로 전달됨
    // 함수를 호출할 때 전달한 argument들로 하나의 Array를 만들어냄 
    // array.length 는 해당 배열의 개수

    // args에 있는 모든 값들이 arg로 차례차례 하나씩 지정되면서 콘솔에 출력. 이렇게 간단하게 할수도 있음.
    for (const arg of args){ 
        console.log(arg);
    }

    // array 함수 forEach로 할수도 있고! 이거는 nomad에서 해봤으니 알지?
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    printAnother();
    // console.log(childMessage); 이것도 여기다가 쓰면 당연히 에러 뜨겠지?
}
printMessage();
/*
'밖에서는 안이 보이지 않고
안에서만 밖을 볼 수 있다.'

이 문장만 기억하면 됨.
console.log(message);
그니까 이렇게 안에서 정의한 변수를 밖에서 써먹을 수 없다고. 이거 해보면 콘솔창에 에러 뜸.
{} 블록 안에서 정의한 변수는 블록 안에서만 쓸 수 있음.
밖에서 정의한 거는 밖에서, 안에서 둘 다 쓸 수 있지만,
안에서 정의한 거는 안에서만 쓸 수 있음.
*/

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1,2)}`);
/*
얘내 말고 위에 있는 함수들처럼 return값이 딱히 없는 애들은
각 함수의 맨 마지막줄에 
return undefined;
가 써있는 것과 같음. 단 생략이 가능하므로 안쓰는 것. 

그래서 모든 함수는 
return undefined
return 결과값
무조건 둘 중 하나라고 보면 됨
*/

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if (user.point > 10){
        //long upgrade logic...
    }
} 
// 이런 식으로 진행하고 싶은 로직을 if구문 안에 넣으면 비효율적

// good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    //long upgrade logic...
} 
// 그래서 조건이 맞지 않는 경우에서 빨리 return을 해버려서 if구문을 탈출해버리고, 그 다음에 로직을 진행하는 게 좋다.

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// 이것도 var hoisting과 마찬가지로 함수를 선언하기 전에 호출해도 js 엔진이 함수 선언을 제일 위로 올려주기 때문에 가능함. 
// a function expression is created when the execution reaches it.
// 함수를 선언함과 동시에 바로 print라는 변수에 할당. 이렇게 이름이 없는 함수를 anonymous function 이라고 함.
// 하지만 원한다면 함수에 이름을 넣어서 const에 할당하는 것도 가능하다. named function
console.log('print');
const print = function () { 
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
/*
정답이 틀릴 때와 맞을 때 호출하게 될 함수를 각각 전달해서
'야 니가 상황이 맞으면 그거에 맞게 여기 전달된 함수를 불러'
라고 전달하는 함수를 callback 함수라고 함.

여기서는 2가지의 callback functions가 parameter로 전달된 상태임.
*/
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

//anonymous function
const printYes = function(){
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
/*
recursion은 함수 안에서 함수 자신을 호출하는 것.
function print(){
    console.log('no!');
    print();
};
이런식으로 print() 함수가 무한 실행됨
일반적인 경우에는 프로그램이 죽으니까 절대 쓰면 안되고
정말 필요할 때만 써야함. 이것도 나중에 쓰임새를 알려준다고 함.
*/
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// 함수를 너무 간결하게 만들어주는 좋은 놈.
// 함수명을 절대 붙이지 않음.
/*
const simplePrint = function(){
    console.log('simplePrint!');
};
*/
const simplePrint = () => console.log('simplePrint!');
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}
// 이런식으로 함수에서 좀더 다양한 일을 하고싶은 경우 arrow function에서 {}블록을 사용해서 만들어도 됨.
// 대신 블록을 쓰면 리턴값이 있다면 return을 꼭 써줘야 함

// IIFE; Immediately Invoked Function Expression
/*
function hello(){
    console.log('IIFE');
}
hello();
기존에는 이런식으로 함수를 선언하고 나서 호출해야 했음
*/
(function hello(){
    console.log('IIFE');
})();
// 이렇게 해주면 함수를 선언함과 동시에 호출이 가능하다! 이런걸 IIFE라고 함.
// 최근에는 잘 쓰이지는 않는데 자바스크립트에서 이런 것도 가능하다는 걸 알아두라고

// Fun quiz time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder 
// 정답은 다양한 방식으로 구현 가능. 정답인지 아닌지는 말할 수 없음.
function calculate(command, a, b){
    if (command === 'add'){
        return a + b;
    } else if (command === 'subtract'){
        return a - b;
    } else if (command === 'divide'){
        return a / b;
    } else if (command === 'multiply'){
        return a * b;
    } else if (command === 'remainder'){
        return a % b;
    } else {
        console.log(`invalid calculation`);
    }
}
console.log(calculate('multiply', 5, 2));

/* 
드림코딩은 switch문을 이용해서 작성함.
이렇게 여러개의 else if 구문이 필요하다면
switch문을 활용하여 작성하는 게 더 좋다.

function calculate(command, a, b){
    switch (command){
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));
*/