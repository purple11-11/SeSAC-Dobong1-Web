let product, price;

function goMart() {
  console.log("마트에 들어가서 어떤 음료를 살지 고민...");
}

function pickDrink() {
  // 고민의 시간 : 3초
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝!");
      product = "콜라";
      price = 2000;
      //   resolve("구매 완료!");
      reject("실패");
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

goMart();
pickDrink()
  .then(() => {
    pay();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("마트에서 나왔어요.");
  });

function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

call("kim")
  .then((name) => {
    console.log(name + "반가워");
    return back();
  })
  .then((txt) => {
    console.log(txt + "을 실행했구나");
    return hell();
  })
  .then((message) => {
    console.log("여기는 " + message);
  })
  .catch((error) => {
    console.error(error);
  });
