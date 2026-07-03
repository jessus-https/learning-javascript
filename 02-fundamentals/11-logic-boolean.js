const returnValueTrue = () => {
    console.log('Regresa true');
    return true;
}

const returnValueFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('NOT (!) o la Negación');

/*
    NOT (!)
    Invierte el valor booleano. Si es falso lo hace verdadero y viceversa.
    
    Tip Pro: Se usa mucho la doble negación (!!) en el backend para forzar
    la conversión de cualquier tipo de dato extraño a un booleano estricto (true/false).
*/
console.log(true);
console.log(!true);
console.log(!false);

console.warn('Operador AND (&&)');

/*
    AND (&&) - Evaluación de Cortocircuito (Short-circuit)
    
    REGLA DE ORO: Evalúa de izquierda a derecha. Si el primer valor es "Falsy" 
    (false, null, undefined, 0, "", NaN), el motor de JavaScript se detiene 
    inmediatamente y ya ni siquiera voltea a ver el de la derecha.
    
    Si el primer valor es "Truthy", SIEMPRE evalúa y retorna el segundo valor.
*/
console.log(true && true); // true
console.log(returnValueFalse() && returnValueTrue()); // false (se detiene en el primero)

/*
    Ejecución Condicional sin usar 'if'
    
    Este es un patrón avanzadísimo. Si 'isAdmin' es verdadero, se ejecuta 
    y devuelve el resultado de 'getUsers()'. Si es falso, devuelve 'false' y 
    no gasta memoria ejecutando la función. 
*/
const getUsers = () => {
    return [{ name: 'Pablo' }, { name: 'Juan' }]
}

const isAdmin = false;
const listUsers = isAdmin && getUsers();

console.log(listUsers);

console.warn('Operador OR (||)');

/*
    OR (||) - Evaluación de Cortocircuito
    
    Retorna el PRIMER valor "Truthy" que encuentre.
    Corregido: Si el valor de la izquierda es verdadero, el motor se detiene 
    y ya no evalúa el de la DERECHA.

    Justo aquí entra lo que vimos hace rato de que "un espacio en blanco es true". 
    El operador OR evalúa valores Truthy/Falsy, por lo que un string con un 
    espacio en blanco (" ") pasaría como verdadero.
*/
console.log(true || false); // true
console.log(false || false); // false

/*
    Asignación de valores por defecto (Fallback)
    
    Si el valor de la izquierda no existe (es Falsy), le asignamos el 
    valor de la derecha como salvavidas.
*/
const user = {name: undefined};
const username = user.name || 'No tiene nombre'

console.log({username});

console.log('Múltiples condiciones', true || false || true);

console.log('====================================');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

/*
    Asignaciones complejas con cortocircuito:
*/
// Retorna el segundo valor porque el primero es Truthy
const a1 = true && 'Hola Mundo'; 
// 'Hola' es Truthy, así que pasa directo a retornar 'Mundo'
const a2 = 'Hola' && 'Mundo'; 
// Brinca todos los valores Falsy y se queda con el primer Truthy que encuentra
const a3 = soyFalso || soyNull || soyUndefined || 'Ya no soy falso' 

console.log({ a1, a2, a3 });

/*
    Regla de Clean Code sobre los IFs:
    Si un 'if' tiene más de 3 condiciones unidas (ej. a && b && c || d), 
    la carga cognitiva es altísima y se considera un "Code Smell" (mal olor de código). 
    Lo ideal es extraer esa lógica a una variable descriptiva (const isUserValid = ...) 
    o usar Retornos Tempranos (Early Returns).
*/