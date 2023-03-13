const persona ={
    nombre: 'Alicia',
    apellidoMaterno: 'Flores',
    apellidoPaterno: 'Tetecatl',
    edad : 24,
    fechaNacimiento : '12/04/1998',
    Origen: 'Puebla'
}

console.log(persona);

console.table(persona);

const persona2 = {
    ...persona
}
persona2.nombre= 'Anahi';

console.log(persona2);
console.table(persona2);