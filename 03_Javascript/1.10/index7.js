// 문자열에서 사용 가능한 속성/ 메소드
/* 
    - length
    - toUpperCase, trim, indexOf,
      slice, replace, replaceAll, repeat, split
 */

let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon   ";

// 문자열 인덱싱
console.log(str1[5]);
console.log(str1[5] + str1[0] + str1[8]);

console.log("str1 문자열 길이", str1.length);
console.log("str2 문자열 길이", str2.length);

let msg = "Happy Birthday~";
let useId = "    use123    ";

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(str2.trim().length);
console.log(useId.trim());

let mango = "applemango";
/* .indexOf() - 반환값 : 숫자 */
console.log(mango.indexOf("apple")); // 0
console.log(mango.indexOf("mango")); // 5
console.log(mango.indexOf("e")); // 4

// 문자열에 포함되지 않은 문자열이 매개변수로 들어가면
// -1 반환
console.log(mango.indexOf("x")); // -1

/* .slice() - 반환값 : 문자
    - .slice(n) - n번째 인덱스 값 부터 끝까지 출력
    - .slice(n, m) - n번째 인덱스 값 부터 m-1번째까지 출력
    - .slice(-n) - 마지막 문자부터 n개 인덱스 출력
*/
console.log(mango.slice(5)); // mango
console.log(mango.slice(3, 6)); // lem
console.log(mango.slice(-1)); // o
console.log(mango.slice(-4)); // ango
console.log(mango); // .slice()는 원본 문자열에 영향을 주지 않는다.

let msg2 = "Wow It is so amazing!!!";
console.log(msg2.replace("Wow", "Hey"));
console.log(msg2); // 원본 문자열 그대로
console.log(msg2.replaceAll("o", "O"));
console.log(msg2);

let date = "2024.10.10";
//2024-1-10
console.log(date.replaceAll(".", "-"));
console.log(date);
// 원본 문자열 변경하고 싶을 때 변수에 대입 해주기!
date = date.replaceAll(".", "-");
console.log(date);

console.log("abc".repeat(10));

console.log(date.split("-"));
console.log(date.split(""));

// 배열관련 메소드
/* 
    - length (속성)
    - push, pop, unshift, shift, indexOf, join, reverse
    - includes, map, forEach, find, filter
    - for ~ of (함수 아님)
 */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "puppy", "rabbit", "hamster"];

arr1[5] = 6; // 마지막 인덱스를 알아야 새로운 값 넣어줄 수 있음
// => .push() 사용해서 맨 끝에 새로운 요소 추가
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(7);
arr1.push(10);
console.log(arr1);
arr1.pop(); // 배열 맨 끝 요소 삭제
console.log(arr1);

// (배열 첫 요소) unshift(추가), shift(삭제)
arr2.unshift("cat");
console.log(arr2);
arr2.shift();
console.log(arr2);

/* includes (매개변수 한 개 - 배열의 요소가 들어감)
    - 매개변수로 들어간 요소가 배열에 있으면 true, 없으면 false
*/
// let arr2 = ["quakka", "puppy", "rabbit", "hamster"];
console.log(arr2.includes(1));
console.log(arr2.includes("quakka"));

/* indexOf - 문자열의 indexOf와 동일한 동작
    몇 번 인덱스인지 확인 후 인덱스 값 반환
*/
console.log(arr2.indexOf("quakka"));

/* reverse - 배열의 순서를 뒤집어줌
    실제 배열이 변경됨
*/

arr1.reverse();
console.log(arr1);

/* join - 문자열의 split 메소드와 반대
    배열을 문자열로 변경
*/

// let str1 = "Strawberry Moon";
str1 = str1.split("");
console.log(str1);
// str1 = str1.join("");
str1 = str1.join("+");

console.log(str1);

/* 반복문 - for of & forEach */
let arr3 = [5, 6, 7, 8, 9];
let alphabets = ["a", "b", "c", "d", "e", "f"];

/* arr3 요소 출력 */
console.log("--- 기본 for문 ---");
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

console.log("--- for of ---");
for (let i of arr3) {
  console.log(i);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

console.log("--- forEach ---");
/* 
    [arr].forEach(function(element, [index, array]){ - index, array 선택 사항

    }) 
    : 매개변수로 익명함수(화살표 함수로 써도 됨)
 */
arr3.forEach(function (element) {
  console.log(element);
});

arr3.forEach(function (element, index) {
  console.log(element, index);
});

arr3.forEach(function (element, index, array) {
  console.log(element, index, array);
});

// filter
// return 이후 조건을 만족하는 요소들을 모아서 "배열로" 반환
// 1. 함수 표현식
let six = arr2.filter(function (word) {
  return word.length === 6;
});
console.log(six); // 배열 반환

// 2. 화살표 함수 & return O
let six2 = arr2.filter((word) => {
  return word.length === 6;
});
console.log(six2);

// 3. 화살표 함수 & return X (구현부 중괄호도 없어야 함)
let six3 = arr2.filter((word) => word.length === 6);
console.log(six3);

// map
// 배열 내의 모든 요소에 대해 함수 호출한 결과를 모아서 배열로 반환
let arr4 = [1, 2, 3, 4, 5];
let multiArr = arr4.map(function (element) {
  return element * 3;
});
console.log(multiArr);
// 화살표 함수

let multiArr2 = arr4.map((element) => {
  return element * 3;
});
console.log(multiArr2);

// find
// 배열에서 특정 조건을 만족하는 "첫번째 요소" 반환
let findResult = multiArr.find(function (element) {
  return element > 10;
});
console.log(findResult);

/* ----------------------------------- */
/* ---- 내장 메소드 실습 ---- */
// 1. 배열과 합
// 1~100까지 배열 for문으로 만들기
let arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
console.log(arr);

//  arr의 합 구하기
// for문
let sum = 0;
let sum2 = 0;
let sum3 = 0;
for (let i = 0; i <= arr.length; i++) {
  sum += i;
}
console.log(sum);

// for of 문
for (let i of arr) {
  sum2 += i;
}
console.log(sum2);

// forEach문
arr.forEach((e) => {
  sum3 += e;
});
console.log(sum3);

// 2. 내장 메소드 실습
// 두 배열에서 동일한 요소만을 가지는 배열 same과 서로 다른 요소만 가지는 배열 diff 만들기
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = fruits1.filter((e) => fruits2.includes(e));
console.log(same);

let diff = fruits1.filter((e) => !fruits2.includes(e));
console.log(diff);
