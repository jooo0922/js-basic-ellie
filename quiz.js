'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const fruitsToString = fruits.toString();
    console.log(fruitsToString);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const fruitsToArray = fruits.split(', ');
    console.log(fruitsToArray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2);
    console.log(result); // 리턴값은 삭제된 array들을 리턴해줌
    console.log(array); // array에는 해당 index의 value를 지워줌.
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
    students.forEach((student) => {
        if(student.score === 90) {
            console.log(student.name);
        }
    });
}

// Q6. make an array of enrolled students
{
    const enrolledStudents = students.filter(student => student.enrolled === true);
    console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]

let scores = [];
students.forEach((student) => scores.push(student.score));
console.log(scores);
// 이 블록에서 정의한 변수를 써먹고 싶으면 블록을 해제해야 global scope이 됨!


// Q8. check if there is a student with the score lower than 50
{
    console.log(students.some(student => student.score < 50));
}

// Q9. compute students' average score
{
    let avg = 0;
    students.forEach((student) => avg = avg + student.score);
    console.log(avg/5);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const allScores = scores.join(', ');
    console.log(allScores);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const ascendingOrder = scores.sort(function(a, b){
        return a - b;
    });
    console.log(ascendingOrder.join(', '));
}