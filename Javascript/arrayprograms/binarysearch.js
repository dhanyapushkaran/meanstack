var arr=[8,10,11,9,12,7,13]
arr.sort((num1,num2)=>num1-num2)
var element=12;
var flag=0;
var low=0, upp=arr.length-1;
while (low<upp) {
    let mid=Math.floor((low+upp)/2)
    if (element>arr[mid]) {
        low=mid+1;
    }
    else if (element<arr[mid]) {
        upp=mid-1;
    }
    else if( element==arr[mid]){
        flag++
        break
    }
    
}
console.log(flag==0?"element not found":"element found");