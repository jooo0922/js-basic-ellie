'use strict';
/*
// Counter라는 클래스를 만들고 그 안에는 자체적으로 counter라는 변수가 있다. 
// 그리고 이 Counter 클래스를 이용해서 object를 만드는 순간 counter 라는 변수의 값은 0으로 초기가 되어진다.
class Counter {
    constructor(){
        this.counter = 0;
    }

    // 클래스에서 함수 작성 시 'function'이라고 안써도 됨.
    increase(runIf5Times){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) { // counter 값이 5로 나눴을 때 나머지 값이 없다면 = 즉, 5의 배수가 될때마다 'yo!'를 출력하기 위해 씀!
        runIf5Times(this.counter);
        }
    }
}

// class는 다양한 object를 만들기 위한 청사진이다.
const coolCounter = new Counter();
// 이렇게 하면 coolCounter라는 object에는 0으로 값이 초기화된 counter라는 변수가 할당이 된 상태.

function printSomething(num){
    console.log(`Wow! ${num}`);
} 

function alertSomething(num){
    alert(`Wow! ${num}`);
} 
// 이거는 increase() 메소드에서 counter가 5의 배수가 될 때마다 실행하려는 내용을 global function으로 정리해서 인자로 전달시켜서 수행하도록 한 것.
// 이렇게 하면 장점이 increase() 메소드에서 수행하고자 하는 내용을 'class를 고치지 않고서도!' 원하는대로 수정하거나 바꿀 수 있음. 
// 그래서 실행하고자 하는 내용들을 세부적으로 수정해 global 함수로 정리해서 생성된 오브젝트마다 각각 다른 함수들을 인자로 전달할 수 있다.

// 이런 식으로 콜백함수를 전달함으로써 우리가 원하는 기능을 수행할 수 있다.
// 즉, class Counter라는거 자체에는 숫자가 5의 배수가 될때마다 어떤 동작을 할건지가 자체적으로 결정되어있지는 않음.
// 그래서 사용하는 사람이 원할 때 이런 기능을 전달하게 되면 수행하게 되는 것이지

// 이 상태에서 coolCounter에 할당된 method인 increase()를 호출해보자.
coolCounter.increase(printSomething); 
coolCounter.increase(printSomething);
coolCounter.increase(printSomething); // 이렇게 호출할 때마다 counter++; 되니까 1씩 증가하겠지?
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);

coolCounter.increase(printSomething); 
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(alertSomething);
*/

// 그런데 여기서 문제점이 뭘까? increase를 호출할 때마다 printSomething을 일일이 다 전달하려니까 불편하지?
// 그래서 constructor 함수에서 콜백함수를 인자로 받아서 사용하는 방법을 쓴다!
// 또 인자로 받아온 아이를 클래스 자체에서 기억해야 하므로 constructor안에는 콜백함수가 들어갈 변수인 callback을 만들어놓는다. 
// 그래서 이제 class안에는 두 가지의 데이터 타입이 들어가 있다. 1. counter 2. callback
class Counter2 {
    constructor(runEveryFiveTimes){
        this.counter2 = 0;
        this.callback = runEveryFiveTimes; 
    }

    increase(){
        this.counter2++;
        console.log(this.counter2);
        if(this.counter2 % 5 === 0) { 
            if(this.callback){
                this.callback(this.counter2);
            }
        }
    }
}

function printSomething(num){
    console.log(`Wow! ${num}`);
} 

function alertSomething(num){
    alert(`Wow! ${num}`);
} 

const coolCounter2 = new Counter2(printSomething);
// 그리고 이 상태에서 새로운 오브젝트를 만들 때 생성자(constructor)에 우리가 원하는 콜백함수를 전달해준다! 
// 여기서 class안에 2개의 변수 중 하나인 callback에는 printSomthing이 저장된다.
// 그러면 increase()가 호출될 때마다 counter2 값이 5의 배수가 되면 callback(여기서는 printSomething)이 호출된다.
// 호출할 때 counter2 안에 있는 값을 전달해준다. 결국 이 값을 전달받아서 printSomething이 호출되서 수행되는 거겠죠?

