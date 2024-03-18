// how to create a node server with the http module
const http = require("node:http");

// the callback here gets executed on every request
// @param req: information about the incoming request
// @param res: send back a response to the client
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello world!");
});

server.listen(3000, () => console.log("Server running on port 3000."));
