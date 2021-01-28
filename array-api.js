'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', ');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(', ');
    console.log(result);
    // 참고로 split()은 array가 아니라 string의 API임. 그러니 array API 문서에서 찾아봐도 안보일거다.
    // ctrl+우클릭 시 옵션이 많이 보이면 lib.es5.d.ts 에 정의된 부분을 기준으로 볼 것!
    /* 
    그리고 내가 퀴즈 풀면서 보니까 해당 API 관련 노트필기는 
    모든 파라미터나 리턴값에 대해서 할 필요는 없는거 같음.
    왜냐면 API가 너무 많기 때문에 그거 다 외워서 쓸건 아니잖아? 
    자주 쓰고 중요한 건 알아서 외워지겠지만 lib.es5.d.ts 이 문서만 잘 보고
    궁금하면 MDN 가서 보충설명, 사용예시 읽어보면 어떤 기능인지,
    어떻게 사용하는 건지 다 나옴. 필요한 기능을 잘 찾아서 검색만 잘 할 줄 알면 될 듯.
    */
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
    // 콘솔창 두 개를 보면 array.reverse()는 순서가 바뀐 배열을 리턴해주기도 하지만, 해당 array의 순서 자체도 바꾸어줌. 
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    /*
    const result = array.splice(0, 2);
    console.log(result); // 리턴값은 삭제된 array들을 리턴해줌
    console.log(array); // array에는 해당 index의 value를 지워줌. 배열 자체를 수정.
    그러나 문제에서 'make new array' 즉, 새로운 array값을 만들어야 하므로,
    slice() 라는 API를 활용할 것.
    slice(start, end)에서 end에 들어가는 index는 항상 배제된다.
    따라서 end에 들어갈 index는 내가 넣고자하는 마지막 index의 다음칸 index가 들어가야 함.
    */
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array); // 원래 array는 그대로. 배열 자체를 수정하지 않음. return값만 원하는 범위만큼 slice해서 리턴해주는 것.
}

class Student {
    constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // callback 함수란, 어떤 함수 안에서 '야, 나중에 호출할게' 하는 함수들 
    // find() 메소드는 첫번째 item에서 호출한 callback 함수가 true를 반환하면 find 메소드를 끝냄.
    /* 
    lib.es5.d.ts에서 찾은 API에 들어가는 parameter값이 뭔지 감이 안오면 이렇게 콘솔창에 찍어서 확인해가면서 할 것.
    console.log(student, index); 
    index값은 필요없기 때문에 지워도 됨.
    */ 
    const result = students.find((student) => student.score === 90); 
    // 해당 조건문이 맞으면 true를 자동 return하는거지.
    // 이렇게 한줄로 써진 arrow function에서는 조건문 맨 앞에 'return'과 맨 뒤에 ';'가 생략된거임.
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    // 이렇게 student.enrolled 라고 쓰면 해당 조건문이 true일 때 true를 반환한다는 거임.
    // return student.enrolled === true;
    // student.enrolled === true
    // student.enrolled 이 순서로 생략된거임. 어차피 enrolled안에 true값이 있으면 true가 return되니까
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    /*
    map()은 array element들이 지정한 function을 거쳐서 다시 새로운 값으로 변환하는 것을 말함.
    우리가 전달한 콜백함수가 어떤 일을 하느냐에 따라서 각각의 element가 다른값으로 
    mapping되어서 새로운 array로 만들어진다는 것.
    ex> 콜백함수가 *2면 각 element의 값에 2를 곱한 값들로 mapping된 새로운 array가 나옴.
    */
    const result = students.map((student) => student.score);
    // 항상 arrow function 뒤에 나오는 콜백함수의 내용들에는 맨앞에 'return'이 생략된거다. 기억해!!
    /*
    콜백함수의 parameter의 이름을 아무 의미없는 item, value 이런거로 쓰지 말 것.
    한눈에 무슨 parameter가 들어오는 건지 못알아봄.
    이런 arrow function들이 한줄이면 몰라도 점점 많아지고 길어지면 이해하기 힘듦.
    그래서 최대한 이해하기 쉽게 이름을 짓는 것이 중요.
    */
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result); // array.some() 해당 배열의 모든 요소 중 하나만 콜백함수를 충족하면 true

    const result2 = students.every((student) => student.score < 50);
    console.log(result2); // array.every() 해당 배열의 모든 요소가 콜백함수를 모두 충족해야 true
}

// Q9. compute students' average score
{
    /*
    이거 좀 어려워하는 사람이 많다고 한다.
    array.reduce() 는 배열안의 모든 요소에 콜백함수를 실행하는데
    이 콜백함수에서 return되는 값은 함께 누적된 결과값을 return한다.
    즉, 어떤 값들이 누적된 값을 전달하는 것.
    그래서 이 reduce는 배열에 있는 모든 요소들의 값을 누적하는 뭔가 함께 모아놓을 때
    쓰는거구나 라고 감을 잡으시면 되요.
    */
    const result = students.reduce((prev, curr) => {
        console.log('---------') // 모든 요소들에 대해 반복되서 나오는 콜백함수니까 구분선 사용함.
        console.log(prev); 
        console.log(curr); // 뭔지 모르겠는 parameter는 콘솔에 찍어보자!
        return prev + curr.score; // reduce에서는 우리가 return하는 curr값이 순차적으로 prev에 전달되는 것임.
    }, 0); // 여기서 0은 맨 처음 콜백함수의 prev 값으로 할당되는 initiative value
    console.log(result / students.length); // 요것도 배열 요소 합의 평균을 구하려면 배열의 전체 개수 .length값으로 나누는 게 더 적절하지.
    /*
    정리하면 reduce()는 우리가 원하는
    시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 쓰는 거구나 라고 보면 됨.
    참고로 reduceRight()은 배열의 맨 뒤에서부터 시작하는 것
    누적하는 순서만 거꾸로라고 보면 됨.
    */
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score)
    .join(', ');
    /*
    이렇게 array.map(), array.join() 이런 애들은 각자가 배열 자체를 return하기 때문에
    API를 섞어서 연달아 호출할 수 있다.

    이렇게 줄줄이 연달아 묶어서 하면 너무 간편하게 좋다.
    이런 걸 '함수형 프로그래밍'이라고 하는데
    이 부분은 나중에 따로 영상 올려서 설명해준다네.
    */
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(', ');
    console.log(result);
    /*
    array.sort()
    콜백 함수에는 a, b 즉 이전 값, 현재 값이 전달되는데
    네가 만약 -(마이너스) 값을 return하게 되면
    첫 번째(a)가 뒤에 것(b)보다 작다고 간주되서 정렬된다.

    만약 반대로 하고 싶으면
    .sort((a, b) => b - a)
    로 하면 점수가 높은 것이 앞에 먼저 나올것임.
    */
}

/*
오늘 알려준 API들은 현업에서 프로젝트할 때 유용하게 쓰일 뿐만 아니라
기술 면접에서도 많이 물어보는 아이들. 
한가지라도 이해가 안되는 게 있다면 그냥 넘어가지 말고 
API를 읽고 직접 콘솔창으로 써보면서 이해를 하고 손에 익혀서 넘어가면
너무 많은 도움이 될 것이다.
*/