var arr=[]
for(let i=1; i<10;i++){
    for(let j=0;j<10;j++){
        for(k=0;k<10;k++){
            let sum=k**3+j**3+i**3
            let num=i*100+j*10+k;
            if(sum==num){
                arr.push(sum)
                
            }

        }

    }
}
console.log(`3 digit Amstrong numbers are ${arr}`);