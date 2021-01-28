'use strict'
/** 
 * Shorthand property names
*/

{
    const ellie1 = {
        name: 'Ellie',
        age: '18',
    };

    const name = 'Ellie';
    const age = '18';

    // 앞에서 정의한 변수에서 새로운 오브젝트를 만드려면?
    const ellie2 = {
        name: name, // name이라는 key의 value는 name의 변수가 가리키고 있는 'Ellie' 라는 값이 들어가겠지?
        age: age,
    };

    // key와 value의 이름이 동일한 경우 이렇게 하나로만 깔끔하게 축약해서 작성이 가능하다!
    const ellie3 = {
        name,
        age,
    };

    // 세 개는 모두 똑같은 object들이 나올거다.
    console.log(ellie1, ellie2, ellie3); 
}

/**
 * Destructuring Assignment 
 */
{
    // object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // 이렇게 object의 key와 value에 접근하기 위해서는 student.name 이런식으로 복잡하게 써야했음
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // Destructuring Assignment 을 이용하면 object에 있는 key의 이름으 {} 안에 정의해주고
    // = student 해주면, studert에 있는 key와 value들이 각각 name과 level에 맞게 할당이 된다.
    // 이렇게 항상 object안에 정의된 key의 이름과 동일하게 {}괄호 안에 작성해서 선언해줘야 한다.
    {
        const {name, level} = student;
        console.log(name, level);
    }

    // 만약 다른 이름으로 선언하고 싶다면?
    // const {key: 원하는 다른 이름, key: 원하는 다른 이름} = object; 이렇게 하면 가능하다!
    // 물론 다른 이름으로 선언했기 때문에 콘솔에 찍거나 다른 곳에서 사용할 때도 선언한 이름을 사용해야겠지?
    {
        const {name: studentName, level: studentLevel} = student;
        console.log(studentName, studentLevel);
    }

    // array
    // Destructuring은 오브젝트 뿐만 아니라 배열에서도 동일하게 사용 가능
    const animals = ['🐶', '🐱'];

    // 기존에는 [index]안에 index number를 이용해서 배열에 접근했었지
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // const [a, b] = objectl; a와 b안에 배열의 순서대로 값이 할당된다.
    {
        const [first, second] = animals;
        console.log(first, second);
    }
}

/**
 * Spread Syntax
 */
{
    const obj1 = {
        key: 'key1'
    };
    const obj2 = {
        key: 'key2'
    };
    const array = [obj1, obj2];

    // array copy 
    // 이렇게 두 개의 오브젝트가 담긴 배열을 복사하려면 어떻게 할까?
    // 물론 여러가지 방법이 있겠지만 Spread Syntax를 이용하면 간단하게 할 수 있다.
    // '...' 이거는 array에 들어있는 item 하나하나씩을 각각 낱개로 가져와서 복사해 온다는 것을 말함.
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    // 이렇게 배열을 복사해오면서 동시에 새로운 item을 추가하고 싶다면?
    // ...array를 이용해 복사한 뒤, 추가하고자 하는 item을 그 뒤에 써주면 끝!
    const arrayCopy2 = [...array, {key: 'key3'}];

    // 이때 중요한 거, object가 담긴 변수에는, object의 실제 값들이 할당된 메모리공간의 주소를 가리키는 reference들이 저장되어 있다고 했지?
    // 그래서 이 ...에 복사된 아이들은 reference만 복사되어 오는거기 때문에 실제로는 전부 동일한 object를 가리키고 있다는 거!
    // 그래서 중간에 obj1의 key라는 이름의 key의 value를 바꾼다면 모든 array에서 해당 값이 바뀌어진 상태로 나오겠지!
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    // 그래서 아주 중요한 포인트는 '...'(Spread operator)는 오브젝트 안에 값 하나하나가 아닌, reference값만 복사해 오기 때문에
    // '...'으로 복사해온다고 해도, 원래의 object를 변경하게 되면 원본 array든 복사된 array든 전부 다 영향이 간다.

    // object copy
    // 배열 뿐만아니라 오브젝트도 copy할 수 있음
    // 물론 배열은 배열의 괄호 [], 오브젝트는 오브젝트의 괄호{} 를 이용해야 함. 이거는 Destructuring도 마찬가지임.
    const obj3 = {...obj1};
    console.log(obj3);

    // array concatenation
    // 배열들을 복사해서 하나로 합칠 수 있는 concatenation도 가능!
    const fruits1 = ['🍑', '🍎'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2]; // 이렇게 하면 두 개의 배열을 하나로 병합이 가능!
    console.log(fruits);

    // object merge
    // 당연히 오브젝트도 병합이 가능하겠쥐?
    const dog1 = {
        dog1: '🐕‍🦺'
    };
    const dog2 = {
        dog2: '🦮'
    };
    const dogs = {...dog1, ...dog2};
    // 이렇게 병합이 가능하지만 한 가지 주의할 점이 있다.
    // 만약 각 오브젝트 내부의 key의 이름이 동일한 오브젝트들을 병합한다면
    // 제일 ...dog1, ...dog2 일 때 제일 뒤에오는 아이(dog2)에 있는 value가 앞에 오는 아이에 있는 value를 덮어씌움 
    console.log(dogs);
}

/**
 * Default parameters
 */
{
    // 기존의 방법
    {
        function printMessage(message){
            if (message == null){
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();
        // 이렇게 어떤 인자를 받는 함수를 선언해놓고, 인자를 전달하면 상관없는데
        // 아무런 인자도 전달하지 않으면 undefined가 출력됨.
        // 이를 방지하기 위해 if구문을 활용해 인자를 전달받지 않는 경우를 고려해 함수를 선언해야 했음.
    }

    // Default parameter를 이용하면 이를 아주 간단하게 할 수 있다.
    // 함수 선언 시 parameter 다음에 기본적으로 원하는 초기값을 지정해둠으로써 인자가 전달되면 인자의 값을, 
    // 인자가 전달되지 않으면 기본적으로 설정된 default값을 이용하게 된다.
    {
        function printMessage(message = 'default message'){            
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
}

/**
 * Ternary Operator
 */
{
    const isCat = true;
    //if구문을 기존의 방법으로 작성하면 이랬지?
    {
        let component;
        if (isCat){
            component = '🐱';
        } else {
            component = '🐶';
        }
        console.log(component);
    }

    // Ternary Operator를 활용하면 if문을 한줄로 축약 가능하다. 
    // 원래부터 있던 기능인데 많이들 활용을 못하는 거 같아서 소개해줬단다.
    /**
     * 내 생각에는 왜 Ternary에서는 const 변수에다가 집어넣어서 사용하냐면
     * 결국 Ternary operator는 최종적으로 값을 return해주기 때문에 return된 값만 넣으면 되니까
     * 굳이 let을 안쓰고 const를 쓴거 아닐까?
     * if구문에서는 어떤 값을 component에 넣어줘야 될지 모르니까 let을 쓴거고... 아님 말고 
    */
    {
        const component = isCat ? '🐱' : '🐶';
        console.log(component); // 이렇게 해도 되고
        console.log(isCat ? '🐱' : '🐶'); // 사용하고자 하는 부분에서 바로 사용해도 됨.
    }
}

/**
 * Template Literals
 */
{
    const weather = '⛅';
    const temparature = '16℃';

    // string을 구식으로 조합하던 방식
    // space도 신경써야 되고 + 연산자도 계속 써줘야해서 겁나 불편함
    console.log(
        'Today weather is ' + weather + ' and temparature is ' + temparature
    );

    // cool
    console.log(`Today weather is ${weather} and temperature is ${temparature}`);
}