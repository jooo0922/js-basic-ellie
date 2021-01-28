'use strict';

// JavaScript is synchronous. (js는 동기적인 아이다.)
// Execute the code block in order after hoisting. 
// 즉, hoisting이 된 이후부터, 우리가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 말!
// 정해진 순서에 맞게 코드가 실행된다는 것.
// hoisting: var, function declaration 이런 선언들이 자동적으로 제일 위로 올라가는 것

// asynchronous: 비동기적으로 언제 코드가 실행될 지 예측할 수 없는 것을 말함.
/* 
ex> setTimeout() 
브라우저에서 제공하는 API
우리가 지정한 시간이 지나면 우리가 전달한 함수, 즉 콜백 함수를 호출하는 것.
콜백 함수: '야, 우리가 전달해 준 함수를 나중에 니가 불러줘.' 라는 개념.
배열 API에서 배웠듯이 map(), filter(), find() 등에서도 많이 활용하는 연습을 했었지?
그래서 setTimeout() 은 handler 콜백 함수를 전달하고, 
timeout 즉 어느정도 시간을 타임아웃 할건지 시간을 지정해주는 인자들을 전달받음.
참고로 지정할 시간은 ms(밀리세컨드) 단위, 1000ms = 1초
*/ 

console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000); // 1초가 지나면 우리가 전달한 function(콜백함수)가 실행되도록 하는 거
console.log('3');
/* 
이게 어떻게 되는거냐면,
js 엔진은 코드를  제일 위에서부터 밑으로 실행.
console.log('1'); 맨 처음 만나면 1을 출력하겠지
그리고 다음 라인은 setTimeout(), 브라우저 API니까 브러우저에게
'브라우저야 너에게 요청이 하나 왔어. 1초 뒤에 이 전달해 준 콜백함수를 실행해 줘' 라고 요청함.
그리고 얘는 응답을 기다리지 않고 바로 console.log('3'); 으로 넘어가서 3을 출력.
이후 브라우저에서 1초의 시간이 지난 다음에 '어 야 1초 지났어 이 콜백함수 실행해' 라고 얘기하면
그때서야 console.log('2'); 를 출력함.

이것이 asynchronous, 비동기적인 실행 방법!
*/
/* 
여기서 우리가 전달하는 함수는 바로 실행되는 것이 아니라
setTimeout() 함수 안에 하나의 파라미터 인자로 지정한 함수를 전달해주는 것.
그래서 지금 당장 실행하지는 않고 
'니가 나중에 1초가 지난 다음에 내 함수를 실행해줘, 내 함수를 불러줘(call)'
이렇게 해서 callback('나중에 다시 불러줘' 라고 하면서 전달하는 함수) 이런 함수들을 
'callback 함수'라고 함.

그리고 이런 함수들은 보통 arrow function으로 
setTimeout(() => console.log('2'), 1000);
이렇게 간단하게 전달할 수 있다고 반복해서 설명해줬지?
*/

// 그렇다면 callback은 항상 비동기(asynchronous)일때만 쓰일까? No!

// Synchronous callback (즉각적, 동기적으로 실행하는 콜백)
function printImmediately(print){
    print();
}

printImmediately(() => console.log('hello')); // 간단하게 console.log를 출력하는 함수를 전달해본거.
/*
여기서 js엔진이 어떻게 했을까?

함수 선언은 hoisting이 된다고 했으니
function printImmediately(print){
    print();
} 이거는 맨 위로 올라간 상태에서 함수를 읽고,
그 다음 console.log('1'); 이거 출력하고
그 다음 setTimeout() 이거 읽고 브라우저한테 요청하고
그 다음 console.log('3'); 이거 출력하고
그 다음 printImmediately(); 이거 호출해서 인자로 전달받은 함수 () => console.log('hello') 실행하고
마지막으로 1초 지나서 setTimeout()에 전달한 콜백함수 실행한 거지.
*/

// Asynchronous callback (나중에, 언제 실행될 지 예측할 수 없는 콜백)
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
} // 사실상 printWithDelay(print, timeout)은 setTimeout(print, timeout) 얘를 감싸고 있는 함수. 결국 같은거임.
printWithDelay(() => console.log('async callback'), 2000);
/*
마찬가지로 js엔진이 함수선언은 전부 위로 hoisting 했을 것임.

function printImmediately(print){
    print();
}

function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

console.log('1'); 동기
setTimeout(function(){
    console.log('2');
}, 1000); 비동기
console.log('3'); 동기
printImmediately(() => console.log('hello')); 동기
printWithDelay(() => console.log('async callback'), 2000); 비동기

요런 순서대로 코드를 읽고 실행했을거임.
*/

/*
강의 인트로에서 나선임은 왜 화를 냈을까?
신입이 '콜백들로만' 코드를 작성해서..
콜백함수는 유용하게 쓰일 때도 있지만
'콜백지옥' 이라는 말이 있을 정도로
콜백함수들을 계속 nesting(묶어 나가면서)
콜백함수 안에서 다른 콜백함수를 부르고, 그 안에서 또 부르고 부르고 부르고하면서
콜백지옥이라는 말이 생김.

콜백 지옥의 예제를 실제로 작성해보자

그래서 우리가 나중에 promise와 async/await를 배우면
이 지옥인 코드를 예쁘게 점점 변환해 보면서 희열을 맛보도록 할 것이다.
*/

