const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomoy bolte pari ni. kala kala sada sada rong gomece shda kala hoici ami mon pagela bonon to kalee';

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes('searciString');

const lyricsLowerCase = lyrics.toLowerCase();

// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
console.log(doesExistOneLine);

//---------------------=-------------------
//indexOf

console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));
//.....................

if(lyrics.indexOf("sada") !== -1){
    console.log('exists inside the string');
}
else{
    console.log('cannot find it');
}

// startswith
console.log(lyrics.startsWith('Tumi'));

// endswith
const fileName = 'mybook.svg';
const otherFile = 'mypick.pdf';

fileName.endsWith('.pdf');