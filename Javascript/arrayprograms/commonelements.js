var arr1=[10,20,30,40]
var arr2=[9,10,11,20]
var common_elements=[]
for(let num1 of arr1){
    for(num2 of arr2){
        if(num1==num2){
            common_elements.push(num1);
        }
    }
}
console.log(`common_elements= ${common_elements}`);