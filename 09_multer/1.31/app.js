const express = require("express");
const app = express();
const multer = require("multer");
const PORT = 3000;
const path = require("path");

// ### 미들웨어
// view 관련
app.set("view engine", "ejs");
app.set("views", "./views");

// static 폴더
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/public")); // /public 폴더를 /static으로 불러서 사용할 수 있음
// app.use('/이 이름으로 사용할 것', express.static(실제 폴더 경로명 표시)) (__dirname: 현재 위치한 폴더 경로를 나타내는 JS 내장 변수)
// console.log("현재 위치한 폴더의 경로", __dirname);

// body-parser는 멀티파트 데이터(이미지, 동영상, 파일)를 처리하지 못한다 -> multer 사용!
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// multer
const upload = multer({
  dest: "uploads/", // 파일을 업로드 하면 그 파일이 저장될 경로 지정
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, done) => {
      const extension = path.extname(file.originalname); // 확장자
      done(null, path.basename(file.originalname, extension) + Date.now() + extension); // Date.now()는 날짜를 입력하는 목적이 아닌 중복 방지를 위해 ms 단위의 값을 넣어주려는 것임
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
/* 
multer 디테일 설정
- storage: 저장공간에 정보
    - diskStorage: 파일을 저장하기 위한 모든 제어기능 제공
    - destination: 저장경로
    - filename: 파일명
- limits : 파일 제한
    - fileSize: 파일 사이즈 제한
*/

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("파일 업로드 완료!");
});

/*  파일 업로드시 서버에 나타나는 데이터
{
  fieldname: 'userfile', // 폼에 정의한 name 값
  originalname: 'pooh.png', // 
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'cbcf9fd9952a509382d323c4364741d2',
  path: 'uploads\\cbcf9fd9952a509382d323c4364741d2',
  size: 718119
}
[Object: null prototype] { title: 'POOH' }
 */

app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send("파일 업로드 완료!");
});

/* 
[
  {
    fieldname: 'multifiles',
    originalname: 'pooh.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'pooh1706672242308.png',
    path: 'uploads\\pooh1706672242308.png',
    size: 718119
  },
  {
    fieldname: 'multifiles',
    originalname: 'small_img.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'small_img1706672242314.png',
    path: 'uploads\\small_img1706672242314.png',
    size: 2441
  }
]
[Object: null prototype] { title: '파일들' }
 */

app.post(
  "/uploads/files",
  uploadDetail.fields([{ name: "file1" }, { name: "file2" }, { name: "file3" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("파일 업로드 완료!");
  }
);
/* 
[Object: null prototype] {
  file1: [
    {
      fieldname: 'file1',
      originalname: 'beach1.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      destination: 'uploads/',
      filename: 'beach11706672729768.jpg',
      path: 'uploads\\beach11706672729768.jpg',
      size: 31691
    }
  ],
  file2: [
    {
      fieldname: 'file2',
      originalname: 'beach2.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      destination: 'uploads/',
      filename: 'beach21706672729769.jpg',
      path: 'uploads\\beach21706672729769.jpg',
      size: 123397
    }
  ],
  file3: [
    {
      fieldname: 'file3',
      originalname: 'beach3.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      destination: 'uploads/',
      filename: 'beach31706672729773.jpg',
      path: 'uploads\\beach31706672729773.jpg',
      size: 44357
    }
  ]
}
[Object: null prototype] {
  title1: 'beach1',
  title2: 'beach2',
  title3: 'beach3'
}
 */

app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  //   res.send(req.file);
  //   res.send(...req.file, ...req.body); // 이렇게 써도 됨
  res.send({ title: req.body, fileInfo: req.file });
  /* 아래 형태의 객체로 들어감
  {
    title: 'beach3',
    fileInfo: {
        fieldname: 'file3',
        originalname: 'beach3.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        destination: 'uploads/',
        filename: 'beach31706672729773.jpg',
        path: 'uploads\\beach31706672729773.jpg',
        size: 44357
    }
  }
   */
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
