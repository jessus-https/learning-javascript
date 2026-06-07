/* ==========================================
   1. DECLARACIÓN E INICIALIZACIÓN
========================================== */
/*
    La sentencia 'var' declara una variable. Es opcional asignarle un valor 
    inicial. Si no se le proporciona uno, su valor por defecto será 'undefined'.
*/
var username;

// Imprime { username: undefined }
console.log({ username });

var language = 'Spanish';
console.log({ language });


/* ==========================================
   2. REDECLARACIÓN
========================================== */
/*
    Si redeclaramos una variable con 'var', esta no perderá su valor actual. 
    En el siguiente ejemplo, declaramos 'age' con el valor 24. Si volvemos 
    a redeclararla sin asignarle un nuevo valor, el motor de JavaScript ignora 
    la declaración y mantiene el valor de 24 en lugar de sobreescribirlo 
    con 'undefined'.
*/
var age = 24;
console.log({ age }); // 24

var age;
console.log({ age }); // Sigue siendo 24


/* ==========================================
   3. EL ÁMBITO GLOBAL Y EL OBJETO WINDOW
========================================== */
/*
    REGLA CRÍTICA: Cuando declaramos una variable con 'var' en el ámbito global 
    (fuera de cualquier función), esta se añade automáticamente como una 
    propiedad del objeto global ('window' en los navegadores). 
    
    Además, si asignamos un valor a una variable sin declararla previamente 
    (ej. miVariable = 10), esta también se añadirá al objeto global, incluso 
    si la asignación ocurre dentro de una función.
    
    Este comportamiento de 'var' representa un problema grave de seguridad 
    y estabilidad, ya que podríamos sobreescribir propiedades nativas del 
    navegador de forma accidental.
*/


/* ==========================================
   4. CONFIGURABILIDAD Y ELIMINACIÓN
========================================== */
/*
    - Las variables declaradas (con var/let/const) son propiedades 
      NO configurables de su contexto de ejecución, por lo que no se 
      pueden eliminar usando 'delete'.
    - Las variables NO declaradas (implícitas) son configurables, 
      por lo que sí pueden ser eliminadas.
*/
var a = 1; // Declarada (No configurable)
b = 2;     // No declarada (Configurable y global por defecto)

console.log('Antes de borrarlo: ', window.b); // 2

/*
    Nota sobre el Modo Estricto ("use strict"):
    - Usar 'delete' en 'a' lanzaría un TypeError, o fallaría silenciosamente 
      en modo normal.
    - Asignar 'b = 2' sin declararla previamente lanzaría un ReferenceError 
      inmediato antes de llegar a esta línea.
*/
delete window.a; // Retorna false, 'a' no se elimina
delete window.b; // Retorna true, 'b' es eliminada

console.log('Después de borrarlo: ', window.b); // undefined


/* ==========================================
   5. HOISTING (ELEVACIÓN DE VARIABLES)
========================================== */
/*
    El motor de JavaScript procesa las declaraciones de variables antes de 
    ejecutar cualquier otra línea de código. Esto significa que declarar una 
    variable en cualquier parte del bloque es equivalente a declararla al inicio 
    del mismo. 

    A este comportamiento se le llama "Hoisting" (elevación), ya que 
    conceptualmente la declaración se mueve a la cima de su ámbito (ya sea 
    global o de función).

    Es fundamental entender que el Hoisting SOLO eleva la declaración, 
    NO la inicialización. El valor de la variable seguirá siendo 'undefined' 
    hasta que la ejecución del código alcance la línea exacta de la asignación.

    Por esta razón, la buena práctica dicta declarar todas las variables al 
    inicio de su ámbito, para hacer evidente cuáles pertenecen al ámbito local 
    y evitar comportamientos inesperados.
*/