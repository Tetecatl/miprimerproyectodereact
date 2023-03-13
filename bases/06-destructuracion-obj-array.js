const persona = {
    nombre: 'Alicia',
    apellido: 'Flores',
    edad: 24,
    sexo: 'F'
}

const {} = persona;

const retornaPersona = ({nombre, apellido}) => {
    return `mi nombre es:  ${nombre} ${apellido}`;
}

const r = retornaPersona(persona);
console.log(r);