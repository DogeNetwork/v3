import express from "express";
import http from "node:http";
import createBareServer from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware"; // Import the package
dotenv.config();

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/bare/");
const PORT = process.env.PORT || 8080;

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
  res.sendFile(path.join(__dirname, "games", "index.html"));
});

app.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/*", (req, res) => {
  res.redirect("/404");
});

// Proxy middleware configuration
const proxyOptions = {
  target: "185.199.229.156:7492", // Replace "proxy-ip-address" with your desired proxy IP
  changeOrigin: true,
  secure: false,
};

// Create the proxy middleware
const proxy = createProxyMiddleware(proxyOptions);

// Use the proxy middleware for all requests
app.use(proxy);

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
  console.log(`http://localhost:${process.env.PORT}`);
});

server.listen(PORT); // Use the PORT variable instead of hardcoding the port number
