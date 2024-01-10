/* 1. for문 */
/* 
    for(변수 선언과 초기값 할당; 조건식(어디까지 증가? 감소?); 증감식) {
        반복할 코드;
    }
 */

for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(`안녕하세요${i}`);
}

// 1부터 5까지 출력하는 방법
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i < 6; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

// 감소
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1부터 n까지의 덧셈
console.log("1부터 n까지의 덧셈");
let n = 11;
let sum = 0;
for (let i = 0; i <= n; i++) {
  sum += i;
}
console.log(sum);

/* 배열과 함께 사용하는 for문 */
let fruits = ["사과", "망고", "오렌지", "망고스틴"];
console.log(fruits.length); // 배열의 길이 확인
console.log(fruits[0]);
for (let i = 1; i <= fruits.length; i++) {
  console.log("I like", fruits[i - 1]);
}

// 배열 요소의 합 구하기
let numsArr = [99, 99, 98, 85, 77];
let sum2 = 0;
for (let i = 0; i < numsArr.length; i++) {
  sum2 += numsArr[i];
}
console.log(sum2);

/* 2. while문 */

/* 
    초기화식;
    while(조건식) {
        조건이 참일 때 실행할 문장;
        증감식;
    }
 */

let n2 = 1; // while의 초기화 식
while (n2 <= 5) {
  // 조건식
  console.log(n2); // 실행문
  n2++;
}
console.log("--------");
n2 = 10;
while (n2 > 4) {
  console.log(n2);
  n2--;
}
console.log("--------");

// 1~10 짝수만 출력 > while문 이용
n2 = 1;
while (n2 <= 10) {
  if (n2 % 2 === 0) {
    console.log(n2);
  }
  n2++;
}
console.log("--------");

// 10부터 1까지 감소하는데 홀수만 출력
n2 = 10;
while (n2 >= 1) {
  if (n2 % 2 === 1) {
    console.log(n2);
  }
  n2--;
}

console.log("----break;----");
let b = 0;
while (true) {
  console.log(b);
  b++;
  if (b > 10) break;
}

console.log("----continue----");
let sum3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  // 1%2 === 0 일 때 반복하지 않고 다음 반복으로 넘김
  sum3 += i;
}
console.log(sum3);

// let n3 = 0;
// while (confirm("계속 진행 할까요?")) {
//   n3++;
//   alert(`${n3}번째 alert창`);
// }

console.log(
  "----실습. prompt를 이용해 입력 받은 수까지 13의 배수면서, 홀수인 숫자 찾는 프로그램----"
);
// let num = prompt("10000 이하의 숫자를 입력해주세요");
// if (0 <= num && num <= 10000) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 13 === 0 && i % 2 === 1) {
//       console.log(i);
//     }
//   }
// }

console.log("----구구단----");
num = 2;
for (let i = num; i <= 9; i++) {
  console.log(`---${i}단 ---`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

console.log("----0~100의 숫자 중 2또는 5배수 총합 구하기----");
answer = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    answer += i;
  }
}
console.log(answer);
