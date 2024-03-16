const fs = require("node:fs");

// uses buffer for default encode
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

// Async version of the method: this follows an error-first callback pattern
// This doesn't block the code, and while reading the file the code resumes execution
// After the readFile is complete, the callback func is called
// if there was no error, the error = null and the data is set
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

fs.writeFileSync("./greet.txt", "Hello all from Amirhossein!");

fs.writeFile(
  "./greet.txt",
  " Hello guys, I am writing in Async manner",
  { flag: "a" },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Write success");
    }
  }
);
