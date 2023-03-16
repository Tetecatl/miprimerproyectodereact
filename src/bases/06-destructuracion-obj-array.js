const persona = {
  nombre: 'Alicia',
  apellido: 'Flores',
  edad: 24,
  sexo: 'F'
}


const returnContext = ({nombre, apellido, colorFavorite}) => {
  return {
    nom: nombre,
    apell: apellido,
    colorFavorite:{
      c1: 'Gris',
      c2: 'Negro',
      c3:'azul'}
  };
}


const {nom, apell, colorFavorite:{c1, c2, c3}} = returnContext(persona);
console.log(nom, apell);
console.log(c1, c2, c3);



const fabrica ={
   anioModelo: 2023,
   modeloAuto: 'Nissan',
   cilindros: 6, 
   puertas: 4,
   capacidad: '8 personas'
}

const retornaAuto = ({anioModelo, modeloAuto, cilindros, latlong}) =>{
    return {
      anioModelo: anioModelo,
      modeloAuto: modeloAuto,
      cilindros:  cilindros,
      color: 'blanco',
      latlong: {
        latitud: 14526,
        longitud: 1558666,
        prueba3: {
          prueba: 1825555,
          prueba2: 2555622,
          prueba3: 1222554
        }
      }
    };

}

const {anioModelo, modeloAuto,latlong:{latitud, prueba3:{prueba3}}} = retornaAuto(fabrica)
console.log(`auto del anio ${anioModelo} super modelo ${modeloAuto} que recorre ${latitud} km`);
console.log(`estoy haciendo prueba de destructuracion con objetos anidados ${prueba3}`);

