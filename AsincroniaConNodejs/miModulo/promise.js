const dividir=(num1,num2)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(parseInt(num2)===0){
                rej('No se puede dividir entre cero 0...');
            }else{
                const result=num1/num2;
                res(result);
            }
            
        }, 3000);
    });
};

module.exports = {
    dividir
}