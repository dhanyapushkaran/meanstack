var temperature=[
    {district:"tvm",temprature:25},
    {district:"kollam",temprature:27},
    {district:"kottayam",temprature:24},
    {district:"ekm",temprature:27},
    {district:"tsr",temprature:25},
    {district:"pkd",temprature:30},
    {district:"tvm",temprature:27},
    {district:"kollam",temprature:25},
    {district:"kottayam",temprature:28},
    {district:"ekm",temprature:29},
    {district:"tsr",temprature:30},
    {district:"pkd",temprature:31},

]
var weather={}
for(let data of temperature ){
    dist=data["district"] //dist=tvm
    temp=data["temprature"]
    if(!(dist in weather)){
        weather[dist]=temp
    }
    else{
        old_temp=weather[dist]
        if(weather[dist]<temp){
            weather[dist]=temp
        }
    }
}
console.log(weather);
var sortTemp= Object.entries(weather).sort((item1,item2)=>item2[1]-item1[1])
console.log(sortTemp);