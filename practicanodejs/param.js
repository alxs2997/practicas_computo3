const nombre = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

nombre.question("Quién desea entrar? ", nombre =>{
    console.log(`Bienvenido a Node.js ${nombre}`)
})