const express = require("express");
const app = express();
const PORT = 8000;
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, "uploads/");
    },
    filename: (req, file, done) => {
      const extension = path.extname(file.originalname);
      done(null, path.basename(file.originalname, extension) + Date.now() + extension);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", uploadDetail.single("profile"), (req, res) => {
  console.log("req.file: ", req.file);
  console.log("req.body: ", req.body);
  //   res.send("파일 업로드 완료");
  const userInfo = req.body;
  res.render("result", {
    name: userInfo.name,
    id: userInfo.id,
    pw: userInfo.pw,
    age: userInfo.age,
    imgSrc: req.file.path,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
