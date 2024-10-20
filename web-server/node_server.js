const http = require ("http");
const hostname = "127.0.0.1";
const port = 3002;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("/")
    } else if(req.url === '/page2') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("/page2")
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Not Found")
    }
});

server.listen(port, hostname, () => {
    console.log(`server is listening at http://${hostname}:${port}`);
});