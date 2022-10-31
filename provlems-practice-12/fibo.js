const fibo = [0, 1];
for(let i = 2; i <= 15; i++){
    fibo[i] = fibo[i-1] + [i-2];
}
console.log(fibo);