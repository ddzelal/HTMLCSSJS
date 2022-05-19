


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
unos = Number(prompt("unesi broj"))
niz = [1,2,3,4,5,6,7,8]
niz2=[];

for(i=0; i<niz.length; i++){
    if(niz[i]!==unos){
        niz2.push(niz[i])
    }
}

console.log(niz2)
    


