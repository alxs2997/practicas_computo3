/*
const fs = require('fs');

let data = fs.readFileSync('./Data/personas.json');
//console.log(data);

let personas = JSON.parse(data).personas;
console.log(personas);
console.log(typeof(personas));*/

/*
*require es una función sincrona y se llama solo una vez.  
*/ 

/*let jsonData=require('./Data/personas.json');
console.log(jsonData);
console.log(typeof(jsonData));*/

const fs = require('fs');

let data = {
    "cursos": [{
        "codigo": "T023316",
        "nombre": "Matemática"
    }, {
        "codigo": "T023556",
        "nombre": "Sociológia"
    },{
        "codigo": "T028832",
        "nombre": "Programación"
    }]
};

let jsonData=JSON.stringify(data);
console.log(jsonData);
console.log(typeof(jsonData));

fs.writeFile('./Data/cursosUGB.json', jsonData, (error)=>{
    if (error){
        console.log(`Error: ${ error }`);
    }else{
        console.log('archivo generado correctamente');
    }
});
