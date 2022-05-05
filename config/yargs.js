var colors = require('colors');
const param = require('yargs')
    .option('b',{ alias: 'base',type: 'number', demandOption: true, describe:'Base a multiplicar'})
    .check((argv,options) =>{if(isNaN(argv.b)){throw 'La base debe ser un número'.red + ' [ ejemeplo : -b 2 ]'.blue}return true})
    .option('l',{alias: 'lista',type: 'boolean', describe:'listar contenido generado',default:false})
    .option('h',{alias: 'hasta',type: 'number', describe:'hasta que numero se quiere multiplicar',default:10})
    .check((argv,options) =>{if(isNaN(argv.h)){throw 'hasta debe ser un número'.red + ' [ ejemeplo : -h 2 ]'.blue}
    else if(argv.h < 1){throw 'hasta debe ser un número mayor o igual 1'.red + ' [ ejemeplo : -h 2 ]'.blue} return true})
    .argv;
module.exports = param;