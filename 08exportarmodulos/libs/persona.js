const eventEmitter=require('events').EventEmitter;//necesario para 
//invocar eventos
const util = require ('util');//necesario para invocar eventos

var Persona = function(nombre){//constructor funcion de clase persona
    this.nombre=nombre;
}

//mio mio mio mio
function people(nombre){
    this.nombre=nombre;
}

util.inherits(Persona, eventEmitter);//herencia d 'require' simplificado
util.inherits(people, eventEmitter);//herencia d 'require' simplificado
module.exports= Persona;//estamos exportando el modulo en base a un objeto

module.exports=people;