/* ==========================================
   TIPO PRIMITIVO: NULL
========================================== */
/*
    'null' representa la ausencia de valor de manera INTENCIONAL.
    Es un tipo de dato primitivo que el desarrollador asigna explícitamente 
    para indicar que una variable está vacía.
*/

let value = null;

/*
    COMPORTAMIENTO EN OPERADORES ARITMÉTICOS (Type Coercion)
    Cuando forzamos a JavaScript a usar 'null' en una operación matemática, 
    el motor hace una conversión implícita (Type Casting). 
    Internamente hace Number(null), lo cual da como resultado 0.
*/
console.log(value + 20); // Imprime: 20  (0 + 20)

/* ==========================================
   LA DIFERENCIA CRÍTICA CON UNDEFINED EN MATEMÁTICAS
========================================== */
/*
    A diferencia de null (que se convierte en 0), 'undefined' significa 
    que no hay valor y NO fue intencional. 
    Por lo tanto, si intentamos sumar 'undefined', internamente hace 
    Number(undefined), lo cual devuelve NaN (Not-a-Number).
*/

let noDefinida; // Es undefined por defecto
console.log(noDefinida + 20); // Imprime: NaN (Not-a-Number + 20)