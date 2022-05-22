


// niz = [3,4,5,6,7,10,20];
// suma = 0;

// for(i=0; i<niz.length; i++){

// suma+=niz[i]

// }
// console.log(suma)


// unos = Number(prompt("Koliko zelis brojeva"))
// br=0;
// niz=[]
// suma=0;

// while(br<unos){
//     broj= Number(prompt("unesite broj"))
    
//     niz.push(broj);
    
//     br++;

// }

// console.log(niz)

// for (i=0; i<niz.length; i++){
//     suma+=niz[i]
// }

// console.log(suma)


// niz = [3,4,5,2,6]
// niz2=[]

// for(i= niz.length-1; i>=0; i--){
//     niz2.push(niz[i])
    
// }
// console.log(niz2)
// vrednos = Number(prompt("unesi broj"))
// for(i=0; i<niz.length; i++){
//     if(niz[i] === vrednos){
//         console.log("posooji")
        
//     }
//     else if(vrednos !== niz[i])
//         {
//             console.log("ne postoji")
//         }
    
//     }
// unos = Number(prompt("unesi broj"))
// niz = [1,2,3,4,5,6,7,8]
// niz2=[];

// for(i=0; i<niz.length; i++){
//     if(niz[i]!==unos){
//         niz2.push(niz[i])
//     }
// }

// console.log(niz2)

niz = [2,3,4,1,20,23,16,33,44]


 max = Math.max.apply(null, niz);
 min=Math.min.apply(null,niz);

console.log(`Najveci broj niza je ${max}  najmanji je  ${min}`)

niz_dva = [2,3,4,1,20,23,16,33,44]
niz2 = []

for(i=0; i<niz_dva.length; i++){
    if(max !== niz_dva[i])
    {
        niz2.push(niz_dva[i]);
    }
}

max2= Math.max.apply(null,niz2);
console.log(`Drugi najveci broj niza je ${max2}`);

razlika = max - min;
console.log(`Razlika najmanjeg i najvecedg broja u nizu je ${razlika}`)


//28ZADATAK !
//dvazadatka



// unos = Number(prompt("Unesite broj za proveru jednakosti"))


// var stanje = false;
// console.log(niz2)
// for(i=0; i<niz2.length; i++){
//     if(niz2[i] === unos){
//         stanje = true;
//     }  
// }

// if(stanje === true){
//     console.log("Postojeci broj")
// }
// else{
//     console.log("Nema broja")
// }


// prviNiz = [2,3,4]
// drugiNiz = [2,3,4,4]
// provera = []


// for(i=0; i<prviNiz.length; i++){
 
//    provera.push(prviNiz[i])
// }

// for(j=0; j<drugiNiz.length; j++){
//     provera.push(drugiNiz[j])
// }

// console.log(provera)

// if(prviNiz.length === drugiNiz.length){
//     console.log("Nizovi su jednaki")
// }
// else{
//     console.log("Nizovi nisu jednaki")
// }

