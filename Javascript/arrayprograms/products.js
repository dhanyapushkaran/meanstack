var products = [
    [100, "ricepowder", 30, 10],
    [101, "oreo", 35, 100],
    [102, "darkfantacy", 40, 50],
    [103, "fifty", 20, 5],
    [104, "horlicks", 200, 5],
    [105, "complan", 190, 0],
    [106, "boost", 250, 10],
    [107, "item1", 5, 10]]

//first question
let count = 0;
for (let item of products) {
    console.log(item[1]);
    count++

}
console.log(`"1. number of products in shop is ${count}`);

 //second
 var stock=0;
 for( let prdts of products){
    if(prdts[3]!=0)
    {
        stock++
    }
}
console.log(`2. number of products in stock is ${stock}`);
// third
var cost=[];
for( let prdts of products){
    cost.push(prdts[2])
    cost.sort((num1,num2)=>(num1-num2))
    }
   for(let prdts of products){
    if(cost[0]==prdts[2]){
        console.log(`3. ${prdts[1]} is the low cost product`);
    }
  if(cost[cost.length-1]==prdts[2]){
    console.log(`4. ${prdts[1]} is the costly product`);
  }
}
//Fifth
var flag=0;
for(let prdts of products){
    if(prdts[2]<10){
        flag++
        break
    }
    }
    if(flag>0){ 
        console.log("5. TRUE - Item is avaliable under Rs.10");}
//sixth
for(let prdts of products){
    if(prdts[1]=="boost"){
        console.log(prdts);
    }
}



