const http = require("node:http");

const server = http.createServer((req, res) => {
  const superHero = {
    name: "bruce",
    family: "wayne",
  };
  // for sending json, we have to set the content-type to json
  // and stringify our object
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
