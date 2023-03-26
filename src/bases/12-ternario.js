//let mensaje = '';
const activo = true;
//if(activo){
//    mensaje= 'HOLA MUNDO';
//} else{
  //  mensaje= 'INACTIVO';
//}

//console.log(mensaje);



const mensaje = activo ? 'HOLA' : 'INACTIVO';

console.log(mensaje);

const operacion =(num1, num2)=>{
    const result = num1>=num2 ? num1+num2: num1-num2;// : num1-num2;
    console.log(result);
}

operacion(54,5);