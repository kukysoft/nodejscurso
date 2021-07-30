/*
//primer ejemplo
const events = require('events');
const emitter= new events.EventEmitter();

emitter.on('eventoCustom',(mensaje,estatus)=>{
console.log(`${mensaje}:${estatus} 1er ejemplo`);

});


emitter.emit('eventoCustom','mensaje cargado con exito',200);*/

//2do ejemplo con heredacion


const eventEmitter=require('events').EventEmitter;
const util = require ('util');

var Persona = function(nombre){

    this.nombre=nombre;
}
util.inherits(Persona, eventEmitter);


let persona = new Persona('Bob');

//console.log(`me llamo ${persona.nombre}`);

persona.on('hablar',(mensaje)=>{
console.log(`${persona.nombre}:${mensaje}`);

});

persona.emit('hablar','hoy es un gran dia');







/*
emitter.on('eventoCustom',(mensaje,estatus)=>{

console.log(`${estatus}:${mensaje}`);

});

emitter.emit('eventoCustom','Mensaje cargado con exito',200);*/