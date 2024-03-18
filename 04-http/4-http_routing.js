const http = require("node:http");

const server = http.createServer((req, res) => {
    // req.method gives access to GET POST PUT DELETE
    // which we can use to route different requests
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Welcome to the home page</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>This is the about page.</h1>");
  } else if (req.url === "/api") {
    const obj = {
      name: "bruce",
      lastName: "wayne",
      ability: "rich guy",
    };
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404);
    res.end("page not found!");
  }
});

server.listen(3000, () => console.log("Listening on port 3000"));
