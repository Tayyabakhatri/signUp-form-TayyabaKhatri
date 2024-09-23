


var btn = document.getElementById("button");
var users = [];


btn.addEventListener('click', function () {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var birthDay = document.getElementById("birthdayDate");
    var phoneNumber = document.getElementById("phoneNumber");
    var password = document.getElementById("password");
    var emailAddress = document.getElementById("emailAddress");

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

    users.push(userobj);
    localStorage.setItem('usersData', JSON.stringify(users));
    //getting forms by id
    var signUp = document.getElementById("signUpForm");
    var login = document.getElementById("loginPage");
    //managing display
    signUp.style.display = "none";
    login.style.display = "block";

    firstName.value = "";
    emailAddress.value = "";
    phoneNumber.value = "";
    birthDay.value = "";
    lastName.value = "";
    password.value = "";
});



