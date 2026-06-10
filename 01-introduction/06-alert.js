/* ==========================================
   MÉTODOS NATIVOS DEL NAVEGADOR (WINDOW)
========================================== */
/*
    Es importante saber que alert, prompt y confirm forman
    parte del objeto global 'window'. Al ser propios del navegador, 
    no funcionarán en entornos de servidor como Node.js.
*/

/*
    1. ALERT (Alerta)
    Muestra un aviso nativo del navegador. Debemos tener en cuenta
    que este método es BLOQUEANTE: paraliza la ejecución del resto 
    del código de la página hasta que el usuario le da a "Aceptar".
*/
alert('Bienvenido pa');

/*
    2. PROMPT (Entrada de datos)
    Le pide al usuario que ingrese un valor de texto. 
    - El primer parámetro es el mensaje o descripción.
    - El segundo parámetro (opcional) es el valor por defecto en la caja de texto.
    
    Retornos:
    - Si el usuario escribe algo y acepta, devuelve ese texto (String).
    - Si el usuario acepta sin escribir nada, devuelve un String vacío ("").
    - Si el usuario cancela la acción, devuelve 'null'.
*/
const name = prompt('¿Cuál es tu nombre?', 'Anónimo');

/*
    3. CONFIRM (Confirmación)
    Sirve para preguntarle al usuario si está seguro de realizar
    una acción. Devuelve estrictamente un valor booleano:
    
    - Si el usuario elige "Aceptar", devuelve 'true'.
    - Si el usuario elige "Cancelar", devuelve 'false'.
*/
const isDelete = confirm('¿Está seguro de que desea eliminar esto?');