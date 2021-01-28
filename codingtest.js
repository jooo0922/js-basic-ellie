'use strict';

// 다른 사람들 풀이 보니까 Math라는 메소드 내장 객체를 주로 사용하는거 같음.
// string 메소드도 자주 쓰는거 같음.
const s = ["sun", "bed", "car"];
function solution(strings, n) {
  const newChars = [];
  let answer = [];
  let res = [];
  strings.forEach(string => {
    const chars = string.split('');
    newChars.push(chars[n]);
    newChars.sort();
    answer = newChars.map(char => {
      if (char === string[n]){
        res = string;
      }
      return res;
    });
  })
  console.log(answer);
}
solution(s, 1);