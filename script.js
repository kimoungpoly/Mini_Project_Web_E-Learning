

// for mobile menu
document.addEventListener("DOMContentLoaded", function() {    
        var iconBars = document.getElementById("icon-bars");
        var iconTimes = document.getElementById("icon-times");

        var mobileMenu = document.getElementById("mobile-menu");
        
        iconBars.addEventListener("click", function() {
            mobileMenu.classList.toggle("hidden");
            iconBars.classList.add("hidden");
            iconTimes.classList.remove("hidden");
        });

        
        iconTimes.addEventListener("click", function() {
            mobileMenu.classList.toggle("hidden");
            iconBars.classList.remove("hidden");
            iconTimes.classList.add("hidden");
        });
    });

        // for login and register function
        const toggleToRegisterButton = document.getElementById('toggleToRegisterButton');
        const toggleToLoginButton = document.getElementById('toggleToLoginButton');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');

        toggleToRegisterButton.addEventListener('click', function() {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        });

        toggleToLoginButton.addEventListener('click', function() {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        });

        function validateLoginForm() {
            const email = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginError = document.getElementById('loginError');
            if (email === '' || password === '') {
                loginError.classList.remove('hidden');
                return false;
            } else {
                loginError.classList.add('hidden');
                return true;
            }
        }

        function validateRegisterForm() {
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const createPassword = document.getElementById('create_password').value;
            const confirmPassword = document.getElementById('confirm_password').value;
            const agree = document.getElementById('agree').checked;
            const registerError = document.getElementById('registerError');

            if (fullname === '' || email === '' || createPassword === '' || confirmPassword === '' || !agree) {
                registerError.classList.remove('hidden');
                return false;
            } else {
                registerError.classList.add('hidden');
                return true;
            }
        }


    