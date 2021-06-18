
for (row = 1; row <= 5; row++) {
    var str = ""
    for (col = 1; col <= 9; col++) {
        if ((row == 5) | ((row + col) == 6) | ((col - row) == 4) ){ str += "*" }
        else {
            str+=" "
        }
        
    }
    console.log(str);
}
