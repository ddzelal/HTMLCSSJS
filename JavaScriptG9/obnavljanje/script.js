

niz1=[[1,2,3],[4,5,6],[7,8,9]]
niz2=[];
str = ""


for (i=0; i<niz1.length; i++){
    suma = 0;
    red = " ";
    for(j=0; j < niz1[i].length; j++){
        suma+=niz1[j][i]
        
        red += niz1[i][j]
        
       
        
    }
     niz2.push(suma);
    // console.log(suma)
    // console.log(red)
}

// console.log(niz2)
niz1.push(niz2)
// console.log(niz1)


for (i=0; i<niz1.length; i++){
    suma = 0;
    red = " ";
    for(j=0; j < niz1[i].length; j++){
        
        red += niz1[i][j]
        red+= " "
        
    }
    
    console.log(red)
}




console.log("---------------------------")
/////drugi zadatak 





nizGlavni = [[1,2,3],[4,5,6],[7,8,9]]


red = " ";


for (i=0; i<nizGlavni.length; i++){
    
    red = " ";
    for(j=0;  j< nizGlavni[i].length; j++){
        // if(nizGlavni[i] === '1' ){
        //     red+= " ";
        // }
        
        red += nizGlavni[i][j]
        
       
        
    }      
        
    console.log(red)
}



// console.log("-----------------")

// nizTest = [[1,2,3],[4,5,6],[7,8,9]]


// brojac=0;

// for(i=0,j=0; i<nizTest.length; i++){
//     console.log(nizTest[i][j])
    

    
        
        
//     }
    
        

    
    
    
       
        

        
      
        
        
    

