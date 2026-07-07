const weekendDays = [0, 6];
const day = 1;
const currentHour = 10;

let hourOpening = (weekendDays.includes(day)) ? 9 : 11;
let message = (currentHour >= hourOpening) ? 'Esta abierto' : `Está cerrado, hoy abrimos a las ${hourOpening}`;

console.log({hourOpening, message});