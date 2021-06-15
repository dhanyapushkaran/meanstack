var low = 21, upp = 40;
for (let i = low; i <= 40; i++) {

    let num = i, flag = 0;
    for (let j = 2; j < num; j++) {
        if (num % j == 0) {
            flag++;
            break
        }
    }
    if (flag == 0) {
        console.log(num);

    }
}