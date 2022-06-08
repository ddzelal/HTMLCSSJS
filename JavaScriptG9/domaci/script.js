



broj = [1,2,3,2,1]
jednak = ""
konacno=false;

for (i=0; i<broj.length; i++){
    // console.log(broj[i])
    jednak+=broj[i]
    if(broj[0] === broj[4] && broj[1] === broj[3]){
    
        konacno = true;

    }
    
}


if(konacno){
    console.log("Broj je jednak:",jednak)
}
else{
    console.log("Broj nije jednak")
}

function prover (i)
{
    if(broj[0] === broj[4] && broj[1] === broj[3]){
    
        konacno = true;

    }

}

broj.forEach(element => {
    if(prover){
        return konacno = true;
    }
});

console.log(broj)
    
//Drugi zadatak


var longestCommonPrefix = function(strs) {
    let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
    
    for (let str of strs) {
        while (str.slice(0, prefix.length) != prefix) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
};

let res = longestCommonPrefix(["flower","flow","flight"]);

console.log(res);


console.log("---------------")


niz = ["flower","flow","flight"]

for(i=0; i<niz.length; i++){
    for(j=0; j<niz[i].length; j++){

        // if(niz[i=0] && niz[i=2] && niz[i=3] === niz[j]){
        //     console.log("jedds")
        // }
        
        
        console.log(niz[i][j],i,j)
    }
    console.log("-----------")
}


niz.forEach((item,index)=> {
    if(index[0],index[1],index[2] ){
        console.log("tjt bravo  ",index)
    }
    console.log(index,item[0],item[1])

    
})

// let proveraNiza = niz.every((el) => e)

// console.log(proveraNiza)

