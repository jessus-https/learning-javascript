
/*
    Polyfill

    Es código que provee el funcionamiento de una nueva característica de
    JavaScript (ES6), en versiones viejas como ES5.
*/

/*
    Una variable es un contenedor de información que apunta a un lugar en memoria.

    Dicha información puede cambiar en el futuro
*/

/*
    var: Era la forma tradicional de declarar variables. Sufre de hoisting, lo que
    significa que su declaración se eleva al inicio del código y se inicializa
    automáticamente como undefined. Esto permitía usarlas antes de su declaración
    real, causando muchos bugs lógicos difíciles de rastrear. Se pueden reasignar y
    redeclarar en el mismo ámbito.
*/

var username = 'jessus.https';

console.log({username});

/*
    let: Nació para solucionar los problemas de var. Aunque también sufre de hoisting,
    la variable entra en la "Zona Muerta Temporal" (TDZ) y no se inicializa.
    Si intentas usarla antes de su línea de declaración, JavaScript lanzará una
    excepción para protegerte. Permite reasignar su valor, pero no redeclararla en el
    mismo ámbito.
*/

let age = 24;

console.log({age});

/*
    const: Se debe declarar e inicializar al mismo tiempo. Al igual que let, respeta
    la TDZ. Su característica principal es que no permite reasignar la referencia de
    la variable. Su uso es el más recomendado por defecto, no porque sea más ligera,
    sino porque hace que el código sea predecible y seguro. (Nota: Si la constante es
    un Objeto o Array, sus propiedades internas sí pueden ser modificadas).
*/

const email = 'jessus.https@gmail.com';

console.log({email});