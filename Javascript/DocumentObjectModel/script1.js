//step1: create fn fot displaying numbers
// function displayNumber(num){
//     inpt.value+=num
// }
let displayNumber=(num)=>inpt.value+=num;
// function evaluateExpression(){
//     res=eval(inpt.value);
//     inpt.value=res;
// }
let evaluateExpression=()=>inpt.value=eval(inpt.value)
let clearBox=()=>inpt.value="";
let removeNumber=()=>inpt.value=inpt.value.slice(0,-1)