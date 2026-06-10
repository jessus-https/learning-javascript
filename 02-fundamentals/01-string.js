/*
    El objeto String se utiliza para representar y manipular una
    secuencia de caracteres.
*/

const string1 = "Eso es un string usando comillas dobles";
const string2 = 'Esto es un string usando comillas sencillas';

/*
    Esta última forma especifica una Plantilla literal: con esta forma
    puedes interpolar expresiones.
*/

const string3 = `Esto es un string usando backticks: ${ 2 + 2 }`;
const string4 = new String('Creando un string mediante un objeto');

// TODO: Métodos

/*
    El método charAt() de String devuelve en un nuevo String el carácter
    UTF-16 de una cadena.

    Si no se proporciona un indice por defecto tomara 0, es importante
    mencionar que si se proporciona un indice fuera del rango de la cadena
    de texto JavaScript devolvera un string vacío.
*/
const oneLetter = string4.charAt(0);

console.log({ string1, string2, string3, string4, oneLetter });

/*
    Aun que tambien se puede acceder a una letra tratando el string de manera
    similar a un arreglo. Es importante recordar que cuando se usan corchetes
    no se puede modificar estas propiedades, es decir, no se puede intentar
    eliminar o asignar un valor.
*/

const letter = 'Red'[0];

console.log({letter});

/*
    Comparar Strings

    En esta función se utilizan mayúsculas en lugar de minúsculas, debido
    a problemas con ciertas conversiones de caracteres UTF-8.
*/

function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

console.log(isEqual('hOla', 'HOLA'));

/*
   Las cadenas literales (denotadas por comillas simples o dobles) y cadenas
   devueltas de llamadas a String en un contexto que no es de constructor
   (es decir, llamado sin usar la palabra clave new) son cadenas primitivas.
   JavaScript automáticamente convierte las primitivas en objetos String, por
   lo que es posible utilizar métodos del objeto String en cadenas primitivas.
   En contextos donde se va a invocar a un método en una cadena primitiva o se
   produce una búsqueda de propiedad, JavaScript ajustará automáticamente la
   cadena primitiva y llamará al método o realizará la búsqueda de la propiedad.
*/

const text1 = "Texto primitivo";

/*
    Crea un nuevo objeto String. Realiza la conversión de tipos cuando se llama
    como función, en lugar de como constructor, lo cual suele ser más útil.
*/
const text2 = String(text1);
const textObject = new String(text1);

console.log(typeof text1); // registra string
console.log(typeof text2); // registra string
console.log(typeof textObject); // registra object 

/*
    Las primitivas de String y los objetos String también dan diferente resultado
    cuando se usa eval(). Las primitivas pasadas a eval se tratan como código fuente;
    Los objetos String se tratan como todos los demás objetos, devuelven el objeto.
    Por ejemplo:
*/

let s1 = "2 + 2"; // crea una string primitiva
let s2 = new String("2 + 2"); // crea un objeto String
console.log(eval(s1)); // devuelve el número 4
console.log(eval(s2)); // devuelve la cadena "2 + 2"

// Cadenas literales largas

const textLong = 'Las primitivas de String y los objetos String también dan diferente \
    resultado cuando se usa eval(). Las primitivas pasadas a eval se tratan como \
    código fuente; Los objetos String se tratan como todos los demás objetos, devuelven \
    el objeto. Por ejemplo:'

console.log({textLong});

/*
    El String.fromCharCode() método estático que devuelve una cadena creada mediante
    el uso de una secuencia de valores Unicode especificada.

    Debido a que fromCharCode es un método estático de String, usted siempre lo usará
    como String.fromCharCode(), en vez de un método de un objeto String creado por usted.
*/

const textUnicode = String.fromCharCode(932, 917, 913, 924, 927)

console.log({textUnicode}); //'ΤΕΑΜΟ'