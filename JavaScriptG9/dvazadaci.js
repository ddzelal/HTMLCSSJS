

unos = Number(prompt("Koji zadatak zelis?"))


switch(unos){
    case 1:
        stranica_a=Number(prompt("Unesi stranicu a"))
        stranica_b=Number(prompt("Unesi stranicu b"))
        stranica_c=Number(prompt("Unesi stranicu c"))
        // a = stranica_a + stranica_b;
        // b = stranica_c + stranica_a;
        // c =

        console.log("Uneli ste straniu a:",stranica_a,"stranicu b:",stranica_b,"stranicu c:",stranica_c)

        if (stranica_a === stranica_b & stranica_a === stranica_c & stranica_b === stranica_c){
                console.log("Uneli ste jednakostranicni toougao")
        }
        else if(stranica_a !== stranica_b & stranica_a !== stranica_c & stranica_b !== stranica_c){
                console.log("Uneli ste raznostranicni trougao")
        }
        else{
            console.log("Uneli ste jednakokraki trougao")
        
        }
           
        break;

    case 2:

     br_ucenika = Number(prompt("Koliko zelis ucenika"))
     visina = [];

     for(i=0; i<br_ucenika; i++){
         v = Number(prompt("visina ucenika?"))
        visina.push(v)
        
         
     }
     console.log(visina)

     minv = Math.min.apply(Math,visina)
     maxv = Math.max.apply(Math,visina)
     console.log("Najnizi ucenik je visok:",minv,"CM","a najvisociji je:",maxv,"CM")
       
  


        break;

    case 3:
        brojac  = Number(prompt("Koliko zelis ucenika?"))
        ucenici=[];

        for(i=0; i<brojac; i++){
            unos_imena = prompt("Unesite ucenike")
            ucenici.push(unos_imena)
        }
        
        // ucenici.random()
        // var item = ucenici[Math.floor(Math.random() * ucenici.length)];
        console.log(ucenici)

       



        break;







}