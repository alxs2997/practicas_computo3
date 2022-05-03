function first(){
    console.log("primera función");
}
function second(callback){
    setTimeout(()=>{//función anónima
        console.log("segunda función");
        callback();
    }, 0);   
}
function third(){
    console.log("tercera función");
}
//llamado a la función
first();
second(third);
//third();