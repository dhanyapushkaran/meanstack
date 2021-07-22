function checkSlot(){
    let ag=document.querySelector("#age").value
   if(ag>=18){
       result.innerHTML=`<h2 style=color:green> Eligible</h2>`
   }
   else{
    result.innerHTML=`<h2 style=color:red>Not Eligible</h2>`
   }
   
}