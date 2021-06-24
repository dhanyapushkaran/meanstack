var products = [
    { code: 1000, name: "garlic", mrp: 120, aval_qty: 10 },
    { code: 1001, name: "chilly", mrp: 80, aval_qty: 5 },
    { code: 1002, name: "tomatto", mrp: 35, aval_qty: 20 },
    { code: 1003, name: "onion", mrp: 40, aval_qty: 37 },
    { code: 1004, name: "potatto", mrp: 45, aval_qty: 40 },
    { code: 1005, name: "banana", mrp: 55, aval_qty: 60 },
    { code: 1006, name: "brinjal", mrp: 43, aval_qty: 2 },
    { code: 1007, name: "beetroot", mrp: 38, aval_qty: 5 },
    { code: 1008, name: "carrot", mrp: 60, aval_qty: 0 },
    { code: 1009, name: "bittergod", mrp: 50, aval_qty: 5 },

]
var Prdt_Price=[]
for(let data of products ){
    if(!( data.name in Prdt_Price)){
        Prdt_Price[data["name"]]=data["mrp"]
    }
}
console.log(Prdt_Price);
function sort_price(data){
return Object.entries(data).sort((price1,price2)=>price2[1]-price1[1])
}
var sorted_prdt=sort_price(Prdt_Price)
console.log(sorted_prdt);
console.log(`costly product is ${sorted_prdt[0]}rs`);