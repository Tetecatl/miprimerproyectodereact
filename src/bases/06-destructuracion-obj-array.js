const persona = {
    nombre: 'Alicia',
    apellido: 'Flores',
    edad: 24,
    sexo: 'F'
}
  
  const {} = persona;
  
  const retornaPersona = ({nombre:name, apellido}) => {
    return `mi nombre es:  ${name} ${apellido}`;
  }
  
  const r = retornaPersona(persona);
  console.log(r);