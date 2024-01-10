/* Date 객체 */
// 현재 시간, 날짜에 대한 정보를 얻기 위해 사용
// 원하는 값으로 초기화 가능
let now = new Date();
console.log(now);

// new Date('날짜 문자열')
console.log(new Date("September 30, 2000 13:00:00"));
console.log(now.getFullYear(), "년");
console.log(now.getMonth(), "월"); // 월: 0~11
console.log(now.getDate(), "일");
console.log(now.getHours(), "시"); // 시간: 0~23
console.log(now.getMinutes(), "분"); // 분: 0~59
console.log(now.getSeconds(), "초"); // 초: 0~59
console.log(now.getMilliseconds(), "밀리초"); // 밀리초: 0 ~ 999
console.log(now.getDay(), "요일"); // 0(일)~6(토)

/* Math 객체 */
console.log(Math.PI); // 파이
console.log(Math.E); // 자연 로그 e
console.log(Math.SQRT2); //루트2

// 메소드
console.log(Math.min(1, 2, 3, 4, -5, -7.5));
console.log(Math.max(1, 2, 3, 4, -5, -7.5));
console.log(Math.ceil(5.155)); // 올림 return : 5
console.log(Math.floor(-5.155)); // 버림 (-)일 때 주의! return : -6
console.log(Math.floor(5.15)); // 5
console.log(Math.round(5.15)); // 반올림
// random : 0 <= x <1 난수 출력
console.log(Math.random());

// 0 <= x < 3
console.log(Math.floor(Math.random() * 3));

// lotto : 1 <= x < 46
// 위의 범위에 값을 찾기 위해 (0<= x <45) +1 로 계산해서 0을 포함하지 않도록 한다
console.log(Math.floor(Math.random() * 45) + 1);

// object 관련 객체
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Busan: "051",
  Ulsan: "052",
  Gwangju: "062",
  Jeju: "064",
};
const obj = new Object({
  a: "10",
  b: "55",
});
console.log(obj);

// 각각 key와 value를 뽑아서 "배열"로 반환하는 객체의 메소드
const area = Object.keys(areaNum);
const number = Object.values(areaNum);

console.log(area, number);

/* ----------------------------------- */
/* ---- 내장객체 실습 ---- */

/* 1. 오늘이 평일인지 주말인지 판별
      0, 6 : 일, 토 / 1~5 : 월~금
*/
let day = now.getDay(); // 3 : 수요일
1 <= day && day <= 5 ? console.log("평일") : console.log("주말");

/* 2. 랜덤 숫자 뽑기
    - 0 ~ 10 사이 랜덤 숫자 출력
    - 0과 10 포함
    - 내장 객체 Math 사용
 */
let num = Math.floor(Math.random() * 11);
console.log(num);
