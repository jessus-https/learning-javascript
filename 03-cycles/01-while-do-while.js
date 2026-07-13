const cars = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

/*
    El while se utiliza cuando no se sabe cuantas iteraciones se
    va hacer, la condición siempre debe ser true para que siga en el
    bucle. Primero pregunta si la condicion es verdadera y luego
    ejecuta
*/
while(i < cars.length) {
    console.log(cars[i]);

    i++;
}

let j = 0;

console.log('-------------------------------------------');

// cuando cars[j] es undefined ya no se sigue ejecutando
while(cars[j]) {
    // break rompe el bucle
    if (j === 2) break; 
    if (j === 0) {
        j++;

        continue; // Se salta a la siguiente iteracion
    }

    console.log(cars[j]);

    j++;
}

console.log('--------------Do While----------------');

/*
    El bucle do-while ejecuta el bloque interno por lo menos una vez 
*/

let k = 0;

do {

    k++;
    console.log(k);
} while(k < 10);