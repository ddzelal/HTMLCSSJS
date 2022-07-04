


function countOldNums(arr,n){

let nArr = arr.filter(el=> el < n && el % 2 === 0)
return nArr.length

}

arr = [2,3,4,23,2,32,3]

console.log(countOldNums(arr,10));



function mrgArr(arr1,arr2){
    concArr = arr1.concat(arr2)
    finarr  = concArr.sort((a,b)=> a-b)
    return console.log(finarr);
}



arr1 = [1,3,5,64,324,4354]
arr2 = [2,3214,42,2,2232]

mrgArr(arr1,arr2)

console.log('sta?');