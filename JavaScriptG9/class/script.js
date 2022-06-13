class Covek{
    constructor(i,p,g){
        this.ime = i ;
        this.prezime = p;
        this.godine = 2022 - g;
    }
}




    const CovekPrvi = new Covek (prompt("Unesi ime"),prompt("Unesi prezime"),Number(prompt("Unesi godisted")))






console.log(CovekPrvi);