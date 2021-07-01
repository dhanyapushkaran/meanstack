class Employee{
    constructor(id,name,desig,salary,exp){
        this.id=id;
        this.name=name;
        this.desig=desig;
        this.salary=salary;
        this.exp=exp;
    }

    
}
// var emp1= new Employee(100,"ravi","developer",20000,3)
// var emp2= new Employee(101,"ram","quality analyst",25000,3)
// var emp3= new Employee(102,"sam","developer",20000,3)
// var emp4= new Employee(103,"jio","HR",32000,3)
// var emp5= new Employee(104,"dev","executive",20000,3)

var Emp=[new Employee(100,"ravi","developer",20000,1),
         new Employee(101,"ram","quality analyst",25000,3), 
         new Employee(102,"sam","developer",22000,2),
         new Employee(103,"jio","HR",32000,5),
         new Employee(104,"dev","executive",27000,4)
]   
console.log(Emp);


    var HighestSalary=Emp.reduce((item1,item2)=>item1["salary"]>item2["salary"]?item1:item2)
    console.log(HighestSalary);

    var SortOnSalary=Emp.sort((item1,item2)=>item2["exp"]-item1["exp"])
    console.log(SortOnSalary);

    var searchSome=Emp.some(item=>item["desig"]=="quality analyst")
    console.log(searchSome);