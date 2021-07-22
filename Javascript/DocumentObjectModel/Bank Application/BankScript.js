//function listBankAc(){
//     let banks=[]
//     for(i=0;i<localStorage.length;i++){
//         let bank=JSON.parse(localStorage.getItem(localStorage.key(i)))
//         banks.push(bank)
//     }
//     console.log(banks);
//     populate(banks)

// }
// function populate(banks){
//     let html_data=""
//     for(let bank of banks){
//         html_data+=`<tr> <td>${bank.AccountNo}</td><td>${bank.Name}</td><td>${bank.Balance}</td><td>${bank.password}</td><td>${bank.PhoneNumber}</td></tr>`
//     }
//     result.innerHTML=html_data
// }

function createBankDetails() {

    let AccountNo = ac_no.value;
    let Name = nam.value;
    let Balance = bal.value;
    let password = pswd.value;
    let PhoneNumber = phone.value;
    let Bank = { AccountNo, Name, Balance, password, PhoneNumber }

    if (!(AccountNo in localStorage)) {

        localStorage.setItem(AccountNo, JSON.stringify(Bank))
        alert("Account details successfully added")
        //location.href = "./banklogin.html"
        window.location.reload(true)
    }
    else {
        alert("Account Number already exist")
    }
    // window.location.reload(true)
}
function gotologin(){
    location.href = "./banklogin.html"
}

function authentication() {


    if (acNo.value in localStorage) {
        let res = JSON.parse(localStorage.getItem(acNo.value))
        console.log(res);
        if (pwd.value == res["password"]) {
            alert("Successfully logged In")
            sessionStorage.setItem("user", acNo.value)
            location.href = "home.html"

        }
        else {
            error.innerHTML = `invalid Password`
        }
    }
    else {
        alert("Account number Invalid")
    }

}
function balanceEnquiry() {

    let user = sessionStorage.getItem("user")
    let account = JSON.parse(localStorage.getItem(user))
    alert(account["Balance"])

}

var req = sessionStorage.getItem("user")
var Uname = JSON.parse(localStorage.getItem(req))
console.log(Uname);
if (req) {
    litem.innerHTML = `User:${req} Logout  `
 
}

function logout() {
    sessionStorage.clear("user")
    location.href = "banklogin.html"
}
//function getValue()
var to_acNo = 0;
var amount = 0;
var index=0;

function fundTransfer() {
   
    to_acNo = toac.value
    let confirm_acNo = ctoac.value
    amount = Number(amt.value)
    if (to_acNo == confirm_acNo) {
        let loged_user = JSON.parse(localStorage.getItem(req))
        if (loged_user.Balance < amount) {
            alert("insufficient balance")
        }
        else {
           
            if (to_acNo in localStorage) {
                index=JSON.parse(localStorage.getItem("state"))
                loged_user.Balance = Number(loged_user.Balance) - amount
            localStorage.setItem(loged_user.AccountNo, JSON.stringify(loged_user))
                let user = JSON.parse(localStorage.getItem(to_acNo))
                user.Balance = Number(user.Balance) + amount
                localStorage.setItem(user.AccountNo, JSON.stringify(user))
                alert("transation completed")
                index++
                localStorage.setItem("state",JSON.stringify(index))
                savetransaction()
            }
            else { alert ("to Account number dose not exist") }
        }
    }
    else { alert ("confirm acc no is not matching") }
}
// let transaction = []
// function savetransaction() {
   
//        transaction += `<div class="card" style="width: 18rem;">
//          <ul class="list-group list-group-flush">
//              <li class="list-group-item">[Acc No:${to_acNo}, Transfered Amount: ${amount}]</li>
//           </ul>
//      </div>`
// }

// function transationHistory() {
//     tr.innerHTML = transaction

// }
function savetransaction() {
  let transaction= {req,to_acNo,amount}
    localStorage.setItem(index,JSON.stringify(transaction))
    
}

function transationHistory() {
    index=JSON.parse(localStorage.getItem("state"))
    let transaction = []
    for(i=1;i<=index;i++){
       let value= JSON.parse(localStorage.getItem(i))
    if(req==value.req){ 
        transaction += `<div class="card" style="width: 18rem;">
                 <ul class="list-group list-group-flush">
                     <li class="list-group-item">[Acc No:${value.to_acNo}, Transfered Amount: ${value.amount}]</li>
                  </ul>
             </div>`
        }
    tr.innerHTML = transaction
    }
}


// function FindBankAccount(){
//     if(AcSrch.value in localStorage){
//         let AcData=JSON.parse(localStorage.getItem(AcSrch.value))
//         let html_data=`<div class="card" style="width: 18rem;">
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">${AcData.AccountNo}</li>
//                 <li class="list-group-item">${AcData.Name}</li>
//                 <li class="list-group-item">${AcData.Balance}</li>
//                 <li class="list-group-item">${AcData.password}</li>
//                 <li class="list-group-item">${AcData.PhoneNumber}</li>
//             </ul>
//         </div>`
//         resultArea.innerHTML=html_data
//     }
//     else{
//         alert("Account not found")
//     }

// }
