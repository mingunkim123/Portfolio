const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 3000);
const backendBase = process.env.BACKEND_API_BASE || "http://localhost:8000";
const publicDir = path.join(__dirname, "public");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const sendJson = (res, statusCode, data) => {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
};

const serveFile = (res, pathname) => {
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const normalized = path.normalize(relativePath);

  if (normalized.startsWith("..") || path.isAbsolute(normalized)) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  const fullPath = path.join(publicDir, normalized);

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      sendJson(res, 404, { error: "Not found" });
      return;
    }

    const ext = path.extname(fullPath).toLowerCase();
    const type = mimeTypes[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(content);
  });
};

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    sendJson(res, 400, { error: "Bad request" });
    return;
  }

  const [pathname] = req.url.split("?");

  if (pathname === "/api/cv") {
    try {
      const response = await fetch(`${backendBase}/api/cv/`);
      if (!response.ok) {
        sendJson(res, response.status, {
          error: `Backend request failed with status ${response.status}`,
        });
        return;
      }

      const data = await response.json();
      sendJson(res, 200, data);
      return;
    } catch (error) {
      sendJson(res, 502, {
        error: `Cannot reach backend at ${backendBase}/api/cv/`,
        detail: error.message,
      });
      return;
    }
  }

  serveFile(res, pathname);
});

server.listen(port, () => {
  console.log(`CV frontend running on http://localhost:${port}`);
  console.log(`Proxying CV API from ${backendBase}/api/cv/`);
});
