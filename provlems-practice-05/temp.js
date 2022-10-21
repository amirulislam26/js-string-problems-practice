let frist = 5;
let second = 7;
console.log(frist, second);

//this is wrong approach...............
// frist = second;
// second = frist;

// approach......01.......==
const temp = frist;
frist = second;
second = temp;
console.log(frist, second);

// approach......01.......==Destructuring

[ frist, second ] = [ second,  frist ];
console.log(frist, second);