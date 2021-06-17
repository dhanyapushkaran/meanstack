
for (let i = 0; i <= 7; i++) {
    var str = ""
    if (i == 5) {
        for (let j = 0; j < 7; j++) {
            str += "*"
        }
    }
    else {
        for(let k=0;k< 6; k++){
        str += " "
        }
    }
    console.log(str);
}