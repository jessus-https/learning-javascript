/*
    El objeto String se utiliza para representar y manipular una
    secuencia de caracteres.
*/

const string1 = "Eso es un string usando comillas dobles";
const string2 = 'Esto es un string usando comillas sencillas';

/*
    Esta última forma especifica una Plantilla literal: con esta forma
    puedes interpolar expresiones.
*/

const string3 = `Esto es un string usando backticks: ${ 2 + 2 }`;
const string4 = new String('Creando un string mediante un objeto');

// TODO: Métodos

/*
    El método charAt() de String devuelve en un nuevo String el carácter
    UTF-16 de una cadena.

    Si no se proporciona un indice por defecto tomara 0, es importante
    mencionar que si se proporciona un indice fuera del rango de la cadena
    de texto JavaScript devolvera un string vacío.
*/
const oneLetter = string4.charAt(0);

console.log({ string1, string2, string3, string4, oneLetter });

/*
    Aun que tambien se puede acceder a una letra tratando el string de manera
    similar a un arreglo. Es importante recordar que cuando se usan corchetes
    no se puede modificar estas propiedades, es decir, no se puede intentar
    eliminar o asignar un valor.
*/

const letter = 'Red'[0];

console.log({letter});

/*
    Comparar Strings

    En esta función se utilizan mayúsculas en lugar de minúsculas, debido
    a problemas con ciertas conversiones de caracteres UTF-8.
*/

function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

console.log(isEqual('hOla', 'HOLA'));

/*
   Las cadenas literales (denotadas por comillas simples o dobles) y cadenas
   devueltas de llamadas a String en un contexto que no es de constructor
   (es decir, llamado sin usar la palabra clave new) son cadenas primitivas.
   JavaScript automáticamente convierte las primitivas en objetos String, por
   lo que es posible utilizar métodos del objeto String en cadenas primitivas.
   En contextos donde se va a invocar a un método en una cadena primitiva o se
   produce una búsqueda de propiedad, JavaScript ajustará automáticamente la
   cadena primitiva y llamará al método o realizará la búsqueda de la propiedad.
*/

const text1 = "Texto primitivo";

/*
    Crea un nuevo objeto String. Realiza la conversión de tipos cuando se llama
    como función, en lugar de como constructor, lo cual suele ser más útil.
*/
const text2 = String(text1);
const textObject = new String(text1);

console.log(typeof text1); // registra string
console.log(typeof text2); // registra string
console.log(typeof textObject); // registra object 

/*
    Las primitivas de String y los objetos String también dan diferente resultado
    cuando se usa eval(). Las primitivas pasadas a eval se tratan como código fuente;
    Los objetos String se tratan como todos los demás objetos, devuelven el objeto.
    Por ejemplo:
*/

let s1 = "2 + 2"; // crea una string primitiva
let s2 = new String("2 + 2"); // crea un objeto String
console.log(eval(s1)); // devuelve el número 4
console.log(eval(s2)); // devuelve la cadena "2 + 2"

// Cadenas literales largas

const textLong = 'Las primitivas de String y los objetos String también dan diferente \
    resultado cuando se usa eval(). Las primitivas pasadas a eval se tratan como \
    código fuente; Los objetos String se tratan como todos los demás objetos, devuelven \
    el objeto. Por ejemplo:'

console.log({textLong});

/*
    El String.fromCharCode() método estático que devuelve una cadena creada mediante
    el uso de una secuencia de valores Unicode especificada.

    Debido a que fromCharCode es un método estático de String, usted siempre lo usará
    como String.fromCharCode(), en vez de un método de un objeto String creado por usted.

    Nota: En el desarrollo web tradicional (CRUDs, APIs REST) casi nunca se utilizan.
    Su caso de uso principal es en operaciones de bajo nivel, manipulación de archivos
    binarios, buffers, criptografía o comunicación directa con hardware/IoT, donde
    recibimos datos crudos (números) y necesitamos traducirlos a texto humano.
*/

const textUnicode = String.fromCharCode(932, 917, 913, 924, 927)

console.log({textUnicode}); //'ΤΕΑΜΟ'

// El método moderno ('fromCodePoint') lee los 32 bits perfectamente.
console.log(String.fromCodePoint(0x1F680));     // Imprime: '🚀' (Bien)

/*
    La paradoja de los Primitivos y los Métodos (Autoboxing)

    Hace unos mensajes establecimos que los primitivos (como un String) no
    son objetos y, por definición, no deberían tener métodos ni propiedades.

    Entonces, si let name = 'jessus'; es un simple primitivo, ¿cómo es
    posible que podamos ejecutar name.toUpperCase()?

    Esto sucede gracias a un truco interno del motor de JavaScript llamado
    Autoboxing (Coerción implícita). Cuando intentas usar un método en un
    primitivo, JavaScript en fracciones de milisegundo hace lo siguiente:

    - Envuelve tu texto primitivo en un objeto temporal new String('jessus').

    - Ejecuta el método asociado (toUpperCase).

    - Te devuelve el resultado.

    - Destruye el objeto temporal inmediatamente y deja tu variable como
    un primitivo limpio.

    ¡Es magia oscura del motor V8 funcionando a tu favor!
*/

/*
    String.raw se utiliza junto con comillas invertidas (String.raw`texto`)
    para obtener la versión "literal y en crudo" de una cadena, desactivando
    la interpretación de caracteres de escape como \n o \t. Es la herramienta
    definitiva contra la corrupción de rutas (paths) y expresiones regulares.
*/

// ❌ El Problema
const ruta = 'C:\Users\node_modules';

console.log(ruta);

// ✅ SOLUCIÓN AL PROBLEMA DE RUTAS (Fíjate que usamos `` en lugar de () )
const rutaLimpia = String.raw`C:\Users\node_modules`;

console.log(rutaLimpia);
// Imprime exactamente: C:\Users\node_modules


// ✅ IGNORANDO SALTOS DE LÍNEA OCULTOS
const textoNormal = "Hola\nChicos";
const textoCrudo = String.raw`Hola\nChicos`;

console.log('Normal: \n', textoNormal);
// Normal: 
// Hola
// Chicos

console.log('Crudo: ', textoCrudo);
// Crudo: Hola\nChicos

/*
    La propiedad length devuelve cuantos caracteres
    tiene un string.
*/

const description = 'Hola me llamo Jesús';

console.log(description.length);

/*
    El método charAt devuelve un caracter de un string
    mediante un indice, si no se le proporciona un indice
    por defecto toma la pocision 0, si se le proporciona
    un indice que esta fuera del rango devolvera un string
    vacio
*/
console.log(description.charAt(0));

/*
    El charCodeAt() método devuelve un número indicando el
    valor Unicode del carácter en el índice proporcionado.

    Si se manda un indice fuera del rango del length del
    string pues devolvera NaN

    Este es un método viejo
*/
const textCharcode = '🚀 Desplegando la aplicación';

console.log('Valor unicode: ', textCharcode.charCodeAt(0));

/*
    El problema histórico: charCodeAt() vs codePointAt()

    Al igual que en el caso anterior, JavaScript tenía un método viejo
    llamado charCodeAt(). Este método funcionaba perfectamente en los
    90s cuando todos los caracteres pesaban 16 bits
    (ocupaban solo 1 "espacio" en memoria).

    Pero luego llegaron los emojis y los símbolos asiáticos complejos,
    los cuales pesan 32 bits. Como JavaScript maneja los strings
    internamente en bloques de 16 bits (UTF-16), un solo emoji como
    el cohete 🚀 en realidad ocupa 2 espacios en un string de JavaScript,
    no 1. A esto se le llama un par subrogado (surrogate pair).

    Si usas el método viejo (charCodeAt) en un emoji, el motor solo lee
    los primeros 16 bits, corta el emoji por la mitad y te devuelve un
    número roto o basura.

    Si usas el método moderno (codePointAt), el motor es inteligente:
    detecta que es un carácter de 32 bits, lee ambas partes juntas y
    te devuelve el número Unicode real y completo.
*/

// 1. Caracteres normales (16 bits)
const texto = 'ABC';

// Le pedimos el código numérico de la letra en el índice 0 ('A')
console.log(texto.codePointAt(0)); // Imprime: 65

// Le pedimos el código numérico de la letra en el índice 1 ('B')
console.log(texto.codePointAt(1)); // Imprime: 66


// 2. El terreno peligroso: Emojis (32 bits)
const emoji = '🚀';

// ¡Ojo aquí! Aunque solo ves 1 emoji, para JS su 'length' es 2.
console.log(emoji.length); // Imprime: 2

// Usando el método viejo (Falla y te da una mitad inservible)
console.log(emoji.charCodeAt(0));  // Imprime: 55357 (Basura)

// Usando el método moderno (Funciona y te da el código real)
console.log(emoji.codePointAt(0)); // Imprime: 128640 (El número real de 🚀)

/*
    ¿Para qué sirve esto en el mundo real?
    
    - Sanitización y Validación Estricta: Si estás construyendo un
    sistema donde los usuarios no pueden ingresar caracteres
    especiales (por ejemplo, validar que un nombre de usuario solo
    tenga letras y números, y bloquear emojis o letras rusas), puedes
    iterar sobre el string y revisar si sus códigos Unicode
    (codePointAt()) caen fuera del rango permitido
    (como el rango del alfabeto latino estándar: 65 al 122).

    - Algoritmos de Criptografía o Hashing: Si necesitas tomar una
    contraseña o un token y crear un hash personalizado, a menudo el
    primer paso es convertir el texto en una matriz de números crudos.
    codePointAt() es la herramienta perfecta para hacer esa extracción
    sin corromper los datos si el usuario metió caracteres raros.

    - Ordenamiento Personalizado: A veces el .sort() por defecto de
    JavaScript no ordena correctamente alfabetos con acentos o caracteres
    de otros idiomas. Extraer su punto de código te permite crear lógicas
    matemáticas para ordenarlos a mano de forma perfecta.
*/

/*
    El método includes() determina si una cadena de texto puede ser
    encontrada dentro de otra cadena de texto, devolviendo true o false
    según corresponda.
*/

const textIncludes = 'JavaScript es el mejor lenguaje de programación';
console.log(
    `Incluye la palabra JavaScript?: ${ textIncludes.includes('JavaScript') ? 'Sí' : 'No' }`
);

/*
    El método endsWith() comprueba si un string finaliza con una cadena
    en especifico, es sensible en mayuscula, el primer argumento
    es la cadena a buscar y el segundo argumento es el length del string
    por defecto una str.length.
*/
console.log(
    `Finaliza con 'programación'?: ${ textIncludes.endsWith('programación') ? 'Sí' : 'No' }`
);

/*
    indexOf devuelve el indice de la primer coincidencia de una palabra
    en un string, es sensible a mayuscula, devuelve -1 si no lo encuentra,
    el primer parametro es la palabra a buscar y el segundo argumento
    le indica desde que indice empezara a buscar pero este argumento es opcional
*/
console.log(`Indice de la palabra 'JavaScript': ${ textIncludes.indexOf('JavaScript') }`);

/*
    Me quede en lastIndexOf 
*/