console.log("Povezan sam");


let klik = document.querySelector('.kliknime')
let text = document.querySelector('.txt')

klik.addEventListener('click',()=> {

    text.innerHTML = Date();
})



arr = [1,2,4,5,6,7,12,23]


var rez = arr.findIndex(arrNew)
console.log(rez);


function arrNew(str){
    return str > 2;
}