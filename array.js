'use strict';

// Array

// 1. Declaration (배열을 선언하는 방법)
const arr1 = new Array(); // new 키워드를 이용해서 오브젝트 만들듯이 만들거나
const arr2 = [1, 2]; // 더 흔하게 쓰이는 방법으로 만들 수 있음.

// 2. Index position
// 배열은 Index(0번째, 1번째 등...)을 기준으로 데이터 저장됨. 따라서 인덱스를 활용해서 데이터 검색, 삽입, 삭제하는 방법을 정확히 아는 게 중요!
const fruits = ['🍎', '🍌']
console.log(fruits);
// 참고로 length는 array안에 들어있는 value의 개수(즉, array의 길이라고도 볼 수 있음). 콘솔창으로 찍어서 확인해보기.
console.log(fruits.length); 

// array[]에서 배열은 숫자, 즉 Index를 전달하게 되면, 그 Index에 해당하는 value들을 받아올 수 있음.
console.log(fruits[0]);
console.log(fruits[1]);

// 만약 array 밖에있는 index를 접근하게 되면, 아무것도 들어있지 않기 때문에 undefined라고 나옴.
console.log(fruits[2]);

// 배열의 마지막 value에 접근하는 방법
// array.length는 배열의 value 개수이고, 배열의 index는 0부터 시작하므로 마지막 value의 index는 '전체 개수 - 1' 과 같음. 
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// 첫번째 방법: for loop
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 두 번째 방법: for of
for (let fruit of fruits){
    console.log(fruit);
}

// 세 번째 방법: forEach
// fruits에 있는 forEach라는 API를 이용해서 출력하는 것! 
// forEach는 callback 함수를 받아온다!

// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any)
// 사용하고 싶은 API에 대해 잘 모르겠으면 ctrl + 우클릭해서 어떤 parameter를 받고, 어떤 값을 return 해주는지 확인하고, API에 대한 설명을 읽어보면서 확인하면서 코딩하는 습관을 들일 것! 
// 설명은 항상 해당 API '위쪽에' 써 있음. 밑에 거 읽으면 안됨.
// 위에서 처럼 forEach 함수는 인자로 3개를 받지만 보통 array는 받지 않으니 생략하고, 만든 함수를 arrow function으로 정리한 것.
// 또 우리는 index값도 알고싶지 않으니까 지워서 fruit값들만 전달함.
// 아하, array.forEach()는 배열안에 들어있는 value들 마다 내가 전달한 함수를 실행하는구나!
fruits.forEach((fruit) => console.log(fruit));

// 4. Add, delete, copy
// push: add an item to the end (배열의 맨 끝에 아이템 추가. push 하면 약간 집어넣는다는 어감)
fruits.push('🍓','🍑');
console.log(fruits);

// pop: remove an item from the end (배열의 맨 뒤에서부터 아이템을 지움. pop은 하나를 빼오는 어감)
fruits.pop(); // 이렇게 쓰면 뒤에서 아이템 하나가 pop! 하고 빠지는 거임.
fruits.pop(); // 하나를 더 빼려면 뒤에 한줄 더 써줌
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓','🍋')
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift(); // 제일 앞에있는 아이템부터 하나가 빠지는 거
fruits.shift(); // 그 다음 앞에거가 또 빠짐
console.log(fruits);

// note!! shift, unshift are slower than pop, push
/*
왜냐면, 맨 뒤에서 데이터를 추가했다 지웠다 하는 것(pop, push)은
기존의 array에 있는 value들은 그대로 있기 때문에 빠르고 쉽게 연산이 가능하지만,
맨 앞에서부터 데이터를 추가했다 지웠다 하려면(shift, unshift)
맨 앞에 value를 추가할 때 기존의 value들을 한칸씩 뒤로 밀어야 하고(unshift)
맨 앞에 value를 뺄 때는 기존의 value들을 한칸씩 앞으로 당겨야 하기(shift) 때문에,
array.length가 길면 길수록 더 느려지겠지.

결론은 가능하면 shift, unshift보다는 pop, push를 사용하는 게 더 좋다.
그래서 맨뒤에서 item을 접근하는 것은 매우 빠르고
중간의 item에 접근하는 것도 index를 활용하기 때문에 빠름.
하지만 무언가 배열의 전체 데이터가 움직여야하는(shift) operation들은 굉장히 느릴 수 밖에 없음.
배열의 길이가 길면 길수록 전체적으로 움직여야하는 것들이 더 많아지니 더욱 느려질 수 밖에 없음.
*/

