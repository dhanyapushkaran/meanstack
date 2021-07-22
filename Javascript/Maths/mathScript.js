function createDetails() {

    let UserId = userid.value;
    let Name = nam.value;
    let MailId = mail.value;
    let password = pswd.value;
    
    let Math = { UserId, Name, MailId, password}

    if (!(UserId in localStorage)) {

        localStorage.setItem(UserId, JSON.stringify(Math))
        alert("Details successfully added")
        //location.href = "./banklogin.html"
        window.location.reload(true)
    }
    else {
        alert("UserID already exist")
    }
}
function gotologin(){
    location.href = "./login.html"
}

function authentication() {


    if (uid.value in localStorage) {
        let res = JSON.parse(localStorage.getItem(uid.value))
        console.log(res);
        if (pwd.value == res["password"]) {
            alert("Successfully logged In")
            sessionStorage.setItem("user", uid.value)
            location.href = "mathhome.html"

        }
        else {
            error.innerHTML = `invalid Password`
        }
    }
    else {
        alert(" Invalid User")
    }

}

var req = sessionStorage.getItem("user")
var Uname = JSON.parse(localStorage.getItem(req))
if (req) {
    litem.innerHTML = `User:${req} ${Uname.Name} Logout`
}

function logout() {
    sessionStorage.clear("user")
    location.href = "login.html"
}
