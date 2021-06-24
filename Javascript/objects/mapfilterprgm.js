var arr=[2,3,1,4,5]
var square=arr.map(num=>num**2)
//console.log(square);


var arr=[2,4,3,5,6];
var odds=arr.filter(num=>num%2==0)
//console.log(odds);

var arr=[4,3,2,7,8,9]
var pattern=arr.map(num=>num<5?num-1:num+1)
console.log(pattern);