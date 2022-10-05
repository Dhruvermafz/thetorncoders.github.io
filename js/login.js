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


// var loginFormDB = firebase.database().ref("loginForm");

// document.getElementById("loginForm").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();
//   var email = getElementVal("email");
//   var pass = getElementVal("pass");

//   saveMessages(email, pass);
//   //   reset the form
//   document.getElementById("loginForm").reset();
// }

// const saveMessages = (email, pass) => {
//   var newloginForm = loginFormDB.push();

//   newloginForm.set({
//     email: email,
//     pass: pass
//   });
// };

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };

function match()
{
    
   email= document.getElementById("txtEmail").value;
   password= document.getElementById("txtPassword").value;


   firebase.database().ref('/Record/'+email).on('value',function(snapshot){ 
    let result = password.match(snapshot.val().Password);
         
                    if(result==null)
                      {
                        alert("wrong user id or pwd");
                          
                      }
                      else
                      {

                        window.location.href="index.html?verma="+snapshot.val().Name;
                      }
                               
                           }) ;

 }

function clear()
{
    document.getElementById("txtName").value="";
    document.getElementById("txtEmail").value="";
    document.getElementById("txtPassword").value="";
}