/* 
자 이런 식으로 클래스에 우리가 원하는 콜백함수를 전달하면서 만들고
필요할 때마다, 원할 때마다 우리가 전달하려는 함수를 바꾸거나, 전달하려는 함수의 내용을 수정하는 게 가능하다.

콜백함수를 
클래스 안에 메소드, increase()에 전달하는 것보다
클래스 안에 생성자, constructor에 전달하고, 콜백함수가 들어갈 변수 this.callback을 만들어놓고 거기에 할당한 상태에서
메소드에서 this.callback을 호출해서 사용하면 
클래스로 생성한 오브젝트에서 메소드를 여러 번 호출할 일이 있을 때 굳이 모든 메소드 인자에 
우리가 실행하고자 하는 함수 이름을 전달할 필요가 없어지게 된다!

new Counter2(콜백함수); 이런식으로 해서 생성자에만 전달하면 되기 때문이다!
*/

coolCounter2.increase(); 
coolCounter2.increase();
coolCounter2.increase(); 
coolCounter2.increase();
coolCounter2.increase();

coolCounter2.increase(); 
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();

/*
근데 만약에, new Counter2();에 어떤 콜백함수도 전달하지 않는다면? 그래도 되는걸까?

타입스크립트에서는
이런식으로 해당 인자가 어떤 data type을 받는지, 
그걸 꼭 받아야 하는건지, 
옵션으로 받아도 되고 안받아도 되는건지를 
인자의 타입(function)을 지정하면서 옆에 '?' 물음표를 달아서 optional하게 받을 수 있다 라고 명시를 하면 됨.
class Counter2 {
    constructor(runEveryFiveTimes: function?){ 
        this.counter2 = 0;
        this.callback = runEveryFiveTimes; 
    }
}

그러나 자바스크립트에서는 저렇게 인자의 타입을 명시하거나, optional하게 받아도 되는지 여부를 명시할 수 없기 때문에
저 상태에서 아무런 인자도 전달하지 않는다면 this.callback = undefined 가 되어버리고
this.callback(this.counter2); 는 있지도 않은 함수를 호출한 게 되어버리니까
undefined는 함수가 아니잖아. undefined를 호출할 수는 없는거지. 
그래서 결국 TypeError가 발생해버리고 만다.

이럴 경우, increase()메소드 안에서 this.callback이 undefined가 아닐 때에만 호출할 수 있도록
조건문을 만들어줘야 한다.

increase(){
        this.counter2++;
        console.log(this.counter2);
        if(this.counter2 % 5 === 0) { 
            if(this.callback) {   // 이거는 this.callback === true 랑 같은거야.
                this.callback(this.counter2);
            }
        }
    }

이걸 더욱 간략하게 && 연산자를 이용해서 한줄로 쓸수도 있겠지? 
이거 기억 안나면 operator-basic 노트 작성한 부분 한번 보고 올 것.
increase(){
        this.counter2++;
        console.log(this.counter2);
        if(this.counter2 % 5 === 0) { 
            this.callback && this.callback(this.counter2)
        }
    }
*/

/*
어쨋든 여기서 중요한 부분을 정리하자면

클래스에 우리가 원하는 기능을 전부 정의해버리면
사용하는 사람이 자세하게 컨트롤할 수 없고 재사용이 어렵다.

하지만 이렇게 class 외부에서 함수를 만들고, 그거를 콜백함수로 class 인자에 전달하게 되면
외부 함수를 수정하거나, 다른 함수를 인자로 전달하거나 하는 식으로
자기 입맛에 맞게 컨트롤해서 사용할 수 있습니다. 

이렇게 하나의 클래스로 다양한 오브젝트를 만들어서 
서로 다른 기능을 수행하는 object를 만들 수 있다.

지금 좀 실용적이지 못한 예제로 설명했지만 굉장히 중요한 keypoint다!
가능하면 class를 하나의 다 만들어진 완전체로 만들기 보다는, 
레고로 원하는 모양을 조립해서 만들 수 있는것처럼
원하는 기능을 끼워맞춰서 재조립이 가능하도록 만드는 것이 좋습니다.

그래서 콜백함수를 외부에서 정의해서 클래스 인자로 정의해서 만든느 겁니다.
*/