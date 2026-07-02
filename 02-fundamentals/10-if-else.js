/*
    Estructuras de Control: if - else

    Uso básico para bifurcaciones lógicas simples.
    Es ideal y eficiente cuando solo tenemos dos caminos posibles.
*/
const a = 5;

if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

/*
    if - else if - else

    Funciona bien para 3 o 4 condiciones, pero escala muy mal.
    Si tuviéramos que validar los 7 días de la semana (o 50 códigos de error), 
    el código se volvería verboso, difícil de leer y propenso a errores.
*/
const today = new Date();
const day = today.getDay(); // 0: Domingo, 1: Lunes, 2: Martes....

if ( day === 0 ) {
    console.log('Domingo');
} else if ( day === 1 ) {
    console.log('Lunes');
} else {
    console.log('No es Domingo ni Lunes');
}

/*
    Patrón de Diccionario (Object Literal Lookup) 🔥

    Esta es la alternativa limpia y de alto rendimiento a un 'switch' gigante 
    o a múltiples 'if-else'. 
    
    ¿Por qué es mejor?
    En lugar de hacer que el procesador evalúe condiciones una por una, 
    JavaScript accede directamente a la llave en memoria de forma instantánea. 
    Es código más limpio, más rápido y 100% escalable.
*/
const getTextDayByNumber = (numberDay) => {
    const days = {
        0: 'Domingo',
        1: 'Lunes',
        2: 'Martes',
        3: 'Miércoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sábado',
    };

    /* Programación Defensiva:
        Si pasamos un número que no existe (ej. 10), days[10] devolverá 'undefined'.
        Usamos el operador lógico OR (||) para capturar ese error y devolver 
        un valor por defecto seguro.
    */
    return days[numberDay] || 'Día no válido';
}

console.log(getTextDayByNumber(4)); 
console.log(getTextDayByNumber(10)); // Imprimirá: 'Día no válido'