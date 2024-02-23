const bcrypt = require("bcrypt"); // 강력한 암호화 모듈

// saltRounds : 해시함수의 반복을 의미
// 숫자가 클 수록 안전 but 성능 저하를 일으킴 => 적당히
const saltRounds = 10;

// 회원가입 >> 해시값 생성
function hashPW(pw) {
  // hashSync(비밀번호, 솔트 라운드) >> return 값은 암호화 된 문자(string)
  return bcrypt.hashSync(pw, saltRounds);
}

// 로그인 >> 비밀번호(해시 값) 일치 확인
function comparePW(inputPw, hashedPw) {
  // compareSync(원본 pw, 해시된 pw)
  return bcrypt.compareSync(inputPw, hashedPw); // return 값은 true || false
}

const originalPassword = "12345";
// 비밀번호에 대한 해시값 생성
// 회원가입 작업 시 활용
const hashedPw = hashPW(originalPassword);
console.log("암호화된 비밀번호 >>", hashedPw);
// 비밀번호 일치 여부 확인
// 로그인 작업 시 활용
console.log("비밀번호 비교1 >>", comparePW(originalPassword, hashedPw));
console.log("비밀번호 비교2 >>", comparePW("1234", hashedPw));
