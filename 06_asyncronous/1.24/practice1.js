/*
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

// call -> back -> hell 순서로 실행
call("영인", function (name) {
  console.log(name + "반가워");
  back(function (txt) {
    console.log(txt + "을 실행했구나");
    hell(function (message) {
      console.log("여기는 " + message);
    });
  });
});
*/

/* promise로 풀기 */

// function call(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       //   console.log(name);
//       resolve(name);
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       //   console.log("back함수 실행");
//       resolve("back");
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       //   console.log("callback hell 실행");
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// call("young")
//   .then((res) => {
//     console.log(res + "반가워");
//     return back();
//   })
//   .then((res) => {
//     console.log(res + "을 실행했구나");
//     return hell();
//   })
//   .then((res) => {
//     console.log("여기는 " + res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

/* async, awit으로 풀기 */

function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      //   console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      //   console.log("back함수 실행");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      //   console.log("callback hell 실행");
      resolve("callback hell");
    }, 1000);
  });
}

async function exec() {
  let name = await call("young");
  console.log(name + " 반가워");
  let txt = await back();
  console.log(txt + "을 실행했구나.");
  let msg = await hell();
  console.log("여기는 " + msg);
}

exec();
