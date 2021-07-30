//process.stdout.write("hola mundo");//funcion para imprmir con el objeto
// proscess y write




/*var nombre;
process.stdout.write("Dime tu nombre ");
process.stdin.on('data', function(data){
    nombre=data.toString().trim();
    process.stdout.write(`Hola ${nombre}!`);
    process.exit();

}); */

/*   //echo por mi corre xd
var pre =['tu nombre cuate?', 'tu edad cuate?','tu lenguaje favorito?'];
var resp=[];

process.stdout.write(`${pre.length.toString().trim()} tamaño  vector preguntas \n `);
process.stdout.write(`${resp.length.toString().trim()} tamaño vector respuestas \n`);

function preguntar(i){                  //echo por mi xD corre
process.stdout.write(pre[i].toString());
process.stdin.on('data',function(data){
resp[i]=data.toString();
i++;
      if(pre.length>i) { preguntar(i);}else{mostrarresp();   process.exit();}                             
});       
 }

 preguntar(0);

 function mostrarresp(){
for (c = 0; c < resp.length; c++) {
    process.stdout.write(resp[c]+" ");
    }
    process.stdout.write(resp.length.toString());

}*/

var preguntas=['cual tu nombre','cual tu edad', 'cual lenguaje favorito'];
var respuestas=[];

function pregunta(i){
    process.stdout.write(preguntas[i]); //funcion para imprimir preguntas del arreglo

}


process.stdin.on('data', function(data){//'data' almacena el dato y la que pide es function


respuestas.push(data.toString().trim()); //metemos en array respuestas

if(respuestas.length<preguntas.length){
pregunta(respuestas.length);

}else{

    process.exit();
}

});
pregunta(0);