



/** 
const arrayNumber =[1000,1,90,7]


function orderArray(arrayNumber){

    for( let i= 0 ; i < arrayNumber.length -1 ; i++ ){
        arrayNumber[i];
        if( arrayNumber[i] > arrayNumber[i+1]){
           console.log([arrayNumber[i+1]],[arrayNumber[i]]);
         
}
return [arrayNumber[i+1]],[arrayNumber[i]];
 
}

}

orderArray(arrayNumber);

*/

const arrayNumber = [45,25,8,1,7,888]
function orderNumber(arrayNumber){

    let newArray = [];
    for( let i = 0; i< arrayNumber.length  ; i++){
         newArray.push(arrayNumber[i])
        }
    let dataLen = newArray.length;
    for(let i=0; i < dataLen; i++){
      for(let j=0; j < dataLen; j++){
        if(j+1 !== dataLen){
          if(newArray[j] > newArray[j+1]){
            let swapElement = newArray[j+1];
            newArray[j+1] = newArray[j];
            newArray[j] = swapElement;
          }
        }  
      }
    }

    return newArray;
}
console.log(orderNumber(arrayNumber));