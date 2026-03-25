const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5500;
const ROOT = process.cwd();

const MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".md": "text/markdown; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".pdf": "application/pdf"
};

function send(res, statusCode, headers, body) {
    res.writeHead(statusCode, headers);
    res.end(body);
}

const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    let filePath = path.join(ROOT, urlPath);

    if (!filePath.startsWith(ROOT)) {
        send(res, 403, { "Content-Type": "text/plain; charset=utf-8" }, "Forbidden");
        return;
    }

    fs.stat(filePath, (statErr, stat) => {
        if (statErr) {
            send(res, 404, { "Content-Type": "text/plain; charset=utf-8" }, "Not Found");
            return;
        }

        if (stat.isDirectory()) {
            filePath = path.join(filePath, "index.html");
        }

        fs.readFile(filePath, (readErr, data) => {
            if (readErr) {
                send(res, 404, { "Content-Type": "text/plain; charset=utf-8" }, "Not Found");
                return;
            }

            const ext = path.extname(filePath).toLowerCase();
            const contentType = MIME_TYPES[ext] || "application/octet-stream";
            send(res, 200, { "Content-Type": contentType }, data);
        });
    });
});

server.listen(PORT, () => {
    console.log(`Local server running at http://localhost:${PORT}`);
});
