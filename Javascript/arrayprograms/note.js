var exp=[20000,30000,25000,27000,30000]
// exp[1]=25000;
// console.log(exp);
// for(let i=0;i<exp.length;i++){
//     console.log(exp[i]);
// }

// for(let amount of exp){
//     console.log(amount);
// }
// exp[3]+=3000;
// console.log(exp);
for(let expense of exp){
    if(expense>25000){
        console.log(expense);
    }
}