// Callback Hell example
// 먼저 사용자의 데이터를 backend(서버)에게서 받아오는 class를 일단 만든다.
class UserStorage{
    /* 
    id, password받아서 로그인이 정상적으로 이루어지면 
    사용자 데이터와 함께 onSuccess라는 콜백함수 호출
    만약 로그인 실패하면, onError 콜백함수 호출
    */
    loginUser(id, password, onSuccess, onError){
        // 우리가 백엔드와 직접 통신하는 건 안배웠고, 실제 백엔드는 없으니 
        // setTimeout();으로 어느 정도 시간의 delay를 주면서 네트워크 통신을 하는것처럼 만들어보자
        // arrow function 으로 표기할때 콜백함수의 내용을 if문으로 표현하고 싶다면 {}로 그 내용들을 한번 감싸줘야 함.
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id); // onSuccess 자리에 올 콜백함수를 불러주는데 이때 이 콜백함수에 id를 전달해줌.
            } else {
                onError(new Error('not found!')); // 위 조건문에 만약 포함되지 않는 경우라면 Error() 생성자로 새로운 오브젝트를 만들어서 'not found'를 전달해줄거임.
            }
        }, 2000);
    }

    /*
    사용자의 데이터를 받아서 사용자마다 가지고있는
    admin이나 guest등 역할들을 서버에게 다시 요청해서 정보를 받아오는 api를 만듦.\
    (원래는 로그인 하자마자 이런 역할 정보들도 바로 가져와야하는게 맞는데 
    예시를 들기 위해 역할 정보에 대해서도 따로 요청을 해야하는 굉장히 잘못설계된 백엔드라고 치고...ㅋㅋ)
    그래서 사용자의 역할을 잘 받아온다면 onSuccess를, 
    만약 문제가 있다면 onError 호출.
    */
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'}); // 조건문이 맞으면 onSuccess에 들어가는 콜백함수에 해당 오브젝트를 전달해 줌.
            } else {
                onError(new Error('no access')); // 마찬가지로 조건문 안맞으면 Error()생성자로 새롭게 만든 오브젝트를 전달해줄 것.
            }
        }, 1000);
    }
}

/*
자 클래스를 다 만들어놨으니 이걸로 뭘할거냐면
1. 사용자에게 id, password를 입력받아오고
2. 받아온거로 서버에게 전달하는, 즉 loginUser에게 전달해야겠지? login하고
    login이 조건문이 맞아서 성공적으로 되면 login한 사용자의 id를 다시 받아오고
3. 이 받아온 id로 Roles, 역할을 getRoles로 요청해서 받아올 것임.
4. 역할이 성공적으로 받아와져서 onSuccess()가 실행되면 {name: 'ellie', role: 'admin'}이 사용자의 오브젝트를 출력해보는 것을 할거임.
*/
const userStorage = new UserStorage();
const id = prompt('enter your id'); // 브라우저 API인 prompt()를 이용해서 사용자의 id를 가져오려고 함.
const password = prompt('enter your password');
// onSuccess자리 즉, 성공했을 때 받을 콜백함수의 코드블록과 onError 자리에 받을 콜백함수의 코드블록을 써줌.
userStorage.loginUser(
    id, 
    password, 
    (user) => {
        // 로그인에 성공하면 getRoles를 호출해서 파라미터에서 전달받은 id에 따라 onSuccess(), 또는 onError()에 들어갈 콜백함수의 코드블록들을 각각 써줌
        userStorage.getRoles(
            user, 
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }, 
            (error) => {
                console.log(error);
            }
        );
    }, 
    (error) => {console.log(error)}
);

/*
여기서 문제점이 무엇일까?
콜백함수를 이용해서 그 안에서 getRole(); 을 호출하고
그 안에서 또 다른 콜백함수들을 전달하고 했는데,
만약 그 안에서 다른것들을 또 전달 전달 전달하면
이것이 바로 콜백지옥.

콜백지옥의 문제점?
1. 읽기가 너무 거북. 가독성이 너무 많이 떨어짐. 
어디서 어떤식으로 연결된건지 한눈에 가늠도 어렵고 비즈니스 로직을 한눈에 이해하는 것도 너무 어려움
2. 나중에 에러가 발생하거나 디버깅해야 하는 경우 굉장히 어려움.
만약 무슨 문제가 생기면 콯백 체인이 길어질수록 문제를 분석하기가 굉장히 어려움
3. 유지보수 어려움.

그럼 이렇게 비동기 콜백함수가 연달아 쓰였을 때
promise와 async/await를 이용해서
어떻게 비동기 코드를 깔끔하게 작성할 수 있는지 
좀 더 병렬적으로, 효율적으로 네트워크 통신을 해나갈 수 있는지 알아볼 것.

너무너무 중요한 기본지식이기 때문에
이해되지 않는다면 다시 여러분의 지식으로 곱십어보면서 소화하고 
코드를 바꿔가며 작성해보고 이해하는 시간을 가져보는 게 좋을 것.
*/