
let config = {
    'ime_prezime': {
        requred: true,
        minlength: 3,
        maxlength:50
    },
    'korisnicko_ime': {
        requred: true,
        minlength:5,
        maxlength:50
    },
    'email': {
        requred:true,
        email:true,
        minlength:5,
        maxlength:50

    },
    'broj_telefona': {
        minlength:9,
        maxlength:13
        
    },
    'loznika':{
        requred:true,
        minlength:7,
        maxlength:25,
        matching: 'ponovi_lozinku'
        
    },
    'ponovi_lozinku': {
        requred: true,
        minlength: 7,
        maxlength:25,
        matching: 'lozinka'
    }
}

let validator = new Validator (config)