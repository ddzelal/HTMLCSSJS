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
   console.log(suma)

}
//probaj

console.log(output)

////Zav prvi Zadatak 