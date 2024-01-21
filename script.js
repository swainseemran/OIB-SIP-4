document.addEventListener("DOMContentLoaded", function () {
    let signupBtn = document.getElementById("signupBtn");
    let signinBtn = document.getElementById("signinBtn");
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");

    signinBtn.onclick = function () {
        nameField.style.maxHeight = "0"
        title.innerHTML = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
    }

    signupBtn.onclick = function () {
        nameField.style.maxHeight = "60px"
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
    }

    document.getElementById('signupBtn').addEventListener('click', function () {
        var name = document.getElementById('nameInput').value;
        var email = document.getElementById('emailInput').value;
        var password = document.getElementById('passwordInput').value;

        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        var userData = {
            name: name,
            email: email,
            password: password
        };

        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('passwordInput').value = '';

        alert('User signed up successfully!\nName: ' + userData.name + '\nEmail: ' + userData.email);
    });

    document.getElementById("signinBtn").addEventListener("click", function () {
        document.getElementById("nameInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("passwordInput").value = "";

        alert("User signed in successfully!");
    });
});