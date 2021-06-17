var num1 = 50, num2 = 100, gcd = 0;
for (let i = 1; i <= num1; i++) {
    if ((num1 % i == 0) & (num2 % i == 0)) {

        gcd = i;

    }

}
console.log(gcd);