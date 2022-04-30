godine = prompt("Unesite vase godine");
starost  = 2022 - godine;

console.log("Vi ste rodjeni",godine,"godine i imate",starost, "godine");
if (godine % 400 === 0){
    console.log("Vasa godina rodjenja je prestupna");
}
else if(godine % 100!=0 && godine%4===0){

    console.log("Vasa godina rodjenja je prestupna");
}
else{
    console.log("Vasa godina rodjenja nije prestupna");
}

const var1 = prompt ("Unesite mesec rodjenja i dan rodjenja");


 var2 = var1.split(".");
 if(var2[0] > 12){
     console.log("Nepostojeci mesec")
 }
 else if(var2[1] > 31){
     console.log("Mesec nema toliko dana")
 }
 else{
    console.log ("Datum vaseg rodjenja je",var2[0],"mesec","i dan",var2[1]);
 }

 const meseci = [
    [1,"januar"],
    [2,"februar"],
    [3,"mart"],
     [4,"april"],
      [5,"maj"],
       [6,"jun"],
       [7,"jul"], 
       [8,"avgust"], 
       [9,"septembar"], 
       [10,"oktobmar"], 
       [11,"novembar"], 
       [12,"decemabarar"]
]

meseci.forEach(function(element) {
    for(let i=0; i<element.length; i++){
        if(var2[0] === element[i][0]){
            console.log(element[i][1])
        }
    }
    // console.log(element);
});

// for ( let i=0 ; i < meseci.length ; i++){
//     if (var2[0] === meseci[i][0]){
//         console.log(meseci[i][1])
//     }
// }

// meseci.forEach((element) => {
//     console.log(element);
// });






// console.log(meseci);
 
 

//  console.log(var2);

 
