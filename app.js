

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var birthDay = document.getElementById("birthdayDate");
var phoneNumber = document.getElementById("phoneNumber");
var passward= document.getElementById("passward")
var btn = document.getElementById("button")
var emailAddress = document.getElementById("emailAddress");

document.getElementById("button").addEventListener('click', function() {
    console.log(firstName.value, lastName.value, birthDay.value, phoneNumber.value, emailAddress.value);

    //is method men ham specific keys se user ka data save kerwa skty hen but ye bhi replace kerdeta he .is liye array bnaingy
    // var num=phoneNumber.value
    // var email=emailAddress.value
    // localStorage.setItem('email',JSON.stringify({num,email}))
    //
    var userobj = {
        name:firstName.value,
        lastName: lastName.value,  // Fixed typo here
        birthday: birthDay.value,
        phoneNumber: phoneNumber.value,
        emailAddress: emailAddress.value,
        passward:passward.value
    };
    // Retrieve existing users or initialize an empty array
    var users= JSON.parse(localStorage.getItem('users'))||[]
    // Add new user data to the array
    users.push(userobj)
    // Save the updated array back to local storage
    localStorage.setItem('users', JSON.stringify(users));
   var login= document.getElementById("loginPage")
   login.style.display="block"
   var signUp=document.getElementById("signUpForm")
   signUp.style.display="none"
   btn.disabled=true
   firstName.value="";
   emailAddress.value="";
   phoneNumber.value="";
   birthDay.value="";
   lastName.value="";
   passward.value=""
});
var allUsers = JSON.parse(localStorage.getItem('users'))
console.log(allUsers)
btn.disabled=false


