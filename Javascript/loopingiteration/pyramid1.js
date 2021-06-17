var n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
        str+= " ";
    }
    for (let k = 1; k <= 2*i-1; k++) {
        str+= "*"
    }
    console.log(str);
}
// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <=i; j++) {
//         str+= " ";
//     }
//     for (let k = 1; k <= 2*(n-i)-1; k++) {
//         str+= "*"
//     }
//     console.log(str);
// }