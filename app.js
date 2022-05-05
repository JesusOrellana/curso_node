const { Console } = require('console');
const param = require('./config/yargs')  
const {crearArchivo} = require('./controlers/multiplicar');

crearArchivo(param.b,param.l,param.h)
    .then(msg => console.log(`Archivo tabla-${param.b} creado correctamente`))
    .catch(err => console.log(err)); 
