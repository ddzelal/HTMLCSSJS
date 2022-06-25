let inputs = document.querySelectorAll('input');

let errors = {
    'ime_prezime': [],
    'korisnicko_ime': [],
    'email': [],
    'loznika': [],
    'ponovi_lozinku': []
}

inputs.forEach((el)=>{
    el.addEventListener('change',e => {
        let curentInput = e.target;
        let inputvalue = curentInput.value;
        console.log(inputvalue);
    })
})