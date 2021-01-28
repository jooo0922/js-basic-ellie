'use strict';
/**
 * Optional Chaining (ES11)
 */
{
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };
    
    const person2 = {
        name: 'Bob',
    };

    // 만약 여기서 이런 함수를 구현한다면 어떻게 될까?
    /*
    {
        function printManager(person){
            console.log(person.job.manager.name);
        }
        
        printManager(person1); // 얘는 job 오브젝트도 있고, 그안에 manager 오브젝트도 있으니까 문제없이 출력되지?
        printManager(person2); // 얘는 manager 오브젝트가 존재하지 않으므로 에러메시지가 발생함.
    }
    */

    // 이걸 해결하는 여러가지 방법이 있을거다. (Ternary Operator, && 연산자 등)
    // 우선 && 연산자로 하는 방법을 해보자
    {
        function printManager(person){
            console.log(person.job && person.job.manager && person.job.manager.name);
            // person.job이 있으면~ person.job.manager가 있으면~ person.job.manager.name을 출력하라!
            // 근데 이러면 코드가 자꾸 반복적으로 중복되지?
        }
        
        printManager(person1); 
        printManager(person2); 
    }
    

    // 이제는 이렇게 작성하지 않고 Optional Chaining을 이용해서 작성할 수 있다.
    // 굉장히 Hot trend. 코틀린, 스위프트 등 최신언어에도 다 포함된 기능.
    {
        function printManager(person){
            console.log(person.job?.manager?.name);
        }
        
        printManager(person1); 
        printManager(person2); 
    }
}

/**
 * Nullish Coalescing Operator (ES11)
 */
{
    // Logical OR operator
    // ||이나 && 연산자를 이용할때는 false의 특징을 이해할 필요가 있다.
    // false: false, '', 0, -0, null, undefined 모두 false로 간주한다.
    {
        const name = 'Ellie';
        const userName = name || 'Guest'; 
        // 그래서 ||(OR) 연산자는 앞에 것이 false일때만 뒤에 것을 실행함.
        // name의 값은 'Ellie'로 값이 들어있으니까 true, 그러니까 name이 실행되겠지
        console.log(userName);
    }

    {
        const name2 = null;
        const userName2 = name2 || 'Guest'; 
        // 반대로 name에 null이 할당되면 false이므로, 그러니까 뒤에 있는 'Guest'가 실행되겠지
        console.log(userName2);
    }
    /**
     * 그래서 많은 개발자들이 어떤 특정 갑싱 null이라면 기본적인 값을 할당하도록
     * 이렇게 ||(or)연산자를 많이 이용했는데, 이것을 이용하면 문제가 발생할 수 있다.
     * 
     * 예를 들어, name이 null이나 undefined인 경우에만 기본값을 할당하고 싶은데
     * 사용자가 아무런 이름도 쓰고싶지 않아서
     * ''이렇게 아무것도 이름을 넣지 않은 빈 문자열을 입력해도 
     * 기본값인 'Guest'가 할당이 됨.
     * 왜냐면 빈 문자열도 false로 간주하니까!
     * 또 숫자 0을 입력하는 경우에도 false로 간주되어 같은 상황이 발생함!
     */

     // 그래서 조금 더 명확하게 코딩하려면 ?? (Nullish Coalescing) 을 이용할 것.
    {
        const name3 = '';
        const userName3 = name3 ?? 'Guest'; // name3에 값이 있다면 이름을 쓰고, 아무런 값이 없다면 'Guest'를 쓰자는 뜻임
        console.log(userName3);

        const num = 0;
        const message = num ?? 'Undefined'; // num에 값이 있다면 값을 쓰고, 없다면(null, undefined) 'undefined'를 쓰자
        console.log(message);
    }
}

// 여기까지 현업에서 굉장히 많이 쓰이는 문법들을 엄선해서 정리한 것. 
// es6, es11 최신 문법들 프로젝트 만들고 튜토리얼 따라하면서도 틈틈이 참고하자