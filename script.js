let arraynumero = [];
let numero = 0;
do {
    numero = parseFloat(prompt('Escribe el numero'));
    if (!isNaN(numero) && numero >= 0) {
        arraynumero.push(numero)
    }
} while (!isNaN(numero) && numero >= 0);

console.log(arraynumero);

let sumaArray = arraynumero.reduce((a, va) => a + va, 0);
let media = sumaArray / arraynumero.length
console.log(sumaArray);
console.log(media);