const buffer = new Buffer.from("Mamoosh")

// memory on buffers are limited, so not all the chars are saved
buffer.write("codeevolution")

console.log(buffer.toString())
// showing in hex format
console.log(buffer)
// showing as string set
console.log(buffer.toJSON())