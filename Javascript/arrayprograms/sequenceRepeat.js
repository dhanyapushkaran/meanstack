var arr = "ACBBC"
var out=[]
for(let elem=0;elem<arr.length; elem++){
for(let i=elem+1;i<arr.length;i++){
    if (arr[elem]==arr[i]& elem!=i) {
        out.push(i)
    }
}
}
out.sort((num1,num2)=>(num1-num2))
console.log(arr[out[0]]);
