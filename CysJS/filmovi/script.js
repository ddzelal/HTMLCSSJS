nalogTrosak = 0;


function kupiFilm(element){

    element.setAttribute('disabled','true');
    element.innerText= 'Kupljeno';
    mainEl = element.closest('.kocke')
    let CENAFilma = mainEl.querySelector('.cenaFilma').innerText;
    CENAFilma = CENAFilma.substring(0);
    CENAFilma = parseInt(CENAFilma);
    nalogTrosak+=CENAFilma;
    console.log(nalogTrosak)

  
    document.querySelector('.total').innerText = `Total: $${nalogTrosak}`
    
}

