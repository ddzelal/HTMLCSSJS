class Validator {
    constructor(config){
        this.elemntsConfig = config;
        this.errors = {}

        this.generateErrorsObject();
        this.inputListener();
    }

    generateErrorsObject(){
        for(let filed in this.elemntsConfig){
            this.errors[filed] = [];
        }
    }

    inputListener(){
        let inputSelector = this.elemntsConfig;
        for(let field in inputSelector){
            let el = document.querySelector(`input[name="${field}"]`)

            el.addEventListener('input',this.validate.bind(this))
        }
    }

    validate(e){
        let elFields = this.elemntsConfig;
        let filed = e.target;
        let filedName = filed.getAttribute('name');
        let filedValue = filed.value;

        this.errors[filedName]= []

        if(elFields[filedName].requred){
            if(filedVale === ''){
                this.errors[filedName].push('Polje je prazno')
            }
        }
        if(elFields[filedName].email){
            if(!this.validateEmail(filedValue)){
                this.errors[filedName].push('Neispravna email adresa')
            }
        }

        if(filedValue.length < elFields[filedName].minlength || filedValue.length > elFields[filedName].maxlength){
            this.errors[filedName].push(`Polje mora imati min ${elFields[filedName].minlength} i max ${elFields[filedName].maxlength}`)

        }

        if(elFields[filedName].matching){
            let matcingEl = document.querySelector(`input[name="${elFields[filedName].matching}]`)
            if(filedValue !== matcingEl.value){
                this.errors[filedName].push('Lozinke se ne poklapaju')
            }
            if(this.errors[filedName].length === 0){
                this.errors[filedName] = []
                this.errors[elFields[filedName].matching]= []
            }

            this.populateErrors(this.errors);
            
        }}

        populateErrors(errors){
            for(const elem of document.querySelectorAll('ul')){
                elem.remove();
            }

            for(let key of Object.keys(errors)){
                let parentElement = document.querySelector(`input[name="${key}"]`)
                let errorsElement = document.createElement('ul');
                parentElement.appendChild(errorsElement);

                errors[key].forEach(error => {
                    let li = document.createElement('li')
                    li.innerText=errors;
                    errorsElement.appendChild(li)
                })
            }
        }

       

             validateEmail(email){

            if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
                return true;
            }

            else{
                return false;
            }
        }
        

}
