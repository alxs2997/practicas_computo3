function saludo() {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('se ha resuelto la promesa')
        }, 2000)
    })
}

async function mensaje(){
    const mensaje = await saludo();
    console.log('mensaje: ', mensaje);
}

mensaje()