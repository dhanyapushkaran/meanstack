var n = 6;
for (let i = 1; i <= 5; i++) {
    var str = "";
    for (let j = n - i; j >= 1; j--) {
        str += " ";
    }
    if (i == 1) {
        console.log("      *");
    }

    else if (i == 5) {
            for (let j = 0; j < 6; j++) {
                str += "* "
            }
        
    }
    else {
    for (let k = 1; k < 2; k++) {
        str += "*";
    }
    for (let l = 1; l < i; l++) {

        str += "  "
    }

    for (let m = 1; m < 2; m++) {
        str += " *";
    }
}
    console.log(str);
}


