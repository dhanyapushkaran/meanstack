class Bank{

    status= 0
 accounts={ 
        1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
        1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
         1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
        1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
    }
    
  authentication(user_name,password){
      let accountDetails=this.accounts
      if(user_name in accountDetails){
          if(password==accountDetails[user_name]["password"]){
              this.status=1
              return user_name

          }
          else{
              console.log("invalid password");
        }
      }
      else{
          console.log("invalid user");
      }
  }

  balanceEnquiry(){

    if(this.status==1){
        return this.accounts[user]["balance"]
    }
    else{
        console.log("invalid session");
    }
  }

  fundTransfer(from_account,to_account,amount){
      if(this.status==1){
          let bal= this.balanceEnquiry()
          if(bal>=amount){
            if(to_account in this.accounts){
                this.accounts[from_account]["balance"]-=amount
                this.accounts[to_account]["balance"]+=amount
            }
          }
          else{
              console.log("insufficient fund");
          }

      }
      else{"invalid session"}
  }

  logout(user){
      this.status=0
  }
}


var obj1= new Bank
var user=obj1.authentication(1000,"userone")
console.log(obj1.fundTransfer(user,1002,500));
console.log(obj1);
obj1.logout()
console.log(obj1.balanceEnquiry());

