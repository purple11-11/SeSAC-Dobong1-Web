/* 
    setTimeout(()=>{}, 시간초)
    시간의 단위는 ms (ex. 2초 = 2000)
    설정한 시간 이후에 함수 구현부 실행됨
*/

// 편의점에 들어가서 음료수를 사서 나오는 상황
// setTimeout(() => {
//   console.log("setTimeout 사용해보기");
// }, 3000);

let product, price;

function goMart() {
  console.log("마트에 들어가서 어떤 음료를 살지 고민...");
}

function pickDrink() {
  // 고민의 시간 : 3초
  setTimeout(() => {
    console.log("고민 끝!");
    product = "콜라";
    price = 2000;
  }, 3000);
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

goMart();
pickDrink();
pay();
