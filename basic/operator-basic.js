'use strict';

// if문은 무언가가 true면 코드블록이 실행되고, true가 아니면 코드블록이 실행되지 않음.

// false: 0, -0, '', null, undefined, NaN
// true: -1, 'hello', 'false', empty array, empty object
// 이거를 잘 이해못하는 것 같다
/*
boolean은 사실, 어떤 data type이건 true/false가 될 수 있어요.
무슨 말이냐면, 0은 false다. -0도 false다.
무조건 0은 false이고, 0과 -0을 제외한 모든 숫자들은 다 true입니다.
다들 이걸 잘 몰랐던 것 같다.

또, '' 텅텅 비어진 문자열도 false다!
반대로, 'hello'처럼 어떤 값이 들어가있는 문자열은 다 true다!
그래서 'false' 막 이렇게 false라는 문자열도 true로 인식하는거임.

한마디로, 뭐가 됐든 값이 없다면 다 false로 간주한다.
여기서 약간의 힌트가 오지?

자 그럼 null은? 얘도 false
여기서 감이 올텐데, 프로그래밍 언어에서는 데이터가 없거나, 비어있는 것들은 false에 속합니다.
그래서 undefined도 다 false야.

하지만, Empty array 즉, 텅텅 빈 배열은
안에가 텅텅 비어있긴 해도 어쨋거나 배열 오브젝트 그 자체이기 때문에 이런 아이들은 다 true로 간주한다.
마찬가지로 텅텅 빈 오브젝트도 true겠지?
오브젝트는 그 안에 데이터가 있든 없든 오브젝트 자체가 만들어진 거기 때문에 true에 속한다.
*/
let num; // undefined
console.log(num);
// 자 이렇게 num이라는 변수를 선언하고 그 안에 아무 값도 할당하지 않는다면? 얘는 false로 간주한다! 
// num이라는 변수를 선언하고 값을 할당하지 않는다면, 여기에는 undefined이 할당되어 있는 것이기 때문이다.
// undefined는 false니까 num도 false
if(num){
    console.log('true!');
} else {
    console.log('false!');
}

num = 9;
num && console.log(num);
/*
이거는 num이 true이면, num을 출력한다는 뜻.
&&(and)연산자는 앞에가 true여야지 true가 실행이 된다.

그래서 
num && console.log(num); 이거는
if(num){
    console.log(num); 
} 이거랑 똑같은 겁니다. 이거를 다들 헷갈려하는거 같더라.
*/

// 이런걸 왜 쓰는걸까?
let obj
if (obj){
    console.log(obj);
}

/* 
console.log(obj.name);
onject에는 name이라는 값이 없잖아.
그런데 프로그램을 실행할 때
그냥 이렇게 없는 데이터에 접근해버리면 프로그램 자체가 죽는다.

그래서 이렇게 하는 것이 좋지 않기 때문에
obj에 값이 없다면, object.name 이런식으로 name에 접근하면 안되겠지? 이것은 유효하지 않은 코드다.

그래서
'obj가 있다면, console.log(obj.name)으로 name에 접근하고, 없다면 접근하지 말아라! 이렇게 해야겠지'
*/
obj && console.log(obj.name); 
// 그래서 이렇게 쓰는거야. 이렇게하면 프로그램이 죽어버리지도 않으니 에러도 안나겠지.
/*
그래서 이것은 
if (obj){
    console.log(obj.name);
}
이렇게 if문을 쓰는 것과 동일하지만
&& 연산자를 쓰는것이 코드를 한 줄로 더 깔끔하게 쓸 수 있게 해주기 때문에 보통은 이렇게 많이 사용한다.
*/