const fs = require('fs'); 

const crearArchivo = async (base,listar=false,hasta = 10) =>{

    try {
        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            let mul = base * index;
            salida+= `${base} * ${index} = ${mul} \n`;
        }
        if(listar){
            console.log(salida);
        }
        fs.writeFile('./salida/tabla-'+base+'.txt',salida,(err)=>{
            if(err) throw err;
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}