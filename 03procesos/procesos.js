//console.log(process.argv);// devuelve un arreglo que dice de donde se ejecuta
//se ejecuta donde esta instalado el node y el archivo



// crearemos una aplicacion para mapear estos argumentos devuelve numero de posicion de tal argumento
function param(p){

    var index = process.argv.indexOf(p);
    //console.log(index);
    return process.argv[index+1];


}

var nombre= param('--nombre'); //obtenemos el array con el nombre +1
var edad=param('--edad');//obtenemos el array con edad +1

console.log(`Tu nombre es ${nombre}, y  tienes ${edad}, años `);//concatenamos con template y mostramos

// 1) para ejecutar esta funcion en la consola 
//D:\ProyectosAlucard\CursoNodeJs\03procesos>node procesos --nombre "jorge" --edad 27
// y nos devuelve 2 indicando que esta en la 0,1,2 posicion el parametro --nombre recordads que es un arreglo

