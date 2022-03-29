const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') {

        res.end('Home Page');
    } else if (req.url === '/login') {
        res.end('Login Api');
    } else if (req.url === '/register') {
        res.end('Register Api');
    } else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 Page Is does not exist</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port number  127.0.0.1:8000 OR localhost:8000");
});



