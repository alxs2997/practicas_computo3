//resolve => (Resuelto)/ reject =>(rechazado)
/*const miPromesa=new Promise((resolve,reject)=>{
    //resolve('Exito en la llamada de la promesa');
    reject('ocurrió un error fatal en el servidor y morirás');
});

miPromesa.then((RESULTADO)=>{
    console.log(RESULTADO);
}, (error)=>{
    console.log(`Error:${error}`);
});*/

const moduloPormesa=require('./miModulo/promise.js');
const miPromesa=moduloPormesa.dividir(15,9);

miPromesa.then((data)=>{
    console.log(data);
}, (error) => {
    console.log(`Error: ${error}`);
});