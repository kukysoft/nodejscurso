var path = require('path'); //importo el modulo path 
//  que hace referencia manejo de url
console.log(path.basename(__filename));
console.log(`direccion del archivo xD ${__filename} `);
/*El path.basename()método devuelve la última parte de a path, 
similar al basenamecomando de Unix .
 Los separadores de directorios finales se ignoran, consulte path.sep.
path.basename('/foo/bar/baz/asdf/quux.html');
 Returns: 'quux.html'
path.basename('/foo/bar/baz/asdf/quux.html', '.html');
 Returns: 'quux'
  */
//--------------
//para saber la documentacion 
//https://nodejs.org/dist/latest-v16.x/docs/api/

console.log(path.join(__dirname, 'www','img','home','uploads',' '));
//El path.join()método une todos los pathsegmentos dados 
//utilizando el separador específico de la plataforma
// como delimitador y luego normaliza la ruta resultante como si fuera una direccion


console.log(`siguente ejemplo---------util.log`);

var util = require('util');

util.log("hola");
/* El util.log()método imprime el dado stringa stdoutcon una marca de tiempo incluida.

const util = require('util');
util.log('Timestamped message.'); 

return 21 Jul 16:54:44 - hola ta en desuso*/

console.log(`siguente ejemplo---------util.format`);

var nombre= "jorge";
var edad=30;
var texto=util.format("hola %s, tienes %d", nombre,edad);
console.log(texto);

console.log(`siguente ejemplo---------estadisticas del sistema`);
//v8 es el engine o el motor que le da vida por el cual esta echo node js

var v8= require('v8');

/*Devuelve un objeto con las siguientes propiedades:

code_and_metadata_size <número>
bytecode_and_metadata_size <número>
external_script_source_size <número>
{
  code_and_metadata_size: 212208,
  bytecode_and_metadata_size: 161368,
  external_script_source_size: 1410794
}*/

console.log(v8.getHeapStatistics());




