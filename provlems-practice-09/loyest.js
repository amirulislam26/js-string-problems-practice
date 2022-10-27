function loyest(num){
    let target = num[0];
    for(let i = 0; i < num.length; i++){
        const index = i;
        const valobasha = num[index];
        if(valobasha < target){
            target = valobasha;
        }
    }
    return target;
}

const youLove = [165, 450, 782, 452, 1000, 1005];
const love = loyest(youLove);
console.log('loyest person is :', love);