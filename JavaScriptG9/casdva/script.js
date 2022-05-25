




broj = '2324532'
Nbroj = ''


for(i=0; i<broj.length; i++){
    if(broj[i] % 2 === 0){
        Nbroj = "-" + broj[i];
    }
    Nbroj+= broj[i]
    
}

console.log(Nbroj)