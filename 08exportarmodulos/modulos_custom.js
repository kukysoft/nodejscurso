const persona = require('./libs/persona');//importamos el modulo persona const
let kuky=new persona('kukisito hermoso');//creamos el objeto en base a clase persona

kuky.on('habla',(mensaje)=>{    //creamos el evento habla en base a pablo.on
    
    console.log(`${kuky.nombre}:${mensaje}`);//imprimimos mnombre y mensaje
});

kuky.emit('habla','hoy sera un gran dia');//ejecutamos el evento

//ejemplo 2 que yo hize 

const people = require('./libs/persona');
let many=new people('many feto');


many.on('hablar',(mensaje)=>{    //creamos el evento habla en base a pablo.on
    
    console.log(`${many.nombre}:${mensaje}`);//imprimimos mnombre y mensaje
});

many.emit('hablar','feto gran dia');//ejecutamos el evento