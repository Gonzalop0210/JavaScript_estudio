let firtsNumber = 0;
let secondNumber = 0;

do {
    firtsNumber = prompt('Escribe el primer número');
} while (isNaN(parseFloat(firtsNumber)) || firtsNumber < 0);

do {
    secondNumber = prompt('Escribe el segundo número');
} while (isNaN(parseFloat(secondNumber)) || secondNumber < 0);

let mensaje = (firtsNumber > secondNumber) ? `El número ${firtsNumber} es mayor y el número ${secondNumber} es menor` : `El número ${secondNumber} es mayor y el número ${firtsNumber} es menor`;
if (firtsNumber === secondNumber) {
    mensaje = 'Los números son iguales';
}

console.log(mensaje);