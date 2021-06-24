var employee={id:100,ename:"ram",salary:20000,desig:"developer"}
console.log(employee.desig);
employee.salary+=5000
console.log(employee);
if(!("exp" in employee)){
employee["exp"]=5
console.log(employee);
}