//ovo je reposn meni

const mobileMenu = () => {
  let menu = document.querySelector(".header ul");
  let btn = document.querySelector(".header button");
  if (btn.innerText === "MENU") {
    menu.style.display = "block";
    btn.innerText = "CLOSE";
  } else {
    menu.style.display = "none";
    btn.innerText = "MENU";
  }
};

//ovo je galedrija

let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");
let imgNum = 0;


console.log(pictures);

const moveRight = () => {
  displayNone(pictures);
  imgNum++;
  if (imgNum === pictures.length) {
    imgNum = 0;
  }
  pictures[imgNum].style.display = "block";
};

const moveLeft = () => {
  displayNone(pictures);
  imgNum--;
  if (imgNum === -1) {
    imgNum = pictures.length - 1;
  }

  pictures[imgNum].style.display = "block";
};


rightBtn.addEventListener("click", moveRight);

leftBtn.addEventListener("click", moveLeft);

const displayNone = (pictures) => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};
//portofolijo odabir ..
const portfolioSort = (button) =>{
    let categorty = button.getAttribute ('data-category')
    let portfoliItems= document.querySelectorAll('.portfolio-single-item');
    portfoliItems.forEach((item) => {
        item.style.display='none';
    })

    if(categorty === 'sve'){
        portfoliItems.forEach((item) => {
            item.style.display='block';
        })
    }

    portfoliItems.forEach((item)=>{
        if(item.getAttribute('data-category').includes(categorty)){
            item.style.display= 'block'
        }
    })

}

const openModal = () =>{
    let modalWindow = document.querySelector('.popup-modal')
    let overlay = document.querySelector('.overlay')
    overlay.style.display='block'
    modalWindow.style.display = 'block'
}

const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal')
    let overlay = document.querySelector('.overlay')
    overlay.style.display='none'
    modalWindow.style.display = 'none'
}
 