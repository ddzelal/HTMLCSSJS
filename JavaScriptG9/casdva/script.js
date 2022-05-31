
//prvi zadatak

broj = '2326212'
Nbroj = ''


for(i=0; i<broj.length; i++){
    if(broj[i] % 2 === 0){
        Nbroj +=  '-'
    }
    Nbroj+= broj[i]
}

console.log(Nbroj)


// drugizadatak

// niz = [2,3,4,2,6,2,1]
// niz2= []


// for(i=0; i<niz.length; i++){
    
//     for(j=i; j<niz.length; j++){
        
//     }
//     if(niz[i] !== niz[j]){
//         niz2.push(niz[i]) 
//     }
// }

// console.log(niz2)


// niz = [2,3,12,5,-2,-32,23]
// sum = 0;

// for(i=0; i<niz.length; i++){
//     if(niz[i]>0){
//         sum+=niz[i]
//     }

// }

// console.log(sum)

// actualArr = ['Apple', 'Apple', 'Banana', 'Mango', 'Strawberry', 'Banana'];

// console.log('Actual Array: ' + actualArr);

// var filteredArr = actualArr.filter(function(item, index) {
//   if (actualArr.indexOf(item) == index)
//     return item;
// });

// console.log('Filtered Array: ' + filteredArr);


// niz = [NaN,0,15,false,-22,'',undefined,42,null]
// niz2=[]

// for(el of niz){
//   if(el){
//     niz2.push(el)
//   }
// }

// console.log(niz2)


// niz1=[1,2,3];
// niz2=[2,30,1];
// niz3  = niz1.concat(niz2)
// niz4 = []

// console.log(niz3)

// for(el of niz3){
//   if(!niz4.includes(el)){
//     niz4.push(el)
//   }
// }

// console.log(niz4)

// unos = Number(prompt("Koliko zelis elemenata?"))
// brojac = 0;
// suma = []
// el = Number(prompt("Unesi element"));


// while(unos > brojac){
  
//   for(i=0; i<unos; i++){
//     suma.push(el)
//   }
//   brojac++
  

    
// }
// console.log(suma)


// niz = [1,23,4,5,67,231,2,3,5]
// niz2 = []

// unos = Number(prompt("Koliko zelis elemenatA?"))
// br = 0;

// for(i=0; i<unos; i++){
//     niz.pop();
// }


// console.log(niz)


const numbers = [2,3,4,5,12,23,421,12,4]

const EvenNumbers = numbers.filter((el) => el % 2 === 0)

console.log(EvenNumbers)

const cene = []

function fun (){

}



