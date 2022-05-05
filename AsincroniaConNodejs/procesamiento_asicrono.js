//ejemplo para comprender el procesamiento sincrono y asincrono con node

//comportamiento asincrono que por defecto ya lo tiene.(no respeta el tiempo)
const fs=require('fs');

//procesamiento A-sincrono.
/*console.log("inicio");
fs.readFile('dataAlexis.txt', 'utf-8',(error,data)=>{
    if(!error){
        console.log(data);
    }else{
        console.log(`ERROR: ${error}`);
    }
});
console.log("fin");*/

//procesamiento Sincrono.
//ya se estará respetando el tiempo de ejecución a través de una función sincrona...
console.log("inicio");
const miData=fs.readFileSync('dataAlexis.txt', 'utf-8');
console.log(miData);
console.log("fin");