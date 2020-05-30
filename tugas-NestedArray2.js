
function panggilNestedArray(value){
 // tulis jawabanmu disini
 var newArr =[];

   for(i=0;i<value[0].length;i++){
     var arr = [];
     arr.push(value[0][i]);
     arr.push(value[1][i]);
     arr.push(value[2][i]);
     newArr.push(arr);
   }


 console.log(newArr);
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)
