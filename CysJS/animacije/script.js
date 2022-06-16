let textTag = document.querySelector('.section1 h1')
let text = textTag.textContent;
console.log(textTag)

textTag.className = "fadeMove"
let splittedText = text.split('');
textTag.innerHTML = '';
for (let i = 0; i < splittedText.length; i++){
    if(splittedText[i]=== " "){
        splittedText[i]= "&nbsp"
    }
    textTag.innerHTML+= `<span>${splittedText[i]}</span>`
}
let spans = textTag.querySelectorAll('span')
let k = 0;
let interval =
setInterval(()=>{
    
    let singleSpan = spans[k]
    singleSpan.className = "fadeMove"

    if(k === spans.length){
        clearInterval(interval)
    }
    k++
},70)

let animationWidth = 0;
let border = document.querySelector('.border-line')
window.onscroll = () => {

    if(this.oldScroll > this.scrollY){
        animationWidth-= 1.5;
    }
    else {
        animationWidth+=1.5;
    }
    if(animationWidth >= 100){
        animationWidth = 100;
    }
    if(animationWidth <= 0){
        animationWidth = 100;
    }if(animationWidth <= 0){
        animationWidth=0;
    }

   border.style.width= animationWidth + '%'

   this.oldScroll = this.scrollY;
}