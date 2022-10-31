function reverseWorlds (str){
    const words = str.split('');
    const reversed = [];
    for(let i = words.length -1; i>=0; i--){
        const element = words[i];
        reversed.push(element)

    }
    const result = reversed.join(' ');
    return result
}
const myString = 'I am a good boy'
const outPut = reverseWorlds(myString);
console.log('l am a coder :', outPut);