// var employees=[
// [100,"ram",20000,"developer"],
// [101,"ravi",22000,"developer"],
// [102,"raju",25000,"qa"],
// [103,"nithin",22000,"qa"]]
// for(let emp of employees){
//     console.log(emp[1]);
// }

// for(let emp of employees){
//     if(emp[3]=="developer"){
//     console.log(emp);
//     }
// }

// for(let emp of employees){
//     if(emp[2]> 21000){
//     console.log(emp);
//     }
// }

var products = [
    [100, "ricepowder", 30, 10],
    [101, "oreo", 35, 100],
    [102, "darkfantacy", 40, 50],
    [103, "fifty", 20, 5],
    [104, "horlicks", 200, 5],
    [105, "complan", 190, 0],
    [106, "boost", 250, 10],
    [107, "item1", 5, 10]
]
//first question
let count = 1;
for (let item of products) {
    console.log(item[1]);
    count++

}
console.log(`"1. number of products in shop is" ${count}`);

 //second
//  var stock=1;
//  for( let prdts of products){
//     if(prdts[3]!=0)
//     {
//         stock++
//     }
// }
// console.log(`"2. number of products in stock is" ${stock}`);
//third
// var cost=[];
// for( let prdts of products){
//     cost.push(prdts[2])
//     cost.sort((num1,num2)=>(num1-num2))
//     if(prdts[2]==cost[0]){
//         console.log(` ${prdts[1]} is the costly product`);
//     }
//   if(prdts[2]==cost[cost.length-1]){
//     console.log(`4. ${prdts[1]} is the low cost product`);

//   }
// }
