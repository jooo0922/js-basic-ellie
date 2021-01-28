'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declaration
class Person{
    // constructor 즉, '생성자'라고 부름. 나중에 오브젝트를 만들 때 필요한 데이터를 전달함.
    constructor(name, age){
        // fields 즉, '속성'에다가 전달된 데이터인 name과 age를 할당함.
        // 여기서 'this.' 은 '이 클래스에 있는~'을 의미함. this class 인거지 한마디로.
        // this.name 은 일종의 fiels의 lable인거고, 그 뒤에 오는 name이나 ()괄호 안에 name은 파라미터인듯 함. 둘은 아예 다름.
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
    /* 
    근데 만약에 밑에처럼 'ellie', 20 이렇게 값을 넣고 해당 클래스로부터 
    ellie라는 새로운 오브젝트를 얻게 되면 이 this는 ellie라는 새롭게 생성된
    오브젝트를 지칭하게 되는거임.
    그래서 this 라고 표현하는 거.
    class만 선언했을때는 class만 의미하겠지만
    해당 class로부터 새로운 오브젝트를 만들어내면 
    그 순간부터 this는 해당 오브젝트를 의미하기 때문에
    딱 어떤 이름으로 정의해서 표현할 수 없으니 그냥 this라고 표현하는거지! 
    이 클래스로부터 만들어지게 될 가상의, 미래의 object 를 가리킨다고 보면 됨.
    */
}

//  새로운 object를 만들때는 'new' 라는 키워드를 씀
// Person 클래스의 생성자(constructor)에는 name과 age라는 데이터가 전달됨.
// 그래서 이걸 () 안에 넣으면 새로운 오브젝트가 생성됨.
const ellie = new Person('ellie', 20);
// 이걸 확인해보려면 한번 콘솔창에 ellie라는 새로운 오브젝트 안에 값들을 찍어보자
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); // 이거는 새롭게 생성된 ellie 오브젝트 안에 있는 speak 메소드를 호출한거임.

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // get을 이용해서 값을 return하고
    /*
    이 age라는 getter를 정의하는 순간 
    위에 생성자 안에 있는 this.age는 
    메모리에 올라가있는 데이터를 읽어오는 것이 아니라
    여기 정의한 get age()를 호출하게 됨.
    */
    get age(){
        return this._age;
    }

    // set을 이용해서 값을 설정할 수 있음
    // 대신 set은 값을 설정하기 때문에 값을, value를 받아와야 됨.
    // 여기서 value는 setter가 값을 받아와야 하기 때문에 쓴 임의의 parameter명. potato로 지어도 되겠지?
    /*
    이 age라는 setter를 정의하는 순간
    위에 생성자 안에서 '= age;' 로 this.age 안에 값을 할당할 때
    바로 메모리에 값을 할당하는 것이 아니라
    여기 정의한 set age(value)를 호출하게 됨.

    그렇기 때문에!!
    set age(value){
        this.age = value;
    }
    요렇게 setter를 써버리면 
    위에 생성자에서 this.age = age; 이걸 또 똑같이 반복하는 셈이 된다. 
    전달받은 value를 this.age에 '= value;' 이런식으로 할당하니까.
    그럼 이 할당하는 행위로 인해 또 setter를 호출하게 될거고, 이게 무한반복 된다는 소리

    그래서 이렇게 해서 콘솔창에서 확인해보면
    Maximum call stack size exceeded 즉, 콜 스택이 꽉 찬다는 에러가 뜸.

    따라서 전달받는 value를 setter에 제대로 할당하고 조건문에 따라 알맞게 처리하고 싶다면
    getter와 setter 안에서 쓰이는 변수의 이름을
    this._age 
    이런식으로 _표시를 한다던가 해서 좀 다르게 만들어줘야 함. 보통은 _ 기호를 이용해서 만들어줌.
    */
    set age(value){
        // if (value < 0){
        //      throw Error('age can not be negative');
        // } 
        this._age = value < 0 ? 0 : value;
        // 이거는 value < 0 이면(?) 0을 할당하고 아니면(:) 전달받은 value를 쓰겠다. 라는 뜻. if구문 간단히 축약한 것.
    }
}
/*
이런식으로 사용자가 바보같이 나이를 -1 이라는 값으로
설정하면 안되니까 getter 와 setter를 사용해서 
좀 더 방어적인 자세로 만들 수 있게 해줌.
*/

const user1 = new User('steve', 'jobs', -1);
console.log(user1.age);
/* 
field명을 _age로 했어도
우리가 user1.age 로 호출할 수 있는 이유, 
this.age에 값을 할당할 수 있는 이유는 
내부적으로 getter와 setter를 이용하기 때문!
*/

