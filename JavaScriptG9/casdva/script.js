


// prvi zadatak

// broj = '2326212'
// Nbroj = ''


// for(i=0; i<broj.length; i++){
//     if(broj[i] % 2 === 0){
//         Nbroj +=  '-'
//     }
//     Nbroj+= broj[i]
// }

// console.log(Nbroj)


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


niz = [2,3,12,5,-2,-32,23]
sum = 0;

for(i=0; i<niz.length; i++){
    if(niz[i]>0){
        sum+=niz[i]
    }

}

console.log(sum)