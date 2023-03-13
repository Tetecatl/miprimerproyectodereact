//Arreglo Literal
//const arreglo = new Array(100);
//arreglo.push(1);
//console.log(arreglo);

const arreglo = [1,2,3,4];
console.log(arreglo);
//ARREGLO CON SPREAD
const arreglo2 = [...arreglo, 5];
console.log(arreglo2);
console.table(arreglo2);
// ARREGLO CON MAP- crear un nuevo arreglo sobre el que ya existe permitiendo  modificar el nuevo arreglo.
const arreglo3 = arreglo2.map(
    function(numero){
        return numero*2;
    }
);

console.log(arreglo3);
