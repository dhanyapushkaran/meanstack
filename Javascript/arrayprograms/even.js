var arr=[10,11,12,13,14,15,16]
// for( let num of arr){
//     if(num%2==0){
//         console.log(num);
//     }
// }
// var sum=0;
// for( let num of arr){
//     sum+=num;
   
// }
// console.log(sum);

// arr.push(100)
// console.log(arr);

var odd=[],even=[];
for(let num of arr){
    if(num%2==0){
        even.push(num)
    }
    else{
        odd.push(num)
    }
}
console.log("even array", even);
console.log("odd array", odd);