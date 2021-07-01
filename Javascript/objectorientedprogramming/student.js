class student{
constructor(rol,ename,course,total){
    this.rol=rol;
    this.name=ename;
    this.course=course;
    this.total=total;
}
printDetails(){
    console.log(this.rol,this.name,this.course,this.total);
    
}
}
var stud1=new student(1000,"ram","bsc",145)
stud1.printDetails()
console.log(stud1.name);
