class Bank{

  getAccountDetails(){
        let accounts={
            1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
            1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
            1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
            1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
        }
        return accounts
    }
    authenticate(username,pswd){
        let account_details=this.getAccountDetails()
        if(username in account_details){
            if(pswd==account_details[username]["password"]){
                return 1 //success
            }
            else{
                return -1 // invalid password
            }
        }
        else{
            return 0
            //invalid username
        }
    }

    // createAccount(account_number,name,balance){
    //     this.account_number=account_number;
    //     this.name=name;
    //     this.balance=balance;
    // }

    deposit(amt){
        this.balance+=amt;
        console.log(`Your account no ${this.account_number} is credited with amount ${amt}. your avl balance is ${this.balance}`);

    }

    withdrawel(amt){
        if(this.balance<amt){
            console.log(`transation failed. Insufficient balance`);
        }
        else{
            this.balance-=amt;
            console.log(`Your account no ${this.account_number} is debited with amount ${amt}. your avl balance is ${this.balance}`);
        }

    }

    balanceEnquiry(){
        console.log(`your available balane is ${this.balance}`);

    }
}

var obj1=new Bank()
// obj1.createAccount(1000,"ravi",30000)
// obj1.withdrawel(1000)
// obj1.deposit(5000)
// obj1.balanceEnquiry()

var user =obj1.authenticate(1000,"test")
var res= user==0?"invalid":user==-1?"invalid password":"success"
console.log(res);