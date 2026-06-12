const character = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    coordinates: {
        lat: 34.034,
        lng: -118.70,
    },
    suits: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
    address: {
        zip: '10880, 90265',
        location: 'Malibu, California',
    },
};

console.log(character);
console.log('Nombre: ', character.name);
console.log('Nombre: ', character['name']);
console.log('Edad: ', character.age);

/*
    ⭐ MEJOR PRÁCTICA (Optional Chaining):
    Agregamos '?.' al acceder a sub-objetos para evitar que 
    la aplicación crashee si 'coordinates' llega a ser undefined.
*/
console.log('Lat: ', character.coordinates?.lat);

console.log('No. Trajes', character.suits.length);

/*
    Utilizando el método moderno .at() para el último elemento
*/
console.log('Último traje: ', character.suits.at(-1));

const alive = 'alive';

// Acceso dinámico a propiedades usando variables
console.log(character[alive]);

/*
    ⭐ MEJOR PRÁCTICA PARA ELIMINAR PROPIEDADES (Inmutabilidad):
    El método 'delete character.age' muta el objeto original.
    La forma moderna de "eliminar" una propiedad es desestructurando
    y usando el operador Rest (...).
*/
const { age, ...characterWithoutAge } = character;
console.log({ characterWithoutAge }); // Muestra a Tony sin la edad, el original intacto

/*
    Devuelve un arreglo de arreglos pequeños con [key, value]
*/
const entriesPares = Object.entries(character);
console.log({entriesPares});

// Agregar propiedad (Muta el objeto original)
character.newKey = true;

/*
    De esta manera hacemos "inmutable" un objeto. Es decir,
    no se podrá eliminar propiedades, ni añadir, ni cambiar
    los valores de los que ya existen.

    ⚠️ IMPORTANTE: Object.freeze congela de forma SUPERFICIAL (Shallow freeze).
    Si tenemos un objeto anidado adentro (como coordinates), 
    a este SÍ se le podrán modificar las propiedades.
*/
Object.freeze(character);

character.money = 10000000; // No hará nada, está congelado
character.coordinates.lat = 999999999999999999; // SÍ se modificará, es un sub-objeto

console.log(character);

/*
    ⭐ MEJOR PRÁCTICA:
    Devuelve un arreglo con las llaves (keys) de un objeto. 
    Object.keys() es el estándar de la industria sobre getOwnPropertyNames().
*/
const properties = Object.keys(character);

/*
    Devuelve solo los valores de un objeto en forma de arreglo
*/
const values = Object.values(character);

console.log({properties, values});