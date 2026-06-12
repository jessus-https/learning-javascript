/*
    Una función es un conjunto de código reutilizable que está
    destinada a resolver una tarea en específico.

    Las funciones tradicionales gozan del "Hoisting" (Izamiento), 
    lo que permite ejecutarlas antes de declararlas en el código.
    El peligro de sobreescritura ocurre si aún usamos la obsoleta 
    palabra reservada 'var'.
*/
function greeting() {
    console.log('Hello World!!!');
}

/*
    Función Anónima (Function Expression).
    Al asignarla a una constante (const), bloqueamos por completo 
    la posibilidad de que la función sea sobreescrita accidentalmente.

    A una función se le pueden colocar parámetros, que no son más 
    que variables locales con las que la función puede trabajar.
*/
const greeting2 = function(name) {
    console.log(`Bienvenido ${ name }`);
}

/*
    Solamente las funciones tradicionales tienen una propiedad
    nativa llamada "arguments", esta propiedad devuelve un objeto 
    (parecido a un array) con todos los argumentos enviados.
*/
function viewArguments() {
    console.log(arguments);
}

/*
    ⭐ MEJOR PRÁCTICA (Parámetro Rest):
    Como 'arguments' no es un arreglo real (no tiene map, filter, etc.), 
    hoy en día se utiliza el operador Rest (...args) para capturar 
    múltiples parámetros en un Arreglo 100% real.
*/
function viewArgumentsModern(...args) {
    console.log(args); // Esto SÍ es un arreglo real
}

// Ejecuciones
greeting(); // No le pasamos argumento porque la original no lo recibe
greeting2('Colette');

viewArguments(1, 2, 3, 4, 5, 6);
viewArgumentsModern(1, 2, 3, 4, 5, 6);

/*
    Funciones de Flecha (Arrow Functions / Lambda Functions).
    Fueron introducidas en ES6. Su principal diferencia técnica 
    es que NO modifican el valor de 'this' y NO tienen el objeto 'arguments'.
*/
const lambdaFunction = () => {
    console.log('lambdaFunction');
}

lambdaFunction();

/*
    ⭐ MEJOR PRÁCTICA (Retorno Implícito):
    Si una función de flecha solo tiene una línea de código que 
    retorna un valor, podemos omitir las llaves {} y el 'return'.
*/
const sumar = (a, b) => a + b;

console.log('Suma implícita:', sumar(10, 5));