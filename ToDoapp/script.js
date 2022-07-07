console.log('Active');
let ToDoList = document.querySelector('.ToDoList')

openBtn = document.querySelector('.openBtn').addEventListener('click', () =>{
createElemnt()
   
})

let nesto = document.querySelector('.openDiv')

let i=0;
function createElemnt(){
    const newDiv = document.createElement('div')
    newDiv.classList.add("ToDoList")
    newDiv.innerText+=`${i+1}`
    i++;
    nesto.appendChild(newDiv)
    const NewBtn = document.createElement('button')
    newDiv.appendChild(NewBtn)
    const DrugiBtn = document.createElement('button')
    newDiv.appendChild(DrugiBtn)
    DrugiBtn.innerText='izmeni me?'
    NewBtn.innerText = 'Obrisi me smradu'
    NewBtn.addEventListener('click',e=> {
        newDiv.remove();
    
    })

    DrugiBtn.addEventListener(edit(DrugiBtn))
    
}


edit = (el) => {

    el.addEventListener('click', ()=> {
        el.innerText='jesi l ozebo,mene da menjas?'
    })

}
 