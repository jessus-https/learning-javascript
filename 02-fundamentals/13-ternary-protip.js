const getNumberMayor = (a, b) => (a > b) ? a : b;
const hasMembership = (isMember) => isMember ? '2 Dólares' : '10 Dólares';

console.log(getNumberMayor(20, 30));
console.log(hasMembership(false));

const isFriend = true;
const friends = [
    'Lucas',
    'Fernando',
    'Eduardo',
    (isFriend) ? 'Angel' : 'Rogelio',
];

console.log(friends);

const note = 100;
const degree = note >= 95 ? 'A+' :
               note >= 90 ? 'A'  :
               note >= 85 ? 'B+' :
               note >= 80 ? 'B'  :
               note >= 75 ? 'C+' :
               note >= 70 ? 'C'  : 'F';

console.log({degree});