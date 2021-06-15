var num=10, flag=0;
for( let i=2; i<num; i++){
if (num%i==0) {
    flag++;
}
}
if (flag==0) {
    console.log("Prime number");
    
}
else{
    console.log("not prime");
}