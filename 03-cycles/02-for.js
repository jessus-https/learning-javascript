const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.log('--------------- For tradicional -----------------');

/*
    For lo usamos cuando sabemos cuantas veces se debe ejecutar
    un bucle, esta compuesto de 3 partes, la primera parte es 
    donde se inicializa la variable, la segunda parte es la
    condición y la tercera el incrementador.
*/

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.log('------------------For in -------------------');

/*
    for in es similar al for de arriba, la variable i
    es el index actual del bucle
*/
for (let i in heroes) {
    console.log(heroes[i]);
}

console.log('-------------For of-------------------');

/*
    Se ocupa para interar en arrays y objetos
*/
for (let heroe of heroes) {
    console.log(heroe);
}