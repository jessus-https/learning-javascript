/* ==========================================
   TIPO PRIMITIVO: BOOLEAN
========================================== */
/*
    Un booleano es el tipo de dato más simple: true (verdadero) o false (falso).
    Sin embargo, en JavaScript, CUALQUIER valor puede ser evaluado en un 
    contexto booleano (como dentro de un 'if'). A esto se le conoce como 
    valores Truthy y Falsy.

    VALORES FALSY (Solo existen estos 7 en todo el lenguaje):
    - false
    - 0
    - -0
    - null
    - undefined
    - NaN (Not a Number)
    - '' o "" o `` (Cadenas de texto vacías)

    VALORES TRUTHY:
    Absolutamente todo lo que no esté en la lista anterior se considera true.
    ¡Incluso un arreglo vacío [] o un objeto vacío {} son Truthy!
*/

/* ==========================================
   EL PELIGRO DEL OBJETO BOOLEAN (Trampa de entrevista)
========================================== */
/*
    Cualquier objeto, incluido un objeto de tipo Boolean cuyo valor 
    interno sea false, se evalúa como true al pasar por un condicional. 
    Esto sucede porque el objeto en sí mismo ya existe en la memoria.
*/

// ❌ MALA PRÁCTICA: Crear booleanos como objetos
const x = new Boolean(false);

if (x) {
    console.log('Este código SÍ se ejecuta porque x es un objeto (Truthy)');
}

/*
    Este comportamiento engañoso NO se aplica a los booleanos primitivos.
    Los primitivos sí respetan su valor real sin envolturas de objetos.
*/

// ✅ BUENA PRÁCTICA: Usar booleanos primitivos
const y = false;

if (y) {
    // Este código NO se ejecuta
}

/* ==========================================
   TRUCO PRO: CASTEANDO A BOOLEAN CON !!
========================================== */
/*
    Si tienes un dato de origen desconocido y quieres saber rápidamente 
    si es Truthy o Falsy (convirtiéndolo en un booleano primitivo estricto), 
    el estándar en la industria es usar la doble negación (!!).
*/
console.log(!!"");      // false (es un valor falsy)
console.log(!!null);    // false (es un valor falsy)
console.log(!!"hola");  // true  (es un valor truthy)
console.log(!![]);      // true  (es un valor truthy)