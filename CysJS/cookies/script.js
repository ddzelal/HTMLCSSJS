document.querySelector('#setCookies').addEventListener('click', e => {
    e.preventDefault();

    let kolacici = document.cookie;
document.cookie = "name=Dzelal"
document.cookie ="test=sta?"

const date = new Date()

let today = date.getTime();
let expires = 30 * 1000;



date.setTime(today + expires)
let new_date = date.toUTCString();
document.cookie=`login=1; expires=${new_date}`


console.log(document.cookie);






})

