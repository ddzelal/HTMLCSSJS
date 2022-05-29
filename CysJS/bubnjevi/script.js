const klik = ()=>{

}
let btns = document.querySelector('button')


    // btns.forEach(function(btn) {
    //     btn.addEventListener("click",function (el) {
    //         console.log(el)
    //         console.log("Kliknuo");
    //     });
    
    //     });

let link = document.querySelector('#link');
link.addEventListener("click",(event)=>{
    event.preventDefault();
console.log(event.target)
})

let form = document.querySelector('form');

form.addEventListener("submit",(elemnt) =>{
    elemnt.preventDefault();
    console.log('test')
})


let scr = document.querySelector('select');

scr.addEventListener("change",(event) =>{
    console.log(event.target.value)
})

window.addEventListener("resize",(elemnt) =>{

})

let input = document.querySelector('input');

input.addEventListener("keydown",(elemnt) => {
    console.log(elemnt.key)

})

input.addEventListener('mousemove',(elemnt) =>{
    console.log("mis je pom")

})

//test