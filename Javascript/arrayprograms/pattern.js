var arr=[3,4,5]  //output 9,8,7
var out=[];
var sum=0;
for(let num of arr){
sum+=num;
}
for(let num of arr){
    let res= sum-num;
    out.push(res)
}
console.log(out);