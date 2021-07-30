//const { removeAllListeners } = require('process');
var readline = require('readline');           
var util= require ('util');
var rl=readline.createInterface(process.stdin,process.stdout);// para crear interface entre stdin y stdout

/* este comando de readline create interface usa el metodo o modulo rl.question(query,callback).*/
/*perminte solicitar un input y escribir un output
 Uso de ejemplo:

rl.question('What is your favorite food? ', (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
});*/
/*
console.log(`1er ejemplo----------`);
rl.question('CUAL ES TU NOMBRE',(respuesta)=>{
console.log(`Hola,${respuesta}!`);         
rl.close();
});// esta es la primera forma de pedir datos
*/
console.log(`2do Ejemplo de leer datos----------`);

var persona={
nombre:' ',comentarios: []
};

rl.question('Cual es tu nombre?',(respuesta)=>{
persona.nombre=respuesta;

rl.setPrompt('Dime un comentario:');
rl.prompt();
//creamos un ciclo para el arreglo y llenar full comentarios
//para ello crearemos un evento de mapeo 'rl.on' cada que escribamos en  el teclado
// funciona cuando se apreta enter
/* rl.on('line', (input) => {
    console.log(`Received: ${input}`);
}); */

});


//este ciclo para llenar el vector comentarios input variable mediante enters
rl.on('line', (input)=>{
    
    //para terminar el ciclo o evento escribir salir
    if(input.trim()==='salir'){
        //formatear un string y mostrarlo como si fuera un json
        var mensaje=util.format("Te llamas %s y esto me dijiste: %j", persona.nombre, persona.comentarios);
        console.log(mensaje);
        process.exit();
    }

//llenando vector comentarios con push
    persona.comentarios.push(input.trim());
    rl.setPrompt('Dime un comentario:');
    rl.prompt();
    } );