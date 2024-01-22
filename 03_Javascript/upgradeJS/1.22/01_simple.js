/* 구조 분해 할당 */
/* 1. 배열의 구조분해 할당 */
const arr = ["tomato", "kiwi", "banana"];
console.log(arr[2]); // "banana" 출력
const [tomato, kiwi, banana] = arr; // 구조분해 할당
console.log(kiwi); // "kiwi" 출력

// 선택적 할당
const arr2 = ["빨", "주", "노", "초"];
const [red, orange, , green] = arr2; // '노' 빼고 할당
console.log(red);
console.log(green);

// 값 변경해서 순서 바꾸기
let x = "first";
let y = "second";
[x, y] = [y, x];
console.log(x, y); // second first 출력
// 구조분해할당이 아닌 직접 값을 바꾸는 방법
let tmp;
let x2 = "first2";
let y2 = "second2";
tmp = x2;
x2 = y2;
y2 = tmp;
console.log(x2, y2);

/* ------------------------------------------------------ */

/* 2. 객체의 구조분해 할당 */
const obj = {
  title: "제목",
  content: "내용",
  number: 0,
};
// 점표기법으로 값에 접근
console.log(obj.title);

// 객체 구조분해할당으로 값에 접근
/*
const { title, content, number } = obj;
console.log(content);
*/
// key 값을 바꾸고 싶을 경우 (: newKey)
const { title: t2, content, number } = obj;
console.log(t2);

/* ------------------------------------------------------ */

/* 전개 구문 (...연산자) */
/* 배열 */
const arr3 = [1, 2, 3, 4, 5];
const arr4 = ["a", "b", "c"];

console.log(arr3, arr4); // 배열 출력

for (let i of arr3) {
  console.log(i);
}

console.log(...arr3); //1, 2, 3, 4, 5
const arr5 = arr3.concat(arr4);
console.log(arr5); // [1, 2, 3, 4, 5, 'a', 'b', 'c']
const arr6 = [...arr3, ...arr4];
console.log(arr6); // [1, 2, 3, 4, 5, 'a', 'b', 'c']

const str = "younginhi";
let strToArr = [...str];
let strToArr2 = str.split("");
console.log(strToArr);
console.log(strToArr2);

/* 객체 */
const me1 = {
  name: "allie",
  height: 163,
  friends: null,
  married: false,
};
const me2 = {
  name: "진형",
  like: ["코딩하기", "놀러가기"],
  greeting: function () {
    console.log(`안녕하세요, 제 이름은 ${this.name}이고, 키는 ${this.height}입니다.`); // 내 객체의 key에 접근하기 위해 this. 사용
  },
};

let me = { ...me1, ...me2 };
console.log(me); // 같은 key값을 가진 요소가 있으면 나중에 적은 객체의 값이 호출된다.
me.greeting();

/* ------------------------------------------------------ */

/* 실습. Spread 연산자 사용하기 */
// 두 개의 문자열을 합쳐서 배열로 만들기
const word1 = "abc";
const word2 = "xyz";
const arr7 = [...word1, ...word2];
console.log(arr7); // [ 'a', 'b', 'c', 'x', 'y', 'z' ]
const arr8 = [...word1.concat(word2)];
console.log(arr8); // [ 'a', 'b', 'c', 'x', 'y', 'z' ]

/* ------------------------------------------------------ */
/* ------------------------------------------------------ */

/* rest */
const obj2 = {
  title: "제목",
  content: "내용",
  num: 0,
  key4: "value4",
  key5: "value5",
};
const { title: a, content: b, num: c, ...objs } = obj2; // 구조분해할당 해준 요소 외의 값들(key4, key5) objs로 객체 형태로 들어감
console.log(objs);

// "...rest"로 여러개의 인자를 받는 함수
function test(...value) {
  // 매개변수를 ...rest로 할 경우 여러개의 값이 들어갈 수 있다.
  console.log(value);
  const [a, b, ...rest] = value; // 첫번째, 두번째 인자만 a,b에 값을 넣고 나머지는 rest에 배열로 들어감
  console.log(a);
  console.log(b);
  console.log(rest);
}

test(1, 2, 3, 4, 5); // 여러 인자를 test() 함수에 넣고,

// Quiz
// 매개변수가 몇개가 들어오든 합산해주는 함수 addNumber()
function addNumber(...value) {
  let sum = 0;
  console.log(value);
  // for...of 문
  //   for (let i of value) {
  //     sum += i;
  //   }

  // .forEach()
  value.forEach((e) => {
    sum += e;
  });
  return sum;
}

let res = addNumber(1, 2, 3, 4, 5, 6, 7); // 28
console.log("res: ", res);
