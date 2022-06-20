// Напишите ЈаваСцрипт функцију за претварање износа у новчиће. Иди до уредника
// Пример функције: количинаТоцоинс(46, [25, 10, 5, 2, 1])
// Овде је 46 износ. а 25, 10, 5, 2, 1 су новчићи.
// Излаз: 25, 10, 10, 1
let novac = [25,10,5,2,1]

const TargetCoins = (provera,arr) => {
    let suma = 0;
    
    output = []
    for(i=0; i<arr.length; i++){
        suma+=arr[i];
        if(suma <= provera){
            output.push(arr[i])
            // console.log(suma)[]
        }
        else if(suma > provera){
            suma-=arr[i]
        }
       
    
    }
    if(provera === suma){
        return console.log("Iskoriceni novac:",output)
    }
    else {
        return console.log("Nemate odgovarajuci novac:")
    }
    
}

TargetCoins(41,novac)


target = 46;
suma =0;
novac = [25,10,5,2,1]
output = []


for(i=0; i<novac.length; i++){
    suma+=novac[i];
    if(suma <= target){
        output.push(novac[i])
        if(suma+novac[i] <= target){
            suma+=novac[i];
            output.push(novac[i])
        }
    }
    else{
        suma-=novac[i]
    }
//    console.log(suma)

}
//probaj

console.log(output)

////Zav prvi Zadatak 

// thequickbrownfoxjumpsoverthelazydog
// thequickbrownfxjmpsvlazydg

arrA=[5,10,3,7,2134,2345,123,435,123,568,123,7809123,123,345,354,9]
// arrA.sort((a, b) => a - b);
// console.log(arrA)
daris=[]
check=130;

console.log(arrA.length)

// for(i=arrA.length-1,j=arrA.length-2; i>=0; i--,j--){
//     console.log("dzele")
//     if(arrA[i]+arrA[j] === check){
//         daris.push(arrA[i])
//         daris.push(arrA[j])
//         break;
//     }
// }


for(i=0;i<arrA.length;i++){
    console.log("dzele")
    el = check-arrA[i]
    if(arrA.includes(el)){
        daris= [el,arrA[i]]
    }
}






console.log(daris)


// thequickbrownfoxjumpsoverthelazydog
// thequickbrownfxjmpsvlazydg

str = 'thequickbrownfoxjumpsoverthelazydog'
S_str=str.split("")
console.log(S_str)
string=""
for(i=0; i<S_str.length; i++){

    for(j=i+1; j<S_str.length; j++){
        if(S_str[i] === S_str[j]){
            console.log(S_str[j],"Duplicat BRATE!!!!!")
            S_str.splice(i, 1);
        }
       
        
    }
    
}
// console.log(S_str)


let novi = [...new Set(S_str)]
novi.join('')
console.log(novi)


