function validateSignUpForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var valid = true;
  
    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
  
    // Name validation
    if (name === "") {
      document.getElementById("nameError").textContent = "Full name is required.";
      valid = false;
    } else if (name.length < 3) {
      document.getElementById("nameError").textContent = "Full name must be at least 3 characters long.";
      valid = false;
    }
  
    // Email validation
    var emailPattern = /^\S+@\S+\.\S+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email format.";
      valid = false;
    }
  
    // Password validation
    var lowercase = /[a-z]/;
    var uppercase = /[A-Z]/;
    var number = /[0-9]/;
    var symbol = /[!@#$%^&*(),.?":{}|<>]/;
  
    if (password === "") {
      document.getElementById("passwordError").textContent = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
      valid = false;
    } else if (!lowercase.test(password)) {
      document.getElementById("passwordError").textContent = "Password must contain at least one lowercase letter.";
      valid = false;
    } else if (!uppercase.test(password)) {
      document.getElementById("passwordError").textContent = "Password must contain at least one uppercase letter.";
      valid = false;
    } else if (!number.test(password)) {
      document.getElementById("passwordError").textContent = "Password must contain at least one number.";
      valid = false;
    } else if (!symbol.test(password)) {
      document.getElementById("passwordError").textContent = "Password must contain at least one special character.";
      valid = false;
    }
  
    // Confirm password validation
    if (confirmPassword === "") {
      document.getElementById("confirmPasswordError").textContent = "Please confirm your password.";
      valid = false;
    } else if (confirmPassword !== password) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      valid = false;
    }
  
    return valid;
  }
  