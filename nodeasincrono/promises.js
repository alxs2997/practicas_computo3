const promise = new Promise((resolve, reject) => {
    setTimeout(() =>resolve('se resolvio la promesa'), 2000);
});

//consumir la promesa
promise.then((response)=>{
    console.log(response);
})