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
        let inputName = curentInput.getAttribute('name')
        if(inputvalue.length > 4){
            errors[inputName] = [];
            switch(inputName){
                case 'ime_prezime':
                    let validation = inputvalue.trim()
                    validation = validation.split(" ");
                    if(validation.length < 2){
                        errors[inputName].push('Moras napisati ime prezime')
                    }
                    break;
                    case 'email':
                        if(!validateEmail(inputvalue)){
                            errors[inputName].push('Neisprvna email adresa')
                        }
                        break;
                    case 'ponovi_lozinku':
                        let loznika = document.querySelector('input[name="lozinka"]').value;
                        if(inputvalue !== loznika){
                            errors[inputName].push('loznike se ne poklapaju')
                        }
                    break;

            }
        }else {
            console.log(inputvalue);
            errors[inputName] = ['Polje ne moze imati manje od 5 karaktera']
        }

        populateErrors()
    })

    const populateErrors = () => {
        for(let elem of document.querySelectorAll('ul')){
            elem.remove();
        }

        for(let key of Object.keys(errors)){
            let input = document.querySelector(`input[name=${key}]`)
            let parentElement = input.parentElement;
            let errorsElement = document.createElement('ul')
            parentElement.appendChild(errorsElement)

            errors[key].forEach(error => {
                let li = document.createElement('li')
                li.innerText = error;

                errorsElement.appendChild(li)
            })

        }
    }
})

const validateEmail = email => {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        return true;
    }
    else{
        return false;
    }
}