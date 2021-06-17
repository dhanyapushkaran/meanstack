var arr=[10,5,7,3]
for(i=0;i<=3;i++){
    for(j=i+1; j<=3;j++){
        if (arr[i]>arr[j]) {
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            
        }
    }
}
console.log(arr);
console.log(arr[0]+" is the minimum number and "+ arr[3]+" is the maximum number");
