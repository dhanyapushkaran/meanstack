var num1=10; num2=20;
console.log(`values before swapping num1=${num1} num2=${num2}`);
// var temp=num1;
// var num1= num2;
// var num2= temp;
num1= num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log(`values after swapping num1=${num1} num2=${num2}`);