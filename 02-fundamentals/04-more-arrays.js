const games = [ 'Fornite', 'Brawl Start', 'Clash Royale', 'Clash Of Clans', 'Minecraft' ];

/*
    El length es una propiedad de los arrays que nos permite saber
    el largo de un arreglo, es decir, cuántos ítems contiene.
*/
const lengthOfGames = games.length;

const firstItem = games[0];

/*
    Cuando un arreglo es dinámico, es decir, no sabemos cuántos
    elementos contiene y deseamos obtener siempre el último
    ítem, podemos utilizar la propiedad length - 1. Es
    importante restarle 1 porque hay que recordar que los
    arreglos comienzan desde 0.
*/
const lastItemClassic = games[ lengthOfGames - 1 ];

/*
    ⭐ MEJOR PRÁCTICA (ES2022+):
    El método .at() nos permite usar índices negativos para buscar 
    de atrás hacia adelante de forma mucho más limpia.
*/
const lastItemModern = games.at(-1);

console.log({ lengthOfGames, firstItem, lastItemClassic, lastItemModern });

games.forEach((value, index, array) => {
    console.log({value, index, array});
});

/*
    El método push inserta un nuevo elemento al final del
    arreglo y además devuelve el nuevo length. (MUTA EL ARREGLO ORIGINAL)
*/
const newLength = games.push('Candy Crush');

/*
    ⭐ MEJOR PRÁCTICA (Inmutabilidad):
    Esta es la segunda forma para imitar lo que hace push utilizando
    el Spread Operator (...). Considero que esto es mucho mejor ya que 
    NO mutamos el arreglo original, más bien copiamos todo el arreglo y
    además añadimos un nuevo ítem.
*/
const alternativeToPush = [ ...games, 'Candy Crush 2' ];

console.log({games, newLength});
console.log({alternativeToPush});

/*
    Este método inserta un nuevo ítem en la posición 0
    del arreglo y devuelve el nuevo length. (MUTA EL ARREGLO ORIGINAL)
*/
const insertStartNewItem = games.unshift('Free Fire');

/*
    ⭐ MEJOR PRÁCTICA (Inmutabilidad):
    Esta es la segunda forma de imitar unshift sin mutar el arreglo.
*/
const alternativeToUnshift = [ 'Forza Horizon 5', ...games ];

console.log({ insertStartNewItem, games });
console.log({alternativeToUnshift});

/*
    El método pop elimina el último elemento de un arreglo,
    además, retorna el elemento eliminado. Si el arreglo
    llega a estar vacío regresará undefined y este
    no será modificado. (MUTA EL ARREGLO ORIGINAL)
*/
const deleteLastGame = games.pop();

console.log({deleteLastGame});

/*
    ⭐ MEJOR PRÁCTICA PARA ELIMINAR (Inmutabilidad):
    Para eliminar un elemento sin usar los mutativos pop() o splice(), 
    el método ideal es filter(). Este crea un nuevo arreglo excluyendo 
    la condición que le indiquemos.
*/
const arrayWithoutClash = games.filter(game => game !== 'Clash Royale');

console.log({arrayWithoutClash});

/*
    El método splice permite eliminar ítems de un array mediante
    índices. (MUTA EL ARREGLO ORIGINAL)
    - 1er parámetro: Indica a partir de qué índice comenzará.
    - 2do parámetro: Indica cuántos ítems eliminará (si no se proporciona, elimina el resto. Si es 0, no elimina nada).
    - 3er parámetro (opcional): Ítem nuevo a insertar en esa posición.
    Retorna los elementos eliminados.
*/

console.log({games});
const newItemByIndex = games.splice(1, 0, 'Geometry Dash'); // Inserta
const deleteGameByIndex = games.splice(1, 2); // Elimina 2 elementos a partir del índice 1

console.log({deleteGameByIndex});

/*
    Este método nos ayuda a saber en qué índice se encuentra
    un elemento en específico pasándole el ítem como argumento.
    ⚠️ IMPORTANTE: Este método es estrictamente sensible a 
    mayúsculas y minúsculas (Case Sensitive). Cuando no encuentra 
    el elemento devuelve -1.
*/

// Retornará -1 porque en el arreglo se guardó como 'Minecraft' (M mayúscula)
const minecraftIndex = games.indexOf('minecraft');

console.log({minecraftIndex});