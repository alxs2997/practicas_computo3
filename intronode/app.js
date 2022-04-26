//process.argv.forEach((index,val) => {
  //  console.log(`${index}:${val}`);
//});
//console.log("PROCESS: ", process);
//console.log("Título del proceso",process.title);
//console.log('so', process.platform);
//console.log('version node', process.version);

/*const name = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

name.question("cuál es su nombre? ", name =>{
    console.log(`Bienvenido ${name}`)
})*/

/*function sum(a,b){
    return a+b;
}*/
const operation = require("./function.js");

//declariación de variables, var let consts
const result = operation.sum(5,7);
console.log("El resultado es: ", result);