




switch(meni = prompt("koji zadatak zelis")){
    case 'x': 

        for(i=1; i <=3; i++){

        console.log("python")

        for(j=1; j<=3; j++){

        console.log("je super")

        }
        

            }
    break;
     case 'y':
        broj = 20;   //ispisi sve parne brojeve 

        for (i=1; i<=broj; i++)
        {
            if(i%2===0){
                console.log(i)
            }
        
        
        }
    break;        

    case 'z':

        ispis = 10;  // ispis svih brojeva do unetog broja
        for(i=1; i<=ispis; i++){
        console.log(i)
        }

    break;

    case 'w':
        parni_br = []
neparni_br = []
proizvoljanbroj = 21;
parni=0;
neparani=0;

for(i=1; i<=proizvoljanbroj; i++){

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
 case 'p':

nazad = 8;

for(i=8; i>=1; i--){
    console.log(i);
}

    
    break;

}





