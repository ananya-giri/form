document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneNumberError = document.getElementById('phoneNumberError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Reset error messages
        fullNameError.textContent = '';
        emailError.textContent = '';
        phoneNumberError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';

        // Validate Full Name
        if (fullName.value.trim().length < 5) {
            fullNameError.textContent = 'Name must not be less than 5 characters.';
            isValid = false;
        }
        if (fullName.value == "") {
            fullNameError.textContent = 'Name cannot be blank';
            isValid = false;
        }

        // Validate Email ID
        if (!email.value.includes('@')) {
            emailError.textContent = 'Enter a valid email ID.';
            isValid = false;
        }

        // Validate Phone Number
        if (phoneNumber.value === '123456789' || !/^\d{10}$/.test(phoneNumber.value)) {
            phoneNumberError.textContent = 'Enter a valid 10-digit phone number.';
            isValid = false;
        }

        // Validate Password
        if (password.value === 'password' || password.value === fullName.value || password.value.length < 8) {
            passwordError.textContent = 'Password is not strong.';
            isValid = false;
        }

        // Validate Confirm Password
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Additional event listeners for real-time validation
    fullName.addEventListener('input', function() {
        if (fullName.value.trim().length >= 5) {
            fullNameError.textContent = '';
        }
    });

    email.addEventListener('input', function() {
        if (email.value.includes('@')) {
            emailError.textContent = '';
        }
    });

    phoneNumber.addEventListener('input', function() {
        if (/^\d{10}$/.test(phoneNumber.value) && phoneNumber.value !== '123456789') {
            phoneNumberError.textContent = '';
        }
    });

    password.addEventListener('input', function() {
        if (password.value !== 'password' && password.value !== fullName.value && password.value.length >= 8) {
            passwordError.textContent = '';
        }
    });

    confirmPassword.addEventListener('input', function() {
        if (password.value === confirmPassword.value) {
            confirmPasswordError.textContent = '';
        }
    });
});
