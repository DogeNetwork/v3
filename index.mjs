import express from "express";
import http from "node:http";
import createBareServer from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
dotenv.config();

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/bare/");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/apps", (req, res) => {
  res.sendFile(path.join(__dirname, "apps", "index.html"));
});

app.get("/games", (req, res) => {
  res.sendFile(path.join(__dirname, "games", "play.html"));
});

app.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

app.get("/*", (req, res) => {
  res.redirect("/404");
});

// Bare Server
server.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.on("listening", () => {
  console.log(`doge unblocker listening on port 8080 yessir`);
});

server.listen({
  port: process.env.PORT,
});
