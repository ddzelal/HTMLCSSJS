const form  = document.getElementById("form")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const loginBtn = document.getElementById('loginBtn')
const registerBtn = document.getElementById('registerBtn')
const deleteBtn = document.getElementById('deleteBtn')
const showUsersBtn = document.getElementById("showUsersBtn")
const usersContainer = document.getElementById("users")



const firebaseConfig = {
    apiKey: "AIzaSyBw8M82EEcQCRZgjQdRDXM0ah_XR2Xlbqs",
    authDomain: "project1-4f498.firebaseapp.com",
    databaseURL: "https://project1-4f498-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project1-4f498",
    storageBucket: "project1-4f498.appspot.com",
    messagingSenderId: "821375017002",
    appId: "1:821375017002:web:6cda31265a4d175de62353"
  };

//   firebase.initializeApp(firebaseConfig);
  

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("fomData")


registerBtn.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

//   //Get Form Values
//   let firstName = document.getElementById('fname').value
//   let lastName = document.getElementById('lname').value
//   let country = document.getElementById('country').value
  //Save Form Data To Firebase
  if(!emailInput.value.includes("@")||passwordInput.value.length<6){
      alert("Unos nije ispravan,ne mozete kreirati user-a")
      return
  }

  let isValid = true
  firestore.collection("fomData").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      const user = doc.data()
      if(user.email===emailInput.value){
          isValid=false
      }

  })


if(!isValid){
    alert("Vec postoji user sa unetim emailom")
    return
}

  db.doc().set({
    email: emailInput.value,
    password: passwordInput.value,
  }).then( () => {
    console.log("Data saved")
    emailInput.value=""
              passwordInput.value=""

  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})

});


loginBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  console.log("radi")

  firestore.collection("fomData").get().then((querySnapshot) => {
      let isValid = false
    querySnapshot.forEach((doc) => {
        const user = doc.data()
        if(user.email===emailInput.value&&user.password===passwordInput.value){
            isValid=true
        }

    })

    if(isValid){
        window.location.replace('/sajtNit/')
    }else{
        alert("Login nije validan")
    }
});
})


deleteBtn.addEventListener("click",(e)=>{
  e.preventDefault()

    firestore.collection("fomData").get().then((querySnapshot) => {
        let foundUserId = false
      querySnapshot.forEach((doc) => {
          const user = doc.data()
          if(user.email===emailInput.value&&user.password===passwordInput.value){
              foundUserId = doc.id
          }
  
      })
  
      if(foundUserId){
          db.doc(foundUserId).delete().then(()=>{
              alert("User uspesno izrisan")
              emailInput.value=""
              passwordInput.value=""

          })
      }else{
          alert("User nije pronadjen")
      }
  });
})

let counter = 0
showUsersBtn.addEventListener("click",()=>{
  if(counter===0){

    firestore.collection("fomData").get().then(querySnapshot=>{
      querySnapshot.forEach(user=>{
        const el = document.createElement("p")
        el.innerText = user.data().email
        users.appendChild(el)
      })
    })
    counter=1

  }else{
    users.innerHTML=""
    counter=0
  }
  
})