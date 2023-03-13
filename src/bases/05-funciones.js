//FUNCIONES TRADICIONALES EN JS
const saludo= function saludar(nombre, edad){
    return `Hola soy ${nombre} y tengo ${edad} años`;
}

const respuestaSaludo= saludo("Alicia", 24);

console.log(respuestaSaludo);

//FUNCIONES DE FLECHA
const saludo2 =  (nombre, edad) => {
    return `Hola soy ${nombre} y tengo ${edad} años`;
}
const respSaludo2= saludo2('Anahi', 24);
console.log(respSaludo2);