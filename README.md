# zoom-clone

WebRTC와 WebSocket을 이용한 Zoom 클론코딩

## Project Setup

```bash
npm init -y
```

```bash
touch README.md & touch .gitignore
```

### nodemon

코드의 변경사항이 있을 때 서버를 재시작해주는 프로그램
여기서는 서버를 재시작하는 대신 babel-node를 실행하도록 설정

```bash
npm i -D nodemon
```

#### nodemon.json

```json
{
  "ignore": ["src/public/*"],
  "exec": "babel-node src/server.js"
}
```

### babel

babel-node를 실행하면서 @babel/preset-env에 의해 환경에 맞는

```bash
npm i -D @babel/core @babel/cli @babel/node @babel/preset-env
```

#### babel.config.json

```json
{
  "presets": ["@babel/preset-env"]
}
```

### Backend, Frontend

```bash
npm i express pug
```

- Frontend - `public/js/app.js`
- Backend - server.js

#### server.js

```js
import express from "express";

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

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
```

## etc

[MVP.css](https://andybrewer.github.io/mvp/)
