'use strict';

// Function
// 무언가 반복적으로 수행되는 일들, 즉 반복되는 로직이 있다면 이것을 함수로 만들게 된다.
// 왜냐면 함수로 만들면 재사용이 가능해지니까
const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;
console.log(result2);

// 함수의 이름을 작성할 때에도 짧고 간결하지만 의미있는 이름, 함수의 코드블록에서 수행하는 기능이 뭔지 알 수 있도록 작성할 것.
function add(num1, num2){
    return num1 + num2;
}
/*
타입스크립트에서는 이런식으로 함수의 인자에 어떤 data type이 들어오는지 표시해서
'아, 임의의 a와 b를 받아오는데 숫자인 a와 b를 받아오는구나' 라고 해서 좀 더 직관적으로 이해할 수 있음.
function add(a: number, b: number){
    return a + b;
}

여기서 a,b는 변수에서 정의하는 이름처럼 우리가 그냥 만든 이름이다.
num1, num2 이런식으로 임의로 작성해도 괜찮아요.

그래서 이 함수는 두 가지의 데이터를 받아오는데
이 안에 어떤 데이터가 들어올지는 함수를 '호출'하는 사람이 결정함.
어떤 데이터가 들어갈 지는 함수를 '작성, 선언'할 당시에는 잘 모르지만
코드블록에서는 우리가 임의로 지은 num1, num2라는 이름을 통해서 데이터에 접근하는 거에요.
*/

// 이제 우리가 선언한 함수를 호출해 볼거에요.
const sum = add(3, 4); 
// 이렇게 함수를 호출할 때 실제로 데이터가 전달이 되겠죠?
// num1에는 3이, num2에는 4가 지정이 되고 함수가 호출되면서 우리가 정의한 코드블록이 실행되서 더해진 결과값이 return되겠죠?
// 그래서 이 결과값이 sum이라는 변수가 선언된 공간에 할당되겠죠?
console.log(sum);

/*
자 함수도 object라고 했죠? 
그렇기 때문에 object를 메모리 공간에 할당해서 저장하는 방식과 똑같이
함수의 코드블록이 저장된 메모리 공간이 따로 있고,
함수가 들어있는 메모리 주소를 가리키는 reference가 
function add()라고 선언하는 순간 생기는 메모리 공간에 들어가게 됨.

그래서 우리가 doSomething이라는 변수에 add를 할당하면 
이 변수에 할당된 메모리 공간에는 add함수의 코드블록을 가리키는 'reference'가 복사되어서 저장됨!
그래서 doSomething이나, add나 똑같은 함수 코드블록을 가리키고 있다!
변수에 오브젝트 저장하는거랑 완전 똑같음.
*/
const doSomething = add;

const result3 = doSomething(2, 3);
console.log(result3);
const result4 = add(2, 3);
console.log(result4); 
// 결국, add나 doSomething이나 똑같다! 똑같은 함수를 가리키니까!
// 즉, 함수의 이름 자체는 함수가 정의된 곳을 가리키고 있다.
// 그래서 이 함수의 이름을 다른 변수에 할당하면, 이 함수가 가리키고 있는 주소가 메모리 공간에 복사되어 저장되는 것이다.

// function parameter에 대해서 좀 더 짚고 넘어가자.
function print(){
    console.log('print');
}

print(8, 33); 
// 여기에 아무리 많은 input을 전달해도 호출한 함수에서는 아무 일도 일어나지 않는다. input을 무시함. 아예 쓰지 않음.
// 그래서 아무런 인자(parameter)를 받지 않는 함수는 input을 받지 않는다.

// 받아온 input을 접근하고 싶다면 add와 똑같이 parameter의 이름을 지정해주면 됨. 이렇게 하면 함수 내부에서 접근 가능.
// 함수의 인자는 받아오는 input과 관련이 있는, 조금 더 의미있는 이름을 쓰면 좋다.
function print2(a, b){
    console.log(`${a} ${b}`);
}

print2(8, 33); 

function divide(num1, num2){
    return num1 / num2;
}

/* 
이 함수는 어떤 동작을 수행하는 operator라는 인자를 받는다고 해보자
타입스크립트였다면 이렇게 표현이 됬을거야.
function surprise(operator: function){

}
*/
function surprise(operator){
    // 이 함수는 재밌는 걸 한다. 뭘 하냐면, 받아온 operator 라는 함수 인자(parameter)를 실행해.
    // 실행해서 그 결과값을 내부 result라는 변수에 저장하고, 이를 출력함. 
    const result5 = operator(2, 3); // add(2, 3) add를 호출한 것과 똑같다.
    console.log(result5);
}

surprise(divide); 
// 이렇게 하는 순간 add에 있는 함수 코드블록이 저장된 메모리주소를 가리키는 'reference'가 복사되어서 operator라는 인자에 들어감. 
// 그래서 operator();를 이렇게 호출한다는 것은, add가 가리키는 메모리주소에 저장된 함수 코드블록을 실행한다는 것과 같다.
// 즉, add(); 이렇게 add()함수를 수행하는 것과 동일하다.

// 그러나 이렇게만 해버리면 또 NaN(Not a Number) 나옴. 왜? add의 인자에 아무런 값도 전달하지 않았잖아.
// 그러니까 const result5 = operator(2, 3);이렇게 해야 add(2, 3); 이 실행되는 것과 같게 되는거지.

/*
결과적으로 함수의 이름을 변수에 할당하거나, 다른 함수의 인자로 전달한다는 것은
그 이름이 가리키고 있는 함수의 reference를 전달한 것과 동일하다!
그래서 '이름'을 통해서 함수를 호출할 수 있는 것이다.

a 함수의 파라미터 자리에 인자로써 b 함수를 전달하려면, b 함수의 '이름'만 전달해야 한다.
그러니까 a(b(1, 2)); 요런식으로 b함수를 호출하는 형태로 a함수의 인자에 전달하면 안되는거야.
왜냐면 그 파라미터 자리에는, 말그대로 reference만 주고받는 건데 
b(1, 2) 이렇게 전달해버리면 실제 함수를 호출하는 것이 되어버려. 이런 건 파라미터 자리에 들어갈 수 없다는 걸 명심해! 
사실 생각해보면, b(1, 2) 이렇게 전달한다는 건, 함수를 호출해서 실행한 결과값을 파라미터에 전달하는게 되어버리는거야.
그니까 그거는 함수를 전달하는 게 아닌거지 사실상. 

'함수만' 전달하고 싶다면, '함수의 이름만' 전달해야 되는거라고.

파라미터 자리에 함수를 전달한다 = 사실 함수를 가리키고 있는 reference가 복사되어서 전달되는 것이다.
*/