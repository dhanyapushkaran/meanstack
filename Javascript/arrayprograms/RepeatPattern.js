var arr = ["A","C","A","C","C"]
//console.log(arr);
var out=0;
var count=0;
for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {
        if(count==0){

        if (arr[j] == arr[i + j+ 1]) {
            count++
            console.log(arr[j]);
            
          }
        }
       
    }
   }


