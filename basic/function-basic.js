'use strict';

// Don't give up
// 포기하지 말자. 기초강의 한번 더 복습

// 함수 선언
// 함수에는 두 가지가 있다.
// 1. 단순히 기능을 수행하는 함수
function doSomething(add){ // 함수를 인자로 받는 parameter 자리
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}
// 2. 어떤 계산을 한 다음에 그 결과값을 리턴하는 함수
function add(a, b){
    const sum = a + b;
    return sum;
}


// 함수 호출
// doSomething(add); 
// doSomething을 호출하면 'add'함수 자체만 인자로 전달하면, '함수에서 실행하는 내용'이 콘솔창에 찍히겠지
// return된 결과값이 찍히게 하려면 doSomething(add(1, 2)) 이렇게 add함수에도 인자를 넣어서 전달해야 함!
// 만약 doSomething(add()) 이렇게 전달하면, add함수를 실횅해서 리턴된 결과값, 즉 sum이 찍히겠지. 근데 
// add()에 인자를 전달해주지 않은 상태에서 전달했으니, sum에는 아무 값이 안들어있지. 그니까 NaN가 나오는거

const result = add(1, 2); // 이렇게 add() 함수가 전달한, return한 값을 result에 저장할 수 있어.
console.log(result);
// js는 html, css와 달리 ui적 요소가 없으므로 콘솔에 값을 찍어보면서 확인하면서 공부해야 함.

const addFun = add;
console.log(addFun);
addFun(2, 3);