// splice: remove an item by index position
// 이모지는 전부 string으로 처리할 것. 인식도 string으로 인식함.
// 일단 과일들이 몇개 없으니까 fruits에 3개만 더 추가해주고
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);

/* 
이런식으로 (1, ) 콤마를 입력하는 순간
splice(start: number, deleteCount?: number): string[]
splice API에 대한 설명 및 syntax가 팝업창으로 뜸.
우리가 항상 ctrl+우클릭도 그렇고 API의 syntax를 볼 때
'deleteCount?' 이 물음표가 등장하는데
이 물음표는 optional, 즉 값을 지정해도 되고 안해도 된다는 뜻.
또 splice(~): string[] 이런식으로 써있다면 : 뒤에 있는 것은 해당 API가 return해주는 것들을 의미함

fruits.splice(1);
console.log(fruits);

splice는 원하는 index만 지정하고(start: number) 몇개나 지울건지 지정하지 않으면
우리가 지정한 index부터 모든 value를 다 지워버림.

그래서 우리가 원하는 개수만 지우고 싶다면
시작하는 index와 함께 몇개나 지우고 싶은지(deleteCount?: number) 말을 해줘야 함
*/
fruits.splice(1, 1); // 시작하는 index 1부터 1개만 지울거야 -> 바나나만 지워짐
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉');
// 더 재밌는 건 splice를 한 다음에 여기서 원하는 데이터를 더 추가할 수도 있다는 것!
// index 1(지금 현재는 '딸기'를 가리키고 있겠지?)부터 1개만 지우고, 그 자리에 '사과'와 '수박'을 넣어줘 라고 하는 것.
// splice = '꼬아서 잇다', '이어주다'. 지우고 나서 우리가 원하는 데이터도 이어서 넣어줄 수 있으니까 엄청 유용함.
console.log(fruits);

// combine two arrays (두 가지 배열을 묶어서 만들기)
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); 
// concat()을 이용하면 새로 묶여진 배열이 합해져서 return됨
// 이거를 아예 새로운 array인 newFruits를 만들어서 그안에다가 할당하는 것.
// 이처럼 항상 새로운 API를 배우면 그렇구나 하고 넘어가지만 말고 항상 ctrl + 우클릭해서 설명을 확인하고 읽어보는 습관

console.log(newFruits);

// 5. Searching (검사, 검색할 수 있는 API)
// find the index (배열안에 어떤 값이 몇 번째 index에 있는지 알고 싶을때)
console.log(fruits);
console.log(fruits.indexOf('🍎')); // indexOf('알고싶은 value') API로 사과가 몇번째 index에 있는지 콘솔창에서 찍어줌
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥')); // indexOf()는 배열 안에 해당 값이 없는 value를 출력하면 -1이 나옴
/* 
ctrl+우클릭으로 API 찾아볼 때 해당 library가 TS로 작성되서 
searchElement: T, fromIndex?: number 이런식으로 타입이 명시되어 있는거 같다.
근데 우리는 JS 배우는거니까 이 타입은 없는거로 생각하고 보면 됨
*/

// includes
console.log(fruits.includes('🍉')); // array에 수박이 있는지 없는지를 true/false로 반환해서 보여주는 API
console.log(fruits.includes('🥥')); // 없는 value를 출력하면 flase가 나오고

// lastIndexOf
fruits.push('🍎');
console.log(fruits); 
// 마지막에 똑같은 value(사과)가 하나 더 있는데, 이 때 사과는 몇번째 index에 있다고 할 수 있나?

console.log(fruits.indexOf('🍎')); 
// 0번 index에 있다고 나옴. 
// why? indexOf()는 제일 첫번째로 해당값을 만나면 그 값이 들어있는 index를 return해주니까

console.log(fruits.lastIndexOf('🍎')); 
// 5번 index에 있다고 나옴. 
// why? lastIndexOf()는 반대로 제일 마지막에서부터 해당값을 만나면 그 값이 들어있는 index를 return해줌.
// 이런것도 알고 있으면 프로젝트할 때 아주 유용하다.

/* 
여기까지 가장 기본적이지만 너무 중요한 배열의 필수 API 정리!
숙제는 ctrl+우클릭해서 interface Array<T>에 해당하는 내용들, 
즉 배열 API들을 모두 읽어오는 것이 숙제! 몇개 안된다.
다음 강의에서 내주는 퀴즈를 풀려면 한번씩 다 읽고와야 함.
아 이런게 되는구나, 아 이 API는 이 값을 반환해주는구나 하면서 이걸 어떻게 써먹을 수 있을까
그럼 반환해주는 값을 또 const에 넣어보고 이렇게 저렇게 가지고 놀아보고 해볼 것
*/