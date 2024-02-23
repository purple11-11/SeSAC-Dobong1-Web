const crypto = require("crypto"); // node.js 내장 모듈, 설치 x
/* 
    1. crypto를 이용한 단방향 암호화 구현 - 복호화 불가능
    - createHash(알고리즘)
    - pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1-1) *createHash()*
// createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
// 인코딩으로는 base64(*), hex, ascii, binary 등을 쓸 수 있음

// 비밀번호를 받아서 암호화 시켜주는 함수
const createHashPW = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log("1st hashing : ", createHashPW("1234"));
console.log("2nd hashing : ", createHashPW("1234"));
console.log("3rd hashing : ", createHashPW("1234")); // 전부 다 똑같은 값
console.log("another value : ", createHashPW("1234.")); // 다름

/* ----------------------------------------------------------------------------------------------------------------------------- */

// 1-2) *pbkdf2Sync* (암호화 할 값, 솔트, 반복 횟수, 키 길이, 알고리즘).toString(인코딩방식)
/* 
    솔트를 이용해서 해싱하는 함수
    - salt 생성 : crypto.randomBytes(바이트수) => 생성할 때마다 솔트값 생성! 
    - randomBytes와 pbkdf2Sync 함수는 버퍼 형식의 데이터를 리턴
*/

// buffer가 뭘까?
// const str = "hello!";
// const buffer = Buffer.from(str); // 이진 데이터 형태의 버퍼가 16진수로 표현
// console.log("buffer ::", buffer);

// 회원가입 과정
// 새로운 hash와 salt 를 만드는 과정,>> db에 hash와 salt를 저장해야함
function saltAndHashPW(pw) {
  const salt = crypto.randomBytes(16).toString("base64"); // buffer 형식 return => .toString()
  const iterations = 100; // 반복횟수
  const keylen = 64; // 생성할 키의 길이
  const algorithm = "sha512";

  const hash = crypto.pbkdf2Sync(pw, salt, iterations, keylen, algorithm).toString("base64"); // buffer 형식 return
  console.log("hash ::", hash);

  return { hash, salt }; // {hash: hash, salt: salt} 객체 return
}

console.log("1st hashing ::", saltAndHashPW("1234"));
console.log("2nd hashing ::", saltAndHashPW("1234"));
console.log("3rd hashing ::", saltAndHashPW("1234")); // 해싱할 때 마다 솔트값 생성되어 다르기 때문에 3개 전부 다른 값 출력

// 로그인 과정
// DB에 있는 Hash와 salt를 이용해서
// input password의 Hash값 검증
function checkPW(inputPW, savedSalt, savedHash) {
  // savedHash : DB에 저장되어있는 Hash
  // crypto.pbkdf2Sync
  const iterations = 100; // saltAndPW()의 반복횟수와 같아야함
  const keylen = 64; // saltAndPW()의 키의 길이와 같아야 함
  const algorithm = "sha512"; // saltAndPW()의 알고리즘과 같아야함

  // inputPW를 해시 시켜주는 작업
  const hash = crypto
    .pbkdf2Sync(inputPW, savedSalt, iterations, keylen, algorithm)
    .toString("base64"); // 회원가입 시 사용한 것과 같은 걸로 지정

  console.log("input hash, >> ", hash);
  return savedHash === hash;
}

const registerPW = "qwer1234";

console.log("=================================================================");
// 회원 가입
const { salt: registerSalt, hash: registerHash } = saltAndHashPW(registerPW);

console.log("registerSalt(암호화에 쓰임) ::", registerSalt);
console.log("registerHash(암호화된 hash) ::", registerHash);

// 로그인 >> 비밀번호가 db의 hash값과 일치하는지 확인
const isMatch = checkPW("qwer1234", registerSalt, registerHash);
const isMatch2 = checkPW("qwer12345", registerSalt, registerHash);
console.log("비밀번호 일치? >> isMatch ::", isMatch);
console.log("비밀번호 일치? >> isMatch2 ::", isMatch2);

/* 2. 양방향 암호화 : 복호화 가능 */
console.log("=================================================================");

// createCipheriv()
const key = crypto.randomBytes(32); // buffer
const iv = crypto.randomBytes(16); // salt 같은 역할 (buffer)

const algorithm = "aes-256-cbc";
const originalMessage = "hello, world!"; // 암호화, 복호화 대상

// 암호화 함수
function encrypt(text) {
  // 1. 암호화 객체 생성
  // const cipher = crypto.createCipheriv(알고리즘, 키, iv);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // 2. 실제 데이터 암호화 작업
  // let encrypted = cipher.update(암호화할 데이터, 입력 인코딩, 출력 인코딩);
  let encrypted = cipher.update(text, "utf-8", "base64");

  // 3. .final()을 이용해서 최종 결과 생성
  encrypted += cipher.final("base64");
  return encrypted;
}
// console.log("암호화 return ::", encrypt(originalMessage));

// 복호화 함수
function decrypt(encryptedText) {
  // 1. 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  // 2. 실제 데이터 복호화
  //    base64로 인코딩 된 문자열을 utf8 형태로 복호화 한다.
  let decrypted = decipher.update(encryptedText, "base64", "utf-8"); // 암호화 인코딩과 반대로 입력

  // 3. .final()을 이용해서 최종 결과 생성
  decrypted += decipher.final("utf-8");
  return decrypted;
}

const encryptedMessage = encrypt(originalMessage); // 암호화
console.log("암호화 됨 >>", encryptedMessage);
console.log("복호화 됨 >>", decrypt(encryptedMessage));
