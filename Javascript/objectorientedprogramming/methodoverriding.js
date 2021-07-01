class parent{
    phone(){
        console.log("samsung");
    }
}
class child extends parent{
    phone(){
        super.phone()
        console.log("iphone");
    }
}
var child1=new child();
child1.phone()

class rectangle{
    area(...arg){
        console.log("area rectangle", arg[0]*arg[1]);
    }
}
class shape extends rectangle{
    area(...arg){
        console.log("shape area", arg[2]*arg[2]);
        super.area(arg[0],arg[1])
    }
}
var shape1=new shape
shape1.area(2,3,4)