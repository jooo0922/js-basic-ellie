'use strict';

// Promise is JavaScript object asynchronous operation
// 자바스크립트에서 제공하는 오브젝트로써, 콜백함수를 대신해서 비동기 코드를 간편하게 처리할 수 있도록 도와주는 오브젝트!
/* 
Promise는 딱 2가지 포인트만 잡고 공부하면 됨

point 1. State (상태): 
프로세스가 무거운 operation을 수행하는 중인지
아니면 기능 수행이 완료가 되서 성공했는지/실패했는지 상태에 대한 이해
state: pending(operation이 수행중일 때) -> fulfilled(operation을 성공적으로 끝낸 상태) or rejected(파일을 찾을 수 없거나 네트워크에 문제가 생겼을 때)

point 2. Producer vs Consumer
우리가 원하는 데이터를 제공하는 사람(producing)과
이 제공된 데이터를 쓰는 사람, 필요로 하는 사람(Consumer). 이 두가지의 차이점을 잘 이해할 것.
*/

// 1. Producer
// when new Promise is created, the executor runs automatically. 이 점을 꼭 명심할 것!!!
/* 
Promise()는 class이기 때문에 new 키워드를 이용해서 object 생성 가능.

new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void)
이 Promise()의 생성자를 보면 executor라는 콜백함수를 인자로 전달해줘야 하고,
이 콜백함수에는 또 다른 두 가지 콜백함수를 받는다.
1. resolve(): 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 콜백함수
2. reject(): 기능을 수행하다가 중간에 문제가 생기면 호출하게 될 콜백함수
*/
const promise = new Promise((resolve, reject) => {
    /* 
    doing some heavy work(보통은 promise 안에서는 좀 무거운 작업들을 많이 한다.)
    why? 네트워크에서 데이터를 받아오거나, 파일에서 무언가 큰 데이터를 읽어오는 과정은
    시간이 꽤 걸림. 이런 일들을 동기적 (synchronous)로 처리하게 되면 
    파일을 읽어오고 네트워크에서 데이터를 받아오는 동안 그 다음 line의 code가 실행되지 않음
    그래서 이렇게 시간이 좀 걸리는 일들은 Promise를 만들어서 비동기적으로 처리하는 것이 좋다!
    */
    console.log('doing something...');
    /* 
    여기서 알 수 있는게 promise object를 만드는 순간 우리가 전달한 executor 콜백함수가 바로 실행됨. 
    그러니 콘솔창에 찍히지. 자 이 말인 즉, 우리가 promise안에 네트워크 통신을 하는 코드를 작성하면
    promise를 만든 순간 바로 네트워크 통신을 수행한다는 뜻. 
    
    여기서 한 가지 배울 수 있는 중요한 포인트는,

    만약 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우라면, (ex> 사용자가 버튼을 누를때만 네트워크 요청)
    이런식으로 작성하면 사용자가 요구하지도 않았는데 불필요한 네트워크 통신을 하게 됨.
    그래서 promise를 만드는 순간 executor 콜백함수가 바로 실행되기 때문에 이 점을 좀 유의해야 함.
    */
    
    /*
    이제 이 promise 안에서 네트워크 통신같은 무거운 작업을 하는 것처럼
    setTimeout()을 이용해서 조금 시간의 delay를 주도록 해보겠음.
    */ 
    setTimeout(() => {
        // resolve('ellie'); 
        // 기능을 정상적으로 수행했다면 resolve() 콜백함수 호출. 최종 데이터인 사용자 이름 'ellie'를 받아와서 전달하는 것도 해줌.
        reject(new Error('no network'));
        /*
        이번에는 reject()로 해보자. 
        얘는 보통 Error라는 js에서 제공하는 class로 만든 object를 최종값으로 전달하는데
        이것도 다룰려면 양이 꽤 많아서 'Error handling' 파트에서 알려준다 함.
        보통 Error object에는 어떤 에러가 발생했는지 이유를 잘 명시해서 작성해야 됨.
        여기서는 네트워크 통신이 실패한 상황을 가정한거니까 'no network'로 한 것.

        Uncaught 이라는 글이 에러메시지에 뜨는데
        이거는 우리가 밑에서 then으로 promise의 성공적인 케이스만 다뤘기 때문에
        '잡히지 않은(uncaught) 에러가 발생했다' 고 말하는 것임.
        당연하지 then은 실패 케이스에서 에러를 잡기 위한 API가 아니니까.

        따라서 실패했을때의 케이스는 catch() 함수를 이용해서
        에러가 발생했을 때 어떻게 처리할건지 결정하는 콜백함수를 따로 등록해줘야 함 
        */
    }, 2000);
}); 
// 이 구조로 하면 하나의 Promise object를 만든거임!
/* 
그래서 이 promise는 어떤 일(네트워크 통신, 무거운 작업)을 2초 정도 하다가 
일을 잘 마무리해서 resolve라는 콜백함수를 호출하면서 'ellie'라는 값을 전달하는
promise라는 'Producer'를 만들어 본 것입니당
*/

