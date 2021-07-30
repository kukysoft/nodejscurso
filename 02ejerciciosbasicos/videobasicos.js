var a=5;
var b=10;


console.log("Impreso Concatenado--->");
console.log("El resultado es: "+(a+b));
console.log("-----");
console.log("Ahora Imprimos con templates `` con esta comilla invertida");

console.log(`El resultado es ${a==b}`);
console.log("----------");
console.log("FUNCIONES PROPIAS DE NODE.JS");
console.log("__dirname");
console.log(__dirname);

console.log("__filename");
console.log(__filename);

var path = require("path");
console.log(path.basename(__filename));
