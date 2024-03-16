const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

// the second is an options obj
// http module is a readableStream
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

// http response is a writeable stream
const writeableStream = fs.createWriteStream("./file2.txt");

// These streams allow us to work with chunks of data rather than large amounts of data all at once
// readableStream.on('data', chunk => {
//     console.log(chunk)
//     writeableStream.write(chunk)
// })

readableStream.pipe(writeableStream);

// chaining with pipe
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
