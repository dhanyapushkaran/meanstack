//inheritance
class person{
    setperson(name, age){
        this.name = name;
        this.age = age;
    }
    printperson(){
        console.log(this.name, this.age);
    }
}
class student extends person {
    setstudent(roll, course) {
        this.roll = roll;
        this.course = course;
    }
    printstudent() {
        console.log(this.roll, this.course);
    }
}
var stud1 = new student();
stud1.setperson("ram", 21)
stud1.setstudent(100, "bca")
stud1.printstudent()
stud1.printperson()