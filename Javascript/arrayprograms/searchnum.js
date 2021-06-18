var elem = 17;
var flag = 0;
var arr = [10, 11, 12, 13, 14, 15]
for (let num of arr) {
    if (elem == num) {
        flag++
        break
    }
}
console.log(flag==0?"element not found":"element found");
// if (found == 0) {
//     console.log("element not found");
// }
// else {
//     console.log("element found");
// }