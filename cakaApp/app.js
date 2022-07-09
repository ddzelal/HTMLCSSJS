const farenhajt = 2;
const kelvin = 2;


const unos = document.querySelector('.inputUnos')
const bigDiv = document.querySelector('.right')

unos.addEventListener('change',()=> {
    if(unos.value === ""){
        return
    }

    const cValue = Number(unos.value) > 50 ? 50 : Number(unos.value) 
    document.querySelector('#celsius .bg_celsius').style.height = `${cValue}%`
    if (cValue < 0) {
        document.querySelector('#celsius .bg_celsius').classList.add('my_bg_cold')
    } else {
        document.querySelector('#celsius .bg_celsius').classList.add('my_bg_hot')
    }

    const fValue = Number(unos.value) * 1.8 > 50 ? 50 : Number(unos.value) * 1.8
    document.querySelector('#farenheit .bg_farenheit').style.height = `${fValue}%`
    if (cValue < 0) {
        document.querySelector('#farenheit .bg_farenheit').classList.add('my_bg_cold')
    } else {
        document.querySelector('#farenheit .bg_farenheit').classList.add('my_bg_hot')
    }

    
    const kValue = Number(unos.value) + 2.73 > 50 ? 50 : Number(unos.value) + 2.73
    document.querySelector('#kelvin .bg_kelvin').style.height = `${kValue}%`
    if (cValue < 0) {
        document.querySelector('#kelvin .bg_kelvin').classList.add('my_bg_cold')
    } else {
        document.querySelector('#kelvin .bg_kelvin').classList.add('my_bg_hot')
    }
})

function setMesureDash() {
    for (let i = 0; i < 10; i++) {
        el = document.createElement('span')
        el.innerHTML = i * 5
        el.style.top = `${50 - (i * 5)}%`
        if (i % 2 === 0) {
            el.style.width = '70%'
        }
        document.querySelector('.mesure').appendChild(el)
    }
    for (let i = 1; i < 10; i++) {
        el = document.createElement('span')
        el.innerHTML = i * 5
        el.style.top = `${50 + (i * 5)}%`
        if (i % 2 === 0) {
            el.style.width = '70%'
        }
        document.querySelector('.mesure').appendChild(el)
    }
}

setMesureDash()