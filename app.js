


var btn = document.getElementById("button");
var users = [];


btn.addEventListener('click', function () {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var birthDay = document.getElementById("birthdayDate");
    var phoneNumber = document.getElementById("phoneNum");
    var password = document.getElementById("password");
    var emailAddress = document.getElementById("emailAddress");
    console.log(firstName.value,lastName.value,birthDay.value,phoneNumber.value,password.value,emailAddress.value)

    if (!firstName.value || !lastName.value || !birthDay.value || !phoneNumber.value || !password.value || !emailAddress.value) {
        alert("Please fill in all fields.");
        return;
    }

    var userobj = {
        name: firstName.value,
        lastName: lastName.value,
        birthday: birthDay.value,
        phoneNumber: phoneNumber.value,
        emailAddress: emailAddress.value,
        password: password.value
    };
    var users = JSON.parse(localStorage.getItem("usersData")) 
    users.push(userobj);
    localStorage.setItem('usersData', JSON.stringify(users));
    window.location.href = "login.html"
    firstName.value = "";
    emailAddress.value = "";
    phoneNumber.value = "";
    birthDay.value = "";
    lastName.value = "";
    password.value = "";
});
var login=document.getElementById("login")
login.addEventListener('click',()=>{
    swal({
        title: "Sweet!",
        text: "Here's a custom image.",
        imageUrl: "images/thumbs-up.jpg"
      });
})


