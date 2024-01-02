// 필요한 모듈 가져오기
import http from 'http';
import fs from 'fs';
import path from 'path';

// 파일 경로 정의
const JSONPath = "index.json";
const htmlPath = "index.html";
const cssPath = "index.css";
const compPath = "component.js";

// 서버 포트 설정
const PORT = 3213;

// 서버 생성
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        // index.html 파일 읽기
        fs.readFile(htmlPath, "utf8", (err, htmlData) => {
            if (err) {
                res.writeHead(500);
                res.end("Internal Server Error");
                return;
            }
            // Content-Type 설정
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(htmlData);
        });
    } else if (req.url === '/index.css') {
        // index.css 파일 읽기
        fs.readFile(cssPath, "utf8", (err, cssData) => {
            if (err) {
                res.writeHead(500);
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(cssData);
        });
    } else if (req.url === '/component.js') {
        // component.js 파일 읽기
        fs.readFile(compPath, "utf8", (err, compData) => {
            if (err) {
                res.writeHead(500);
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(compData);
        });
    } else if (req.url === '/index.json') {
        // index.json 파일 읽기
        fs.readFile(JSONPath, "utf8", (err, jsonData) => {
            if (err) {
                res.writeHead(500);
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonData);
        });
    } else {
        // 404 Not Found
        res.writeHead(404);
        res.end("Not Found");
    }
});

// 서버 시작
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});