

odabir = prompt("Koji zadatak zelis?");
odabir_p = parseInt(odabir)


switch(odabir_p){

    case 1: 
        alert('Odabir zadatka 1');

        for(i=1; i <=3; i++){

        console.log("python")

        for(j=1; j<=3; j++){

        console.log("je super")

        }
        

            }
    break;
     case 2:
        broj = 20;   //ispisi sve parne brojeve 

        for (i=1; i<=broj; i++)
        {
            if(i%2===0){
                console.log(i)
            }
        
        
        }
    break;        

    case 3:

        ispis = 10;  // ispis svih brojeva do unetog broja
        for(i=1; i<=ispis; i++){
        console.log(i)
        }

    break;

    case 10:
        parni_br = []
neparni_br = []
broj_br = prompt("Koliko zelis brojeva?")
parsBr = parseInt(broj_br)
// proizvoljanbroj = 21;
parni=0;
neparani=0;

for(i=1; i<=parsBr; i++){

    if(i%2===0){
        parni = parni +i;
        console.log(i,"proizvod je paran i zbir mu je",parni);
        parni_br.push(i)
    }
    else if (i%2===1)
    {
        neparani = neparani +i;
        console.log(i,"proizvod je neparan i zbir mu je ",neparani);
        neparni_br.push(i)
    }
    


}

    console.log("parni brojevi su",parni_br,"Neparni brojevi su:",neparni_br);
    break;
 case 5:

nazad = 8;

for(i=8; i>=1; i--){
    console.log(i);
    }

    
    break;

}

unBroj = Number(prompt("Unesi broj"))

for (i=0; i<=unBroj; i++){
    if(broj % i === 0){
        console.log(i);
    }
    
}