// 3. Fields (public, private)
// Too soon! 너무 최근에 추가된 것이라 많은 js개발자가 쓰고있지는 않음. 추가되었다 라고만 알고 있으면 된다.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
/*
이런식으로 생성자(constructor)를 쓰지 않고
field를 정의할 수 있는데
그냥 정의하게 되면 public
즉, 외부에서 접근이 가능하고
# 기호를 붙여서 정의하면 private field
'class 내부에서만' 값이 보여지고 변경, 접근이 가능하지만
class 외부에서는 이 값을 읽을수도, 변경할 수도 없음.

정말 최근에 추가된 거라 아직 사파리에서도 지원 안되는 기능이라고 함.
정말 쓰려면 babel을 이용해야...
*/
class Experiment{
    publicField = 2;
    #privateField = 0;
} 
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon! 이것도 지금 쓰기에는 무리가 있음. 그냥 이런 게 있다는 것만 알아두기.
/* 
class 안에 fields와 methods 들은 새로운 object를 만들때마다
그대로 복제되어서 값들만 우리가 지정한 값으로 변경이 되어서 만들어 짐.
간혹 이런 object 데이터들에 상관없이
class가 가지고있는 고유한 값과 우리가 지정한 데이터에 상관없이
동일하게 반복적으로 사용되는 method가 필요할 때
그런 것들은 static 이라는 키워드를 이용해서 붙이면
오브젝트에 상관없이 클래스 자체에 연결되어 있음.
*/ 
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
/*
console.log(article1.publisher);
static을 쓰면 article1를 통해 즉, 새롭게 생성된 오브젝트를 통해서
publisher 접근이 불가능함.
그래서 콘솔창에 undefined라고 뜸. 왜냐? 
static을 쓰면 오브젝트마다 할당되는 것이 아니라
Article이라는 'class 자체에만' 붙어있는 거니까!
*/
console.log(Article.publisher); // static을 쓴 부분은 클래스에만 연결되어있는 거니 클래스를 통해서만 접근이 가능함

// 그래서 class안에 있는 static함수를 호출할 때에도 class 이름을 이용해야만 호출이 가능하다.
Article.printPublisher();
/* 
나중에 ts에 굉장히 많이 쓰임. 
오브젝트에 상관없이, 즉 들어오는 데이터에 상관없이
공통적으로 class에 쓸 수 있는 거라면 static과 static method를 이용해서 작성해야
메모리의 사용을 조금 더 줄여줄 수 있음.
*/

// 5. Inheritance (상속)
// a way from one class to extend another class.
/*
동그라미, 네모, 삼각형을 만들어내는 class를 각각 만들어야 한다고 치면,
세 도형 모두 기본적으로 너비, 높이, 컬러값들은 공통적으로 받아야 되잖아?
이런 공통으로 받아야되는 값들은 Shape이라는 class를 묶어서 
동그라미 class, 네모 class, 삼각형 class에 재사용하면 코드 작성 및 유지보수가
훨씬 쉽겠지? 수정할 것이 있으면 Shape class에서만 수정하면 되니까
이런걸 Inheritance 상속이라고 함  
*/
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

/* 
'extends' 키워드를 이용해서 이렇게만 정의해도 
우리가 Shape에서 정의한 fields와 methods가 
자동적으로 Rectangle class에 포함됨.
*/
class Rectangle extends Shape{}
class Triangle extends Shape{
    /*
    우리가 Shape에서 공통적으로 정의한 draw도 그려주면서
    색다르게 overriding한 것도 동시에 그려주고 싶다면?
    super.draw();
    이런식으로 super(부모), 즉 Shape의 draw함수도 호출할 수 있도록 접근 가능함.
    super = 상속으로 fields, methods를 물려준 부모 class = Shape 

    이것이 상속과 다양성 중에서 '다양성'에 해당하는 내용.
    -상속받은 내용 중에서 수정할 건 overriding하고, 
    -overriding과 물려받은 것을 동시에 사용하고 싶으면 super를 사용하고!
    */
    draw(){
        super.draw();
        console.log('🔺');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }

    // 모든 object에 있는 toString이라는 함수를 overriding해서 좀 더 쓸모있게 활용할 수 있다. 
    toString(){
        return `Triangle: color: ${this.color}`;
    }
}
/* 
이런식으로 우리가 필요한 함수만 바로 재정의해서 사용할 수 있음.
이것을 overriding 이라고 함.
근데 overriding을 하면 우리가 재정의한 함수만 호출되는 한계가 있음.
*/

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
/*
class Triangle extends Shape{}
console.log(triangle.getArea());
이렇게 하면 20 * 20 (width * height) 해서 400으로 찍힘.
하지만 삼각형은 /2를 해야 면적을 구할 수 있잖아?
여기서 빛을 발하는 것이 다양성!
*/
console.log(triangle.getArea());

// 6. Class checking: instanceOf
/*
object instanceof class
는 앞에 object가 뒤에 class에 의해서 만들어진
instance가 맞는지 아닌지 확인하기 위한 operator임.
그니까 결과값은 true/false로 나오겠지?
*/
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
// 우리가 js에서 만든 모든 object, class들은 이 자바스크립트에 있는 Object를 상속한 거다.
// ctrl + 우클릭으로 한번 확인해봐라. 그럼 그안에 무수히 많은 constructor, method들이 존재함.
// 이 말은, 어떤 object가 됬건 여기서 확인 가능한 '공통적으로 존재하는 method'들을 쓸 수 있다는 것임.
console.log(triangle.toString()); // 근데 이렇게만 하면 [object Object]라는 의미없는 데이터만 콘솔창에 뜸. 

/* 
JaveScript NDN reference 여기에 들어가면
자바스크립트 내부에 포함된 오브젝트들은 어떤 것들이 있는지
카테고리화로 묶여져있는 아이들은 어떤 것들이 있는지 확인해볼 수 있음.
*/


