//num=123
var arr = [];
for (let num = 150; num < 155; num++) {

    var temp = num
    var sum = 0;
    while (num != 0) {
        let digit = num % 10; //3,2,1
        num = Math.floor(num / 10) //12,1
        cube = digit ** 3;
        sum += cube
        //console.log(digit,num, cube,sum);
    }
    if (temp == sum) {
        arr.push(sum)
    }


}
console.log(`Amstrong numbers of 3 digits are ${arr}`);
