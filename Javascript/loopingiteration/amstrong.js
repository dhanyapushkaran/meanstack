var num=528;
var res=0;
while (num!=0) {
let digit=num%10;// 123%10=3,
num= Math.floor(num/10);
let power= digit**3;//3*3*3
res+=power;//27+0
}
console.log(res);