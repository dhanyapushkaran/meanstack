
    // createAccount(account_number,name,balance){
    //     this.account_number=account_number;
    //     this.name=name;
    //     this.balance=balance;
    // }

//     deposit(amt){
//         this.balance+=amt;
//         console.log(`Your account no ${this.account_number} is credited with amount ${amt}. your avl balance is ${this.balance}`);

//     }

//     withdrawel(amt){
//         if(this.balance<amt){
//             console.log(`transation failed. Insufficient balance`);
//         }
//         else{
//             this.balance-=amt;
//             console.log(`Your account no ${this.account_number} is debited with amount ${amt}. your avl balance is ${this.balance}`);
//         }

//     }

//     balanceEnquiry(){
//         console.log(`your available balane is ${this.balance}`);

//     }
}

var obj1=new Bank()
// obj1.createAccount(1000,"ravi",30000)
// obj1.withdrawel(1000)
// obj1.deposit(5000)
// obj1.balanceEnquiry()

var user =obj1.authenticate(1000,"userone")
//var res= user==0?"invalid":user==-1?"invalid password":"success"
//console.log(res);