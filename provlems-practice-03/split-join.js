const loves = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomoy bolte pari ni. kala kala sada sada rong gomece shda kala hoici ami mon pagela bonon to kalee';
console.log(loves);
const parts = loves.split(' ');
const sentens = loves.split('.');
const carts = loves.split('');
console.log(parts);
console.log(sentens);
console.log(carts);

const partial = loves.slice(5, 10);
console.log(partial);

const partial2 = loves.substring(5, 10);
console.log(partial2);


const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    ' bosonto kale tomoy bolte pari ni',
    'kala kala sada sada rong gomece shda kala',
    ' hoici ami mon pagela bonon to kalee'
];

const newSong = lines.join('. ');
console.log(newSong)