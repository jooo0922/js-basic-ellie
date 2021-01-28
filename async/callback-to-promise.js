'use strict';

// Callback Hell example
class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id); 
                } else {
                    reject(new Error('not found!')); 
                }
            }, 2000);
        });
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie'){
                    resolve({name: 'ellie', role: 'admin'}); 
                } else {
                    reject(new Error('no access')); 
                }
            }, 1000);
        })
    }
}
// 벌써 API부터 너무 깔끔해졌지? 이렇게 새로 만든 Promise의 executor 콜백함수 안에 비동기 처리하고 싶은 작업 'setTimeout()'을 넣어두면 더 이상은 콜백을 전달받지 않아도 됨.
// callback.js에 있는거랑 비교해서 한번 볼 것.

const userStorage = new UserStorage();
const id = prompt('enter your id'); 
const password = prompt('enter your password');

userStorage.loginUser(id, password)
.then((user) => {
    return userStorage.getRoles(user);
})
.then((user) => {
    return alert(`Hello ${user.name}, you have a ${user.role} role`);
})
.catch((error) => {
    console.log(error);
});
/*
항상 명심할 것!
promise chain에서는 
중간에 있는 chain들의 arrow function을 풀어서 써줄거라면!(풀어써야 어떤 값을 받는지 알 수 있으니까)

.then(() => {
    return operation ;
})

항상 안에서 실행한 operation을 return을 모든 chain 내부에 다 써줘야 해!
그게 귀찮으면 그냥 한줄로
.then(operation)
요렇게 쓰던가. catch도 마찬가지고!
*/

// Homework
// async, await을 이용해서 위에 promise로 작성한 것들을 다시 깔끔하게 작성해보란다