let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top')

const  animateHiHatCloced = () => {
    hiHatTop.style.top='171px'
}

const animateCrashOrRide = () =>{
    crashRide.style.transform = 'rotate(0deg) scale(1.5);'
}


window.addEventListener("keydown",(event) =>{

    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`)

    if(!keyElement){
        return;
    }
  
    let audio = document.querySelector(`audio[data-key="${code}"]`)
    audio.currentTimed=0;
    audio.play();

    switch(code){
        case 69:
            break;
        case 82:
            animateCrashOrRide();
            break;
        case 75:
            animateHiHatCloced();
            break;
    }
})

const removeCrashRideTransition = e => {
    if(e.propertyName !== 'transform') return ;

    e.target.style.transform = 'rotate (-7.2deg) scale(1.5)';
}

const removeHiHatTopTransition = e => {
    if(e.propertyName !== 'top') return;
    e.target.classList.remove('playing')

}
let drumKeys = document.querySelectorAll)

crashRide.addEventListener("transitonend", removeCrashRideTransition);
hiHatTop.addEventListener("transitonend", removeHiHatTopTransition);