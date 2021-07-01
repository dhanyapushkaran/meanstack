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
//some
var is_aval= products.some(item=>item.mrp>=30)
//console.log(is_aval);



//search
var search=products.find(item=>item.name=="potatto")
//console.log(search);

//sort
var sort_qty=products.sort((item1,item2)=>item2.aval_qty-item1.aval_qty)
//console.log(sort_qty);

//sort using foreach()
 products.sort((item1,item2)=>item2.aval_qty-item1.aval_qty).forEach(item=>console.log(item))

 products.sort((item1,item2)=>item2.aval_qty-item1.aval_qty).forEach(item=>{
     if(item.aval_qty>0){
    console.log(item)}
     })

var Sort_prdts= products.sort((prdt1,prdt2)=> prdt1.mrp-prdt2.mrp)
// console.log(Sort_prdts);


 var product_names= products.map(item=>item.name)
// console.log(product_names);
var prdt_namesupper= product_names.map(name=>name.toUpperCase())

// console.log(prdt_namesupper);
 var below_fifty=products.filter(item=>item.mrp<50)
// console.log(below_fifty);

//range
var prdt_range=products.filter(item=>item.mrp<=50 & item.mrp>=30)
// console.log(prdt_range);
 var outOfStock=products.filter(item=>item.aval_qty==0)
// console.log(outOfStock);

var costly_prdt=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2)
//console.log(costly_prdt);
var low_prdt=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item2:item1)
//console.log(low_prdt);