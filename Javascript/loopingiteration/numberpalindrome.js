// var num=123;
// var a1= num%10;
// var num= math.floor(num/10);
// var a2=num%10;
// var num= math.floor(num/10);
// var a3=num%10;
// var num= math.floor(num/10);
// console.log(a3+ a2 +a1);
var num=123;
var res="";
while (num!=0) {
    let digit=num%10;
    res+=digit;
    // console.log(digit);
   num=Math.floor(num/10);
    }
    console.log(res); 