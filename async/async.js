'use strict';

// async & await
// clear style of using promise (promise chain으로 길게 연달아 작성된 코드를 더 깔끔하게 작성할 수 있게 해줌)
// 또한 promise를 조금 더 간결, 간편하고, 동기적으로 실행되는 것처럼 보이게 만들어줌.
// 조금 더 간편한 API로써 async/await을 사용하면 동기식으로 코드를 작성하는 것처럼 작성할 수 있게 도와줌.
// 새롭게 추가된 것이 아닌, 기존에 존재하는 promise 위에 조금 더 간편한 API를 제공하는 Syntatical sugar. (class도 그런 예시이지.)
// 하지만, 그렇다고 무조건 promise는 나쁘고, async/await으로 대체 사용해야 하는건 절대 아님.
// promise를 유지해야 하는 경우도 있고, async/await으로 변형해야지 조금 더 깔끔해지는 경우가 있음.

// 1. async
/*
function fetchUser(){
    // do network request in 10 secs.... (사용자의 데이터를 백엔드에 요청해서 받아오는데 10초 정도 걸리는 함수라고 가정해보자.)
    return 'ellie';
}

const user = fetchUser();
console.log(user);

이렇게 오래 걸리는 코드를 비동기적으로 처리하지 않으면
js엔진은 동기적으로 코드를 처리하기 때문에, 즉 한 줄이 끝나야지
그 다음 줄로 넘어가는 동기적 처리를 하기 때문에
10초 동안 function fetchUser(){} 에만 머무르고 있다가
10초 뒤에 성공적으로 데이터를 받아오면 그제서야
다음 줄로 넘어가면서 'ellie' 가 return되고
그리고 나서 user에 할당되고 그거를 콘솔창에 찍게 되는거

만약 console.log(user); 밑에서부터
웹페이지의 ui를 표시하는 기능을 수행하는 코드들이 있다면
fetchUser()이 끝나기 전까지는 데이터(ui)가 웹페이지에 표시되지 않으므로
사용자는 10초 정도 텅 빈 웹페이지만 보고 있을것.

이런 걸 방지하기 위해서 오래 걸리는 코드들은 비동기적으로 처리해줘야 한다는거여!
이거를 지난번에는 promise로 했지.

new Promise(): "야 내가 언제 user의 데이터를 받아올지는 모르겠지만, 내가 '약속할게'
이 Promise라는 object를 가지고 있으면 여기에 니가 then()이라는 콜백함수만 등록해놓으면
user의 데이터가 준비되는 대로 니가 등록한 콜백함수를 내가 불러줄게" 라고 약속하는 거였지?

이렇게 지난번처럼 promise를 이용하지 않고도 좀 더 간편하게 비동기를 작성하는 방법이 있다.
*/

// 함수앞에 async라는 키워드를 붙여주면 됨. 
// 번거롭게 promise를 쓰지 않아도 자동적으로 함수안에 있는 코드블록들이 promise로 변환됨.
async function fetchUser(){
    // do network request in 10 secs.... 
    return 'ellie';
}

const user = fetchUser();
user
.then(console.log);
console.log(user);

// 2. await
function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    });
}

async function getApple(){
    await delay(2000);
    /*
    await은 async가 붙은 함수 '안에서만' 쓸 수 있음
    그니까 여기서 delay(3000); 을 호출했으면, 
    원래대로면 async를 붙였으니 비동기 처리되서
    js엔진이 밑에 return '사과'로 넘어갈텐데
    await을 붙여줌으로써 delay(3000);이 끝날때까지 기다려줌.
    즉 3초 간 기다렸다가 그 다음 줄을 실행함.
    */

    return '🍎';
    /*
    그니까 결국 이거는
    async function getApple(){
        return delay(3000);
        .then(() => '🍎');
    }
    이렇게 promise chain으로 만들수도 있지만
    동기적인 것처럼 보이는 코드를 써서 만들면
    '아 delay(3000); 이 끝날때까지 기다려. 기다렸다가 사과를 리턴한다.'
    이렇게 더 쉽게 이해할 수 있겠지.
    */
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}

/*
function pickFruits(){
    return getApple()
    .then((apple) => {
        return getBanana()
        .then((banana) => `${apple} + ${banana}`);
    });
}

pickFruits()
.then((result) => console.log(result));

이것도 보면 콜백지옥의 느낌과 비슷하지 않음?
promise chain도 너무 중첩적으로 chaining을 하게 되면
콜백지옥과 비슷한 문제점이 발생함.
*/

/*
그래서 이거를 async/await 키워드로 간단하게 만들어보자.

async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits()
.then((result) => console.log(result));
이런식으로 async와 await 코드를 이용하면 동기적으로 코드를 작성하듯이 쓸 수 있어서 편하다.
*/

// 근데 위에서 await들은 1초씩 시간을 소모해서 각각 apple, banana에 대입하잖아. 2초가 걸리겠지
// await를 병렬로 처리하면 1초 안에 할 수 있다.
async function pickFruits(){
    const applePromise = getApple(); 
    const bananaPromise = getBanana(); 
    // 사과promise와 바나나promise를 여기서 만들었기 때문에 만들자마자 바로 get~()안에 코드들이 실행됨
    // 병렬적으로 사과와 바나나를 동시에 따서(즉 get~()가 실행되서)
    /*
    이렇게 동시다발적으로 수행이 가능한 경우에는
    즉, getBanana(); 이걸 하는데 getApple(); 얘가 필요없고, 그 반대도 마찬가지기 때문에
    병렬적으로 둘다 기능을 수행할 수 있는 경우는
    이렇게 더럽게 코드를 작성하지 않는다!

    promise에서 제공하는 유용한 api를 아래에서 살펴보자!
    */

    const apple = await applePromise;
    const banana = await bananaPromise; 
    // 여기서 기다렸다가 한번에 대입해서

    return `${apple} + ${banana}`;
    // 한번에 출력하는 것.
}

pickFruits()
.then((result) => console.log(result));

// 3. useful Promise APIs
/* 
Promise에 있는 all()이라는 API를 쓰면 된다.
이것은 promise 배열을 전달하게 되면
모든 promise들이 병렬적으로 다 받을때까지 모아주는 거임.
*/
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])

    // fruits에는 promise 배열들이 각자 실행되서 나온 결과값의 배열, 즉 '과일들의 배열' 이 전달됨!
    .then((fruits) => fruits.join(' + ')); // join은 배열을 string으로 묶을 수 있는 array.API
}
pickAllFruits()
.then(console.log);

/*
Promise.race() API는 
배열에 전달된 promise들 중에서 가장 먼저 값을 리턴하는 놈,
가장 빨리 리턴하는 놈만 전달되는거임.
*/
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()])
}
pickOnlyOne()
.then(console.log);