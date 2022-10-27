function AmrLove(Love){
    let Amirul = Love[0];
    for(let i = 0; i < Love.length; i++){
        const index = i;
        const valobasha = Love[index];
        if(valobasha > Amirul){
            Amirul = valobasha;
        }
    }
    return Amirul;
}

const youLove = [165, 450, 782, 452, 1000, 1005];
const Robiul = AmrLove(youLove);
console.log('tallest person is :', Robiul);