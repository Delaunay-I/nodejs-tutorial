const path = require("node:path");

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__filename));
console.log(path.parse(__dirname));
// path.format gives the path string within an object
console.log(path.format(path.parse(__dirname)));

console.log(path.isAbsolute("./data.json"));

console.log(path.join("/salam", "file.xms"));

// makes it abs path - review docs for details
console.log(path.resolve("folder", "text.lkq"));
