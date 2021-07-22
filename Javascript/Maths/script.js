let displayNumber=(num)=>inpt.value+=num;
let evaluateExpression=()=>inpt.value=eval(inpt.value)
let clearBox=()=>inpt.value="";
let DeleteNumber=()=>inpt.value=inpt.value.slice(0,-1)
function evaluateEqual(){
        let temp=inpt.value
       let res= eval(temp)
       inpt.value=` ${temp} = ${res}`
    }