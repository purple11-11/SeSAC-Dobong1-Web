const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models");
const session = require("express-session");
require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session 설정
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30, // 30 min
      httpOnly: true,
    },
  })
);

app.use("/", require("./routes")); // routes > index.js

app.get("*", (req, res) => {
  res.render("404");
});

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
