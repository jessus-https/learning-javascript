/* ==========================================
   TIPOS DE DATOS PRIMITIVOS
========================================== */
/*
    El tipo de dato describe la naturaleza del valor que contiene 
    una variable.

    Los datos primitivos son aquellos que NO son un objeto (no tienen 
    métodos ni propiedades nativas) y son INMUTABLES (su valor en memoria 
    no se puede modificar, solo reasignar).

    Los 7 Primitivos de JavaScript:
    1. Boolean   - true / false
    2. Null      - Ausencia intencional de cualquier valor.
    3. Undefined - Variable declarada a la que aún no se le asigna un valor.
    4. Number    - Enteros, flotantes, NaN, Infinity.
    5. String    - Una cadena de texto (caracteres).
    6. Symbol    - Valor único e irrepetible.
    7. BigInt    - (ES2020) Números enteros más grandes de lo que 'Number' puede soportar.
*/

let name = 'Peter Parker';
// typeof devuelve el tipo de dato de un valor en formato string
console.log({ name, type: typeof name }); // 'string'

const isMan = true;
console.log({ isMan, type: typeof isMan }); // 'boolean'

const age = 24;
console.log({ age, type: typeof age }); // 'number'

let superPower;
console.log({ superPower, type: typeof superPower }); // 'undefined'

/* ¡LA TRAMPA DE NULL!
    Aunque null es un primitivo, typeof devuelve 'object'. 
    Esto es un bug histórico de los inicios de JavaScript que nunca 
    se corrigió por retrocompatibilidad.
*/
const imNull = null;
console.log({ imNull, type: typeof imNull }); // 'object'

/*
    Los 'Symbol' permiten crear identificadores únicos en JavaScript.
    Aunque tengan la misma descripción, nunca apuntan al mismo espacio.
*/
const symbol1 = Symbol('a');
const symbol2 = Symbol('a');

console.log({ symbol1, type: typeof symbol1 }); // 'symbol'
console.log(symbol1 === symbol2); // false