// 2. Consumers: then, catch, finally 를 이용해서 값을 받아올 수 있음.
/*
이 말이 무슨 말이냐면, 우리가 위에서 const promise를 만들었잖아
이 promise를 이용해서 값이 정상적으로 잘 수행이 된다면, 
그러면!(then) 이제 내가 값을 받아올거야.
그 값을 받아와서 우리가 원하는 기능을 수행하는 콜백함수를 전달해줄거야 라는 뜻.

여기서 이 값(value) parameter는 promise가 정상적으로 기능을 잘 수행해서
마지막으로 resolve() 콜백함수에서 전달된 최종데이터 'ellie'가 전달된거임.

즉, 이 then 이라는 것은 promise가 정상적으로 잘 수행되서 마지막에 최종적으로
resolve라는 콜백함수로 전달한 값이 value라는 parameter로 전달되서 들어오는 걸 볼 수 있음.

그럼 reject를 쓰면 어떻게 되는건가?

*/
promise //
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    /* 
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    여기서 보면 promise.then은 똑같은 Promise 즉, 여기서는 const promise겠지? 이거를 return하기 때문에
    그냥 뒤에다가 바로 .catch(); 를 써도 아무 상관이 없음.

    이런 것을 chaining 이라고 함.
    object
        .api1()
        .api2()
        .api3(); 
    이런 식으로 해당 api()가 똑같은 object를 return하게 되면 다른 api를 계속 연달아서 쓸 수 있음.
    */ 
    .finally(() => {
        console.log('finally');
    });
    // 그리고 가장 최근에 추가된 finally(). 얘는 성공하든 실패하든 상관없이 무조건 마지막에 호출되는 거. 
    // 그래서 파라미터를 아무것도 안 받음. 앞에서 then이 호출되든 catch가 호출되든 마지막에 무조건 호출됨.
    // 성공하든 실패하든 상관없이 어떤 기능을 마지막으로 수행하고 싶을 때 사용함.

// 3. Promise chaining
// 이번엔 서버에서 숫자를 받아오는 새로운 Promise를 만들어보자.
// 물론 setTimeout() 써서 그냥 하는 척만 하는거 알지? 
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

fetchNumber
.then((num) => { // 여기 num에 fetchNumber가 성공적으로 기능수행함에 따라 resolve() 콜백함수가 전달한 1이 전달됨.
    return num * 2;
}) // 참고로 이거는 .then(num => num * 2) 로 축약 가능한데 뭐가 생략된건지, 어떤 원리인지 알라고 내가 좀 풀어서 써놨음.
.then((num) => { // 여기에는 1 * 2 해서 resolve(2)가 된 fetchNumber가 return된 상태에서 num에 2를 전달한거라고 생각하면 될거같은디...?
    return num * 3;
})
/*
여기서는 다른 서버에 보내서
다른 숫자로 변환된 값을 받아올 거임
*/
.then((num) => { // 같은 방식으로 2 * 3 해서 6이 최종 데이터값으로 전달되는 fetchNumber가 return된 거고...?
    // 여기서 또 다른 새로운 promise를 return할거야
    // 그럼 또 다른 서버랑 통신을 해서 숫자를 받아오겠지?
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num - 1);
        }, 1000)
    });
})
.then((num) => {
    console.log(num);
});

// 여기서 then은 비동기인 promise를 전달해도 되지만 그냥 값을 바로 전달해도 된단다.
// 그니까 num * 2 이런 거 계산한 값이 바로 다음 then으로 전달될 수도 있다는 거지.
// 이런식으로 .then.then.then 묶어서 다른 비동기적인 promise를 묶어서 처리할 수 있음. 

// 4. Error Handling
// 이렇게 Promise chaining 했을 때 어떻게 Error Handling 할 수 있는지에 대해 알아보자
// 총 3가지의 promise를 return하는 함수.
const getHen = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
}
const getEgg = (hen) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); 
        // 만약 이 부분에서 네트워크 문제로 실패하는 상황이 생겼다면?
        // 그러나 밑에 Consumer 부분에서 catch()로 error handling을 하지 않는다면 'Uncaught' 가 뜸.
    });
}
const cook = (egg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🧈`), 1000);
    });
}

// 그리고 각각 이것을 다른 서버에서 닭을 받아오고, 달걀을 받아오고, 요리까지 하는걸로 가정해서 한번 해보자.
getHen()
.then(hen => getEgg(hen)) 
.catch(error => { // getEgg() 에서 문제가 생겨서 계란을 받아올 수 없다면 '빵'을 대신 전달해주기 위해 쓴 것!
    return '🥖'; // 즉, getEgg()에서 error가 생겨도 이를 잘 처리해서 전체적인 promise chain에 문제가 발생하지 않도록, 계속 이어서 진행할 수 있도록 빵꾸 처리해준 것.. 
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(error => console.log(error)); 
// getEgg() 부분에서 발생한 error를 handle하기 위해 씀. 
// 맨 마지막에 써도 에러가 발생한 순간 reject가 return한 값은 제일 밑줄에 catch로 전달됨.

/* 
이런 거는 항상 다음 then으로 값을 넘겨야하는 거니까 풀어서 쓸거면 return을 꼭 써줘야 해.
.then((hen) => {
    return getEgg(hen);
}) 
요런 식으로

그리고 콜백함수를 전달할 때 받아오는 value를 다른 콜백함수로 하나를 호출하는 경우에는
value 작성을 생략해도 된다.

getHen()
.then(getEgg) 
.then(cook)
.then(console.log);

이런식으로 하면 then에서 받아오는 value를 바로 getEgg에 암묵적으로 전달해서 호출해 줌.
*/

// promise 이해 잘 안가면 필기한 내용을 한번 더 봐라. 어려운 내용 있으면 영상 돌려보면서 공부해보고.