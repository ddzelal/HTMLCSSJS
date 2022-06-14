//the quick brown fox //vratiti The Quick Brown Fox


const toUpperCaseString = (str) => {
    V_str = str.split(" ")
    velikaS = ''
for(i=0; i<V_str.length; i++){
    for(j=0; j<V_str[i].length; j++){
        if(V_str[i][j] === V_str[i][0]){
            velikaS+=V_str[i][0].toUpperCase();
        }
        else{
            velikaS+=V_str[i][j]
        }
        
    }
    
}

return velikaS;
}


console.log(toUpperCaseString("the quick brown fox"))