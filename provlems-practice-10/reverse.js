function reverseString(text){
    // for(let i = 0; i < text.length; i++){}
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const myString = 'I Am A Good Boy';
const reversed = reverseString(myString);
console.log('reversed output :',reversed)