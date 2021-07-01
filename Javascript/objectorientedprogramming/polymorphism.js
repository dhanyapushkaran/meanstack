//methodOverloading
class calculation{
    add(){
        console.log("no arg");
    }
    add(num1){
        console.log("1 arg");
    }
    add(...arf){
        console.log("multiple arg");
    }
}
var cal=new calculation()
cal.add()
cal.add(10)
cal.add(10,20)