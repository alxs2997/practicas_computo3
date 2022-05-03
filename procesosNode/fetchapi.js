const fetch = require('node-fetch');
const fs = require('fs');
/*
fetch('https://restcountries.com/v2/all')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })*/

    async function getContries() {
        try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        let ContriesList = "";
        data.forEach(country=> {
            ContriesList += `${country['name']}`;
        });
        //crear archivo
        fs.writeFile('countries.csv', ContriesList, (error) =>{
            if(error){
                console.log(error);
                return;
            }
            console.log('se ha creado un archivo');
        })
        //console.log(data)
        }catch(error){
            console.log(error)
        }
        
    }

    getContries();