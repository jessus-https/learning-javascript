/* ==========================================
   ARREGLOS (ARRAYS)
========================================== */
/*
    Son un objeto global ('typeof' devuelve 'object') que funciona como 
    una lista de información. Contienen un grupo de elementos ordenados 
    por un índice (empezando desde el 0).

    Aunque JavaScript permite mezclar tipos, la buena práctica en 
    arquitecturas escalables es que la información dentro del arreglo 
    sea del mismo tipo de dato (homogénea).
*/

// ❌ Forma poco recomendada: Crea 10 "espacios vacíos", los cuales 
// son ignorados por métodos como forEach() o map().
// const arr = new Array(10);

// ✅ Sintaxis Literal (La más recomendada)
let games = ['Fortnite', 'Minecraft'];
console.log({ games });

// Obtener elementos por su posición (índice)
console.log(games[0]); // 'Fortnite'


/* ==========================================
   ARREGLOS HETEROGÉNEOS (MULTITIPO)
========================================== */
/*
    Al ser dinámicos, un arreglo en JavaScript puede almacenar cualquier 
    cosa en memoria: desde primitivos hasta expresiones calculadas, 
    funciones anónimas, objetos y otros arreglos (matrices).
*/
const itemsRandom = [
    true,                                     // 0: Boolean
    123,                                      // 1: Number
    'jessus.https',                           // 2: String
    2 + 2,                                    // 3: Expresión (evalúa a 4)
    () => console.log('Soy una función.'),    // 4: Función anónima
    { name: 'jessus.https' },                 // 5: Objeto literal
    ['X', 'Megaman', 'Zero', 'Dr. Light']     // 6: Arreglo anidado
];

console.log({ itemsRandom });

// Ejecutando la función almacenada en el índice 4
itemsRandom[4](); 

// Accediendo a un elemento dentro del arreglo anidado (Matriz 2D)
console.log(itemsRandom[6][3]); // 'Dr. Light'