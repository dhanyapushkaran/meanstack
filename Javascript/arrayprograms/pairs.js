var arr = [ 1, 2, 3, 4]
var n = 4;
var sum = 0;
var cnt=0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
        cnt++;
        sum = arr[i] + arr[j];
        if (sum == 4 ) {
            console.log(arr[i], arr[j]);
        }
    }
} console.log(cnt);