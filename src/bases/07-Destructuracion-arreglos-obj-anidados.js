const persona= ['goku', 'Vegeta', 'Trons'];

const [, , p3] = persona;

console.log(p3);


const retornaArray = () =>{
  return [
    'ALICIA',
    '1998',
    '24'
  ]
}

const [nombre, , edad] = retornaArray();
console.log(edad);



const uState = (valor)=> {
  return [
    valor, ()=> {console.log('Hola mundo')}
  ]
}


const arr = uState('Alicia');
arr[1]();
console.log(arr);


const uState2 = (valor)=>{
  return[
    valor, ()=>{console.log('Hola Mundo');}
  ]
}

const [nombr, setNombre] = uState2('Alicia');
console.log(nombr);
setNombre();

const prueba3 = ()=>{
  return[
    'Alicia', 
    'Flores', 
    {fechaNacimiento: {dia:12, mes: 'abril', anio: 1998, 
                      lugarNacimiento: { ciudad: 'izucar', estado:'puebla'},
                      sexoNacimiento: ['hombre', 'mujer']
                    }}
  ]
}

const [nom, apellido, 
  {fechaNacimiento: {dia, mes, anio, 
    lugarNacimiento:{ciudad, estado},
    sexoNacimiento:[m, f]
  }}] = prueba3()

console.log(`mi nombre es ${nombre} ${apellido} soy ${f}
 y naci: en ${dia} ${mes} de ${anio} en ${ciudad}`);



