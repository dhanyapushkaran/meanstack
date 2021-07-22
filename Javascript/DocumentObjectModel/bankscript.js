//local storage
// localStorage.setItem("acc_no",1000)
// localStorage.setItem("pswd","abc123")
// var res=localStorage.getItem("pswd")
// console.log(res);
for(let i=0; i<localStorage.length;i++){
let ke=localStorage.key(i)
let val=localStorage.getItem(ke)
console.log(ke,val);
}
//localStorage.clear()
var user = {username:"user1",password:"pwd1", name:"ravi",balance: 1000}
localStorage.setItem(user.username,JSON.stringify(user))
var user = {username:"user2",password:"pwd2", name:"raju",balance: 2000}
localStorage.setItem(user.username,JSON.stringify(user))
var user = {username:"user3",password:"pwd3", name:"ram",balance: 3000}
localStorage.setItem(user.username,JSON.stringify(user))
