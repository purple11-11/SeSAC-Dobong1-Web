let product, price;

function goMart() {
  console.log("마트에 들어가서 어떤 음료를 살지 고민...");
}

function pickDrink(callback) {
  // 고민의 시간 : 3초
  setTimeout(() => {
    console.log("고민 끝!");
    product = "콜라";
    price = 2000;
    callback();
  }, 3000);
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

goMart();
pickDrink(pay); // 콜백함수로 넘길때는 매개변수 채우지 않고 넘겨줌
// pay();
