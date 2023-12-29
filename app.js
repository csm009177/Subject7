import http from "http";
import fs from "fs";

const PORT = 3213;
const JSONPath = "index.json";
const htmlPath = "index.html"
const cssPath = "index.css"
const compPath = "component.js"


const serv = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile(htmlPath, "utf8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } 
});

serv.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
