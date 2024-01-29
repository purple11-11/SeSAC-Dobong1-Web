// JSON
const obj = `{
    "model": "아이오닉",
    "price": 50000000,
    "isElectric": true,
    "option": ["사이드 미러", "스마트 스크린"]
}`;

console.log(obj);
console.log(typeof obj); // string
console.log(obj.model); // undefined

// JSON.parse('실제 JSON 데이터') : JSON -> Obj
const carInfo = JSON.parse(obj);
console.log("*********OBJECT*********");
console.log("carInfo: ", carInfo);
console.log("carInfo Type: ", typeof carInfo); // object
console.log("carInfo.model: ", carInfo.model); // 아이오닉

// JSON.stringify('객체') : obj -> JSON
console.log("*********OBJECT*********");
const carJson = JSON.stringify(carInfo);
console.log("json1", carJson);
console.log(carJson.model); // undefined
const carJson2 = JSON.stringify(carInfo, null, 5);
console.log("json2", carJson2);
console.log(carJson2.model); // undefined
