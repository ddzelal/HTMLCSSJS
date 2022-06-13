

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
    

// arr = [[45,12],[55,21],[19,-2],[55,10]]
//   output=[]
  
//   for(i=0; i<arr.length; i++){
//     a=0;
//     b=0;
//     for(j=0; j<arr[i].length; j++){
        
//       a=arr[i][j]
//       b=arr[i][j+1]
//       console.log(a,b)
//       if(a >= 55 && b >= 7){
//         output.push("Senior")
//         break;
//       }
//       else {
//         output.push("Open")
//         break;
//       }
      
//     }
    
//   }
//   novi = output.map(el => el = "Open")
//   console.log(output,novi)


arr =['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'] ;
  
  for(i=0; i<arr.length; i++){
    if(arr[i] === "wolf"){
      a=arr[i-1]
      console.log(arr[i-1],i-1)
    }
  }

  