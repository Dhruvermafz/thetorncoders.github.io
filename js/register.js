var firebaseConfig = {
    apiKey: "AIzaSyANa2BuSy9Jg5jyRTNtgh-Ye3WXYGEAcr8",
    authDomain: "thetorncoders.firebaseapp.com",
    databaseURL: "https://thetorncoders-default-rtdb.firebaseio.com",
    projectId: "thetorncoders",
    storageBucket: "thetorncoders.appspot.com",
    messagingSenderId: "139286346534",
    appId: "1:139286346534:web:6393a88e75f0e40e2f9fe7"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ===== Firebase configuration (end) ==== //

// var regFormDB = firebase.database().ref("regForm");

// document.getElementById("regForm").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var name = getElementVal("name");
//   var email = getElementVal("email");
//   var address = getElementVal("address");
//   var age = getElementVal("age");
//   var pass = getElementVal("pass");

//   saveMessages(name, email, age, address, pass);

 

//   //   reset the form
//   document.getElementById("regForm").reset();
// }

// const saveMessages = (name, email, age, address, pass) => {
//   var newregForm = regFormDB.push();

//   newregForm.set({
//     name: name,
//     email: email,
//     age: age,
//     address: address,
//     pass: pass
//   });
// };

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };

function save()
{
   name= document.getElementById("txtName").value;
   email= document.getElementById("txtEmail").value;
   password= document.getElementById("txtPassword").value;

   firebase.database().ref('/Record/'+email).set(
                            {
                            
                            Name:name, 
                            Email:email,
                            Password:password
                             
                            
                            }
                        ) ;
                        clear();
                        alert("Save successfully")
}

function clear()
{
    document.getElementById("txtName").value="";
    document.getElementById("txtEmail").value="";
    document.getElementById("txtPassword").value="";
}