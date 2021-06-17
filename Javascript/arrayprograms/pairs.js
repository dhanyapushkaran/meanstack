var arr=[1,2,3,4,6,7,8]
var n=8;
var sum=0;
for(i=0;i<n;i++){
    for(j=i+1;j<=n;j++){
        sum=arr[i]+arr[j]
        if (sum==8) {

            console.log(arr[i],arr[j]);
        }
    }
}