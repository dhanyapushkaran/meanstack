class parent{
    m1(){
        console.log("inside parent");
    }
}
class child extends parent{
    m2(){
        console.log("inside child");
    }
}
class subchild extends child{
    m3(){
        console.log("inside subchild");
    }
}
var sub=new subchild()
sub.m3()
sub.m2()
sub.m1()

var child1=new child();
//child.m3() error
child1.m2()
child1.m1()

var parent1=new parent()
parent1.m1()
// parent1.m2() error
//paremt1.m3() error