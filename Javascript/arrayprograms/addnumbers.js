function add(...argmt){
    let res=0;
    for( let num of argmt){
        res+=num
    }
    return res
}
console.log(add(2,3,4));