document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('SignUpForm');
    const inputUsername = document.getElementById('inputUsername');
    const inputAge = document.getElementById('inputAge');
    const inputEmail = document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');
    const confirmPassword = document.getElementById('confirmPassword');

    const inputUsernameFB = document.getElementById('inputUsernameFB');
    const inputAgeFB = document.getElementById('inputAgeFB');
    const inputEmailFB = document.getElementById('inputEmailFB');
    const inputPasswordFB = document.getElementById('inputPasswordFB');
    const confirmPasswordFB = document.getElementById('confirmPasswordFB');

    inputUsername.addEventListener('input', () => {
        const username = inputUsername.value;
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,25}$/;

        if(username === ""){
            inputUsernameFB.textContent = "";
        }else if(!pattern.test(username)){
            inputUsernameFB.textContent = "Condition not satisfied"; 
        }else{
            inputUsernameFB.textContent = "";
        }
    });

    inputAge.addEventListener('input', () => {
        const age = inputAge.value;
        if(age === ""){
            inputAgeFB.textContent = "";
        }else if(age < 13){
            inputAgeFB.textContent = "You need to be at least 13";
        }else{
            inputAgeFB.textContent = "";
        }
    });

    inputEmail.addEventListener('input', () => {
        
        const email = inputEmail.value;
        if(email.validity.typeMismatch){
            inputEmailFB.textContent = "Invalid Email";
        }else{
            inputEmailFB.textContent = "";
        }
    });

    inputPassword.addEventListener('input', () => {
        const password = inputPassword.value;
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,25}$/;

        if(password === ""){
            inputPasswordFB.textContent = "";
        }else if(!pattern.test(password)){
            inputPasswordFB.textContent = "Weak password!"; 
        }else{
            inputPasswordFB.textContent = "Strong Password!";
        }
    });

    form.addEventListener('submit', (e) => {
        if(!(inputPassword.value === confirmPassword.value)){
            e.preventDefault();
            confirmPasswordFB.textContent = "Password doesn't match!";
        }else{
            confirmPasswordFB.textContent = "";
        }

        if(inputUsername.value === "" || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,25}$/.test(inputUsername.value)){
            e.preventDefault();
        }

        const gen = document.querySelector('input[name = "gender"]:checked');
        if(!gen){
            e.preventDefault();
            document.getElementById('genderFB').textContent = "Required";
        }else{
            document.getElementById('genderFB').textContent = "";
        }
    });
});