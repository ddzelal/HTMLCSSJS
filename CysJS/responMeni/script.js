//ovo je reposn meni

const mobileMenu = () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');
    if(btn.innerText === 'MENU'){
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';

    }else{
        menu.style.display = 'none';
        btn.innerText = 'MENU';

    }
    
    
}


//ovo je galedrija


let rightBtn = document.querySelector('#right-btn')
let leftBtn = document.querySelector('#left-btn')
let pictures = document.querySelectorAll('.slider-images img')

let imgNum = 0;

rightBtn.addEventListener('click',() => {
    displayNone(pictures);
    imgNum++;
    if(imgNum === pictures.length){
        imgNum = 0;
    }
    pictures[imgNum ].style.display = 'block';
})

leftBtn.addEventListener('click',() => {
    displayNone();
    imgNum--;
    if(imgNum === -1){
        imgNum = pictures.length - 1;
    }

    pictures[imgNum ].style.display = 'block';
})

const displayNone = (pictures) => {
    pictures.forEach((img) => {
        img.style.display='none'
    })
        
    };
//27:46