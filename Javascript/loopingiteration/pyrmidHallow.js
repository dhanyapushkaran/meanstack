var str = ""
for (row = 1; row <= 5; row++) {

    for (col = 1; col <= 9; col++) {
        if ((row == 5) | ((row + col) == 6) | ((col - row) == 4) ){ str += "*" }
    }
    console.log(str);
}
