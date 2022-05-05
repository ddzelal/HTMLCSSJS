

for(i=1; i <=3; i++){

console.log("python")

    for(j=1; j<=3; j++){

    console.log("je super")

    }

}

broj = 20;   //ispisi sve parne brojeve 

for (i=1; i<=broj; i++)
{
    if(i%2===0){
        console.log(i)
    }


}


ispis = 10;  // ispis svih brojeva do unetog broja
for(i=1; i<=ispis; i++){
    console.log(i)
}


proizvoljanbroj = 21;
parni=0;
neparani=0;

for(i=1; i<=proizvoljanbroj; i++){

    if(i%2===0){
        parni = parni +i;
        console.log(i,"proizvod je paran i zbir mu je",parni);
    }
    else if (i%2===1)
    {
        neparani = neparani +i;
        console.log(i,"proizvod je neparan i zbir mu je ",neparani);
    }


}

nazad = 8;

for(i=8; i>=1; i--){
    console.log(i);
}