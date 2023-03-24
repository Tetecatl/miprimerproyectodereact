import { getHeroeById } from './bases/08-Import-Export-Funciones-comunes-arreglos-find-filter';

//const promesa =new Promise( (resolve, reject)=>{
  //  console.log('Hello');
    //setTimeout(()=>{
        //const heroe=getHeroeById(2);
       // console.log(heroe);
       // reject(console.log('No se encontro el heroe'));
        //console.log('2 segundos despues');
        //resolve();
    //}, 2000 );
//});

//promesa.then((heroe)=>{
 //   console.log(`Heroe: ${heroe}`);
    //console.log('Then de la promesa');
  //  }
//).catch(err=> console.warn(err));

const getHeroeByIdAsync = (id) =>{
        return new Promise( (resolve, reject)=>{
            console.log('Hello');
            const heroe=getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }
            else{
                reject(console.log('No se encontro el heroe'));
            }
        });
}

getHeroeByIdAsync(1)
    .then(console.log) //manda el primer argunmento que recibe then
    .catch(console.warn);