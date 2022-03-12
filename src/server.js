import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public")); // public 폴더를 유저에게 공개

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/*", (req, res) => {
  res.redirect("/");
});

// app.listen(PORT, () => {
//   console.log(`Listening on http://localhost:${PORT}`);
// });

const server = http.createServer(app); // http 서버
const wss = new WebSocket.Server({ server }); // websocket 서버

wss.on("connection", (socket) => {
  // console.log(socket);
  console.log("Connected to Browser ✅");

  socket.on("message", (message) => {
    console.log(message.toString("utf8"));
  });

  socket.on("close", () => {
    console.log("Disconnected from Browser ❌");
  });

  socket.send("hello!!!");
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
}); // 동일한 포트에서 http, websocket request 모두 처리 가능
