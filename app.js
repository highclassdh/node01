// const http = require('http');
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   if (req.url === "/") {
//     res.end("여기는 루트입니다");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인 화면입니다.");
//   }
// });

// app.listen(4001, () => {
//   console.log("http로 가동한 서버입니다");
// });
"use strict"

const express = require('express');   //모듈
const app = express();


const home = require("./routes/home");   //라우팅

app.set("views", "./views");    //앱세팅
app.set("view engine", "ejs");


app.use("/", home);   // use 미들웨어를 등록해 주는 메서드

module.exports = app;




