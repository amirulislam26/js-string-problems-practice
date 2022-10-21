const userName = 'blackPink';
const userInput = 'blackPinK';
const myCity = 'Dhaka';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(myCity.toLocaleLowerCase());

if (userName.toLowerCase() === userInput.toUpperCase()){
    console.log('valid user')
}
else{
    console.log('invalid user');
}