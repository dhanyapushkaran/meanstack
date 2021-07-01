var pattern="ABABC"
var dict={}
for(char of pattern){
    if(!(char in dict)){
        dict[char]=1
        console.log(dict);
    }
    else{
        console.log(" first recusive char is " + char);
        break
    }
}