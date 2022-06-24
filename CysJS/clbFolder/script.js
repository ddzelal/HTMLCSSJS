
document.querySelector('#fetchBtn').addEventListener('click',e => {
    e.preventDefault()
    let id = document.querySelector('#userID').value;

    console.log(id);

    let r =fetch('https://62b5d68042c6473c4b3b614e.mockapi.io/testApi/appjs/user/' + id)
.then(response => response.json()).then(data => {
    console.log(data);

   let podaci = document.querySelector('#podaci');
   podaci.innerHTML = `<p><b>${data['name']}<br></br>${data[id]}</b></p>`;
    
}).catch(error => {
    alert(error)
})

})



