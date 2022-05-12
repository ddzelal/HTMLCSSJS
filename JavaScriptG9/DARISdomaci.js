odabir = prompt("Koji zadatak zelis?");
odabir_p = parseInt(odabir)


switch(odabir_p){
    case 1:

        broj = "";

        for(i=1; i<10; i++){
            console.log(broj)
            broj = broj + i;
        }
        console.log(broj)





        break;

    case 2:
        
        var i,j;

         br = "";
         rez = [];
         ispis = "";

        for(i=1; i<=5; i++){
            for(j=1; j<=i; j++){
               console.log(i)
                rez = i + `${i}`  
                
               console.log(rez)
            }       
           
        }
        
        

        
    



        break;

    case 3:

        for (i = 1; i <= 7; i++) {
            var res = [];
            for (a = 1; a <= i; a++) {
                res.push(i);
            }
            console.log(res.join(""));
        }
        






}