var pattern="ABABC"
var dict={}
for(char of pattern){
    if(!(char in dict)){
        dict[char]=1
    }
    else{
        console.log(" first recusive char is " + char);
        break
    }
}