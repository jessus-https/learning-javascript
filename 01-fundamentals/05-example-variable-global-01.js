/* ==========================================
   ÁMBITO DE FUNCIÓN VS GLOBAL Y MÓDULOS
========================================== */

/*
    1. ÁMBITO DE FUNCIÓN (Function Scope)
    Las variables declaradas dentro de una función (con var, let o const) 
    tienen un alcance local estricto. Solo viven y pueden ser consumidas 
    dentro de esa función. Si se intenta acceder a 'localMessage' desde 
    afuera, JavaScript lanzará un ReferenceError.
*/
function hello() {
    var localMessage = 'Mensaje de alcance de función';
}

/*
    2. ÁMBITO GLOBAL (Scripts Clásicos)
    Si ejecutamos este archivo de forma tradicional (ej. un <script> normal 
    en HTML), esta variable 'globalMessage' tiene alcance global. Al estar 
    declarada con 'var', se añade como una propiedad al objeto global 'window'.
    
    Esto significa que cualquier otro archivo de nuestro proyecto que cargue 
    después podrá acceder a 'globalMessage' e incluso sobrescribirla 
    accidentalmente.
*/
var globalMessage = 'Mensaje de alcance global, accesible desde window.';

/*
    3. ÁMBITO DE MÓDULO (El estándar moderno)
    Si este archivo es tratado como un Módulo de ES6 (usando type="module" 
    o en entornos como Node.js/Angular), las reglas cambian:
    
    El archivo crea su propia "burbuja" llamada Module Scope. Aunque declaremos 
    una variable con 'var' en la raíz del archivo, esta NO se añade al objeto 
    'window' y NO puede ser leída por otros archivos. 
    
    Para que otro archivo pueda utilizarla, estamos obligados a exportarla 
    explícitamente:
*/

// export var globalMessage = 'Ahora sí, otro archivo puede importarme';