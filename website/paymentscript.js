function togglePaymentFields() {
  var paymentMethod = document.getElementById("paymentMethod").value;
  
  document.getElementById("cardFields").style.display = "none";
  document.getElementById("upiFields").style.display = "none";
  document.getElementById("paypalFields").style.display = "none";

  if (paymentMethod === "card") {
    document.getElementById("cardFields").style.display = "block";
  } else if (paymentMethod === "upi") {
    document.getElementById("upiFields").style.display = "block";
  } else if (paymentMethod === "paypal") {
    document.getElementById("paypalFields").style.display = "block";
  }
}

// Card payment validation
function validateCardForm() {
  var cardName = document.getElementById("cardName").value;
  var cardNumber = document.getElementById("cardNumber").value;
  var expiryDate = document.getElementById("expiryDate").value;
  var cvv = document.getElementById("cvv").value;
  var valid = true;

  // Reset error messages
  document.getElementById("cardNameError").textContent = "";
  document.getElementById("cardNumberError").textContent = "";
  document.getElementById("expiryDateError").textContent = "";
  document.getElementById("cvvError").textContent = "";

  // Name on card validation
  if (cardName === "") {
    document.getElementById("cardNameError").textContent = "Name on card is required.";
    valid = false;
  }

  // Card number validation (only digits, 16 length)
  if (cardNumber === "" || !/^\d{16}$/.test(cardNumber)) {
    document.getElementById("cardNumberError").textContent = "Invalid card number (16 digits required).";
    valid = false;
  }

  // Expiry date validation (MM/YY)
  if (expiryDate === "" || !/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiryDate)) {
    document.getElementById("expiryDateError").textContent = "Invalid expiry date format (MM/YY).";
    valid = false;
  }

  // CVV validation (3 digits)
  if (cvv === "" || !/^\d{3}$/.test(cvv)) {
    document.getElementById("cvvError").textContent = "Invalid CVV (3 digits required).";
    valid = false;
  }

  return valid;
}

// UPI (Google Pay) payment validation
function validateUPIForm() {
  var upiId = document.getElementById("upiId").value;
  var valid = true;

  document.getElementById("upiIdError").textContent = "";

  // UPI ID validation
  var upiPattern = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
  if (upiId === "" || !upiPattern.test(upiId)) {
    document.getElementById("upiIdError").textContent = "Invalid UPI ID format.";
    valid = false;
  }

  return valid;
}

// PayPal payment validation
function validatePayPalForm() {
  var paypalEmail = document.getElementById("paypalEmail").value;
  var valid = true;

  document.getElementById("paypalEmailError").textContent = "";

  // Email validation for PayPal
  if (paypalEmail === "" || !/^\S+@\S+\.\S+$/.test(paypalEmail)) {
    document.getElementById("paypalEmailError").textContent = "Invalid email address.";
    valid = false;
  }

  return valid;
}
