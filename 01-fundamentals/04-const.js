/* ==========================================
   DECLARACIÓN CON CONST Y ÁMBITO DE BLOQUE
========================================== */
/*
    Las variables declaradas con 'const' presentan un ámbito de bloque 
    (block scope), exactamente igual que las variables definidas con 'let'.
    
    La particularidad principal de 'const' es que crea una referencia de 
    solo lectura. Esto significa que:
    1. El valor de una constante NO puede cambiarse a través de la reasignación.
    2. Las constantes NO se pueden redeclarar en el mismo ámbito.
    3. Deben inicializarse obligatoriamente en la misma línea donde se declaran.
*/
const language = 'Spanish';

// Intentar reasignar lanzaría: TypeError: Assignment to constant variable.
// language = 'English'; 


/* ==========================================
   MUTABILIDAD VS REASIGNACIÓN (OBJETOS Y ARRAYS)
========================================== */
/*
    Aunque la regla dice que el valor de una constante no puede cambiar, 
    hay una excepción crítica con los tipos de datos de referencia (Objetos 
    y Arrays).
    
    'const' protege la REFERENCIA (la dirección en memoria), pero NO congela 
    el contenido. Por lo tanto, el objeto en sí mismo SÍ puede sufrir cambios 
    (mutar), modificando, añadiendo o eliminando sus propiedades internas.
*/

const user = { name: 'jessus.https', email: null };

// ✅ Mutación PERMITIDA: Modificando una propiedad interna del objeto.
user.email = 'jessus.https@gmail.com';
console.log(user); // { name: 'jessus.https', email: 'jessus.https@gmail.com' }

// ❌ Reasignación PROHIBIDA: Intentar apuntar la constante a un nuevo objeto en memoria.
// user = { name: 'admin', email: 'admin@gmail.com' }; // Lanzaría TypeError