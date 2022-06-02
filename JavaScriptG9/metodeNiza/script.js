


//Metoda concat(); spaja nizove


niz1 = [1,2,3,4,5]
niz2 = [2,4,5,72,23]
nizSpajanja = niz1.concat(niz2);

// console.log(nizSpajanja)



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
//funkcija find (); trazi odgovarajuci element sa uslovom u ovom slucjau ispisace  samo prvi el koji je veci od 5;

// const nizTrazi = nizSpajanja.find(el => el >5)

// console.log(nizTrazi)

//metoda map () nadogradice svaki odredjeni element funkcijom koju smo pozvali .

// const nizMap = nizSpajanja.map(mnozenje)


// function mnozenje (num){
//     return num * 10
// }


// console.log(nizMap)

console.log(nizSpajanja)

let nizReduce = nizSpajanja.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

console.log(nizReduce)

//metoda find () trazi odgovarajuci element sa postavljenim uslovom! i ispisuje samo prvi nadjeni element

const fruits = ["Banana", "Orange", "Apple", "Mango"];

trazi = fruits.find(el => el === 'Apple');

console.log(trazi)

 //metoda filter() filtrira sve elemente koji ispunjavaju uslov

nizFilter = nizSpajanja.filter(el => el > 5)
console.log(nizFilter)

//Ovako proveravamo da li imamo duplih elemenata

const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));

console.log(duplicates);

//tst
