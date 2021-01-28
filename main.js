// Whole-script strict mode syntax. 타입스크립트를 쓸때는 전혀 선언할 필요가 없는 것.
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
// 'use strict'; 를 VanillaJS로 개발할 때 JavaScript 파일 최상단에 항상 쓰고 시작하기.
// strict mode로 개발하면 js를 좀 더 상식적인 범위안에서 js를 개발할 수 있게 해준다. + 효율적 실행, 성능 개선
'use strict';

/*
API = Application Programming Interface
Web APIs = 자바스크립트 언어 자체에 포함된 아이가 아님. 브라우저가 제공하는, 브라우저가 이해할 수 있는 함수들.
consoleAPI 같은것도 다 Web API임. MDN에서 확인해볼 것.
워낙 자주쓰여서 node.js에서도 자체 console API가 내장되어 있음.
*/
console.log('Hello World');

let a;
a = 6;