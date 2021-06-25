var arr=[3,4,2,8,7,9]
var total=arr.reduce((num1,num2)=>num1+num2)
console.log(total);
var max= arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);