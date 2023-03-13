const nombre= 'Alicia';
const apellidos= 'Flores';
const nombreCompleto= `${nombre} ${apellidos}`;
console.log(nombreCompleto);

function getSaludo(nombre, apellidos){
    return "Hola"+ ' '+nombre+' '+apellidos;
}

console.log(`Este es un texto: ${getSaludo(nombre, apellidos)}`);