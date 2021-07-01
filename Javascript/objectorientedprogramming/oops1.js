class employee{
    setemployee(eid,ename,desig,salary){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=salary
    }
    printemployee(){
        console.log(this.eid,this.ename,this.desig,this.salary);
    }
}

var employee1=new employee
employee1.setemployee(100,"ram","developer",20000)
employee1.printemployee()