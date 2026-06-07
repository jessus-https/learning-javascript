/* ==========================================
   DECLARACIÓN CON LET Y ÁMBITO DE BLOQUE
========================================== */
/*
    La instrucción 'let' declara una variable de alcance local con ámbito 
    de bloque (block scope). Esto significa que la variable solo existe y 
    es accesible dentro de las llaves { } donde fue creada.

    Opcionalmente, puede ser inicializada con algún valor al momento 
    de su declaración. 
    
    Regla de oro: A diferencia de 'var', 'let' NO permite redeclarar 
    una variable con el mismo nombre dentro de un mismo bloque, lo que 
    evita sobrescribir datos accidentalmente.
*/

// 1. Declaración sin inicializar (por defecto es undefined)
let name;

// 2. Asignación diferida
name = 'jessus.https';

// 3. Declaración e inicialización en un solo paso
let age = 24;

/* ==========================================
   EJEMPLO DE ÁMBITO DE BLOQUE EN ACCIÓN
========================================== */
if (age >= 18) {
    // Esta variable 'role' nace aquí y está atrapada dentro de este 'if'
    let role = 'Software Engineer';
    console.log(name + ' tiene el rol de: ' + role);
}

// Si intentamos acceder a 'role' fuera del bloque 'if', el intérprete 
// lanzará una excepción: ReferenceError: role is not defined.
// console.log(role);