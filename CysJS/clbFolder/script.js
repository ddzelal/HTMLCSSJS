
document.querySelector('#fetchBtn').addEventListener('click', e => {
    e.preventDefault()
    let id = document.querySelector('#userID').value;

    console.log(id);

    let r = fetch('https://62b5d68042c6473c4b3b614e.mockapi.io/testApi/appjs/user/' + id)
        .then(response => response.json()).then(data => {
            console.log(data);

            let podaci = document.querySelector('#podaci');
            podaci.innerHTML = `<p><b>${data['name']}<br></br>${data[id]}</b></p>`;

        }).catch(error => {
            alert(error)
        })

})


// let testFetch =  fetch('https://62b5d68042c6473c4b3b614e.mockapi.io/testApi/appjs/user').then(async(result => {
//     res = await result.json();
//     console.log(res);
// })).catch((err) => {
//     console.log(err,'Neuspesno');
// })

let fetchTest = fetch('https://62b5d68042c6473c4b3b614e.mockapi.io/testApi/appjs/user');

function konvert (odgS){
    return odgS.json();
}


let converP = fetchTest.then(konvert)
console.log(converP);



fetch('https://62b5d68042c6473c4b3b614e.mockapi.io/testApi/appjs/user'  ).then(odgovrServera => {
    console.log(odgovrServera);
    res = odgovrServera.json();
    return res
}).then(vidiPodatke => {
    console.log(res);
}).catch(greska => {
    console.log('doslo je do greske',greska);
})


function main(){
    fetch('https://62b5d68042c6473c4b3b614e.mockapi.io/testApi/appjs/user').then(res => res.json()).then(data =>{
        
    })
}

 


//sta radis




//TestiramoOvajLinux
//test

