function sum(){
    var n1 = require('readline').value({
        input: process.stdin
    });
    n1.question("ingrese primer número? ", n1); 
    var n2 = require('readline').value({
        input: process.stdin
    });
    n2.question("ingrese segundo número? ", n2); 
    var suma = parseInt(`${n1}`) + parseInt(`${n2}`);
}
console.log("El resultado es: ", +sum);