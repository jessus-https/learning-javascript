/*
Los comentarios son líneas de código que el intérprete de 
JavaScript ignorará a la hora de ejecutarlo.
*/

console.log('Se que seré un gran Ingeniero de Software...');

/*
    Todo: Variable

    TODO: Me quede en 5 min del video y falta mejorar comentarios

    Una variable es un contenedor de información que apunta a un 
    lugar en memoria.

    Dicha información puede cambiar en el futuro
*/

/*
    Antes de const y let la unica forma de declarar variables era usando
    la palabra reservada "var" pero esta forma traía muchos problemas
    y era propenso a causar errores, uno de los principales errores
    es el famoso "hoisting" que su función es elevar todas las variables
    al inicio del código y es por eso que podemos usar esa variable declarada con
    var incluso antes de haber sido creada y el compilador no lanza una excepción
    si no en su lugar imprime o devuelve undefined esto evidentemente causa
    muchos problemas.

    Las variables declaradas con var se pueden declarar e inicializar
    en una misma e incluso reasignarle valores.
*/

var username = 'jessus.https';

/*
    Las variables let nacieron como una solución a la problematica de
    var, una de las reglas principales es que no puedes usar la
    variable declarada con let antes de declararla ya que lanzará
    una excepción.

    A diferencia de las constantes las variables declaradas con let
    si pueden ser reasignadas a cualquier tipo de dato si así lo deseamos.
*/

let age = 24;

/*
    Las variables constantes se deben declarar e iniciarlizar en un mismo paso,
    además, una vez creada y declarada no se le puede reasignar valores.

    Tambíen es recomendado que usemos variables constantes lo mas que podamos
    ya que son un poco mas ligeras que la variables declaras con let y var.

    Ademas de que evita que reasignemos valores a las variables de manera
    accidental ya que lanzará una excepción.
*/
const email = 'jessus.https@gmail.com';

