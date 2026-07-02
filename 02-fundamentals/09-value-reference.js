/*
    Valor - Referencia

    Los valores primitivos (string, number, boolean, null, undefined, symbol) se pasan por VALOR.
    Es decir, cuando asignamos o pasamos una variable primitiva a una función,
    estamos copiando el valor exacto. Modificar la nueva variable no afecta a la original
    porque ocupan espacios totalmente independientes en memoria.
*/
let a = 10;
let b = a;

console.log({ a, b });

/*
    Referencia

    Con los objetos y arreglos funciona diferente, se pasan por REFERENCIA.
    Es decir, al asignar un objeto a otra variable, no copiamos sus datos, 
    sino que le estamos pasando la "dirección" (el espacio en memoria) del original.
    Si modificamos las propiedades de la nueva variable, también modificamos el original.
*/
let juan = { name: 'Juan' };

/*
    Operador Spread (...)

    El operador Spread sirve para expandir o esparcir las propiedades de un objeto o arreglo.
    Además, es la forma moderna de "romper la referencia", ya que crea una instancia nueva.

    IMPORTANTE (Copia Superficial / Shallow Copy): 
    Spread solo rompe la referencia en el PRIMER NIVEL. Si el objeto tuviera otro 
    objeto anidado (ej. address: { city: 'NY' }), ese objeto interno seguiría 
    compartiendo la referencia original.
*/
let ana = { ...juan };

/*
    Solo afecta al objeto 'ana' ya que se rompió la referencia principal con spread.
*/
ana.name = 'Ana';

console.log({juan, ana});

/*
    Spread en parámetros de función

    Al desestructurar el parámetro con spread ({ ...person }), estamos creando una 
    copia local del objeto justo al momento de recibirlo en la función, 
    protegiendo así el objeto original que está afuera.
*/
const changeName = ({...person}) => {
    person.name = 'golang';
    return person;
}

const peter = { name: 'Peter' };
const tony = changeName(peter);

console.log({ peter, tony });

// Arreglos
const fruits = ['Manzana', 'Pera', 'Piña'];

/* 
    Operador Spread en arreglos
    Funciona igual que en los objetos, crea un arreglo nuevo en memoria.
    Nota: Otra alternativa muy común en código legacy para hacer esto es fruits.slice()
*/
console.time('Spread');
const otherFruits = [...fruits];
console.timeEnd('Spread');

otherFruits.push('Mango');

console.log({fruits, otherFruits});