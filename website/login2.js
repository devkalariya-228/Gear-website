function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");
  
    // Basic validation for email and password
    if (email === "" || password === "") {
      errorMsg.innerHTML = "Both fields are required!";
      return false;
    } else if (!validateEmail(email)) {
      errorMsg.innerHTML = "Please enter a valid email address!";
      return false;
    } else {
      errorMsg.innerHTML = ""; // Clear error message
      // alert("Login successful!");
      //document.getElementById("msg").html("login successfully...");
      // window.location = "webpages.html";
      if(!alert("Login successful!")) document.location = '/../webpages.html';
      //return true;
  
    }
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
 