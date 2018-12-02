/* 02 - FORM VALIDATION :: YOUR CODE BELOW */

// General Variables
var form = document.getElementById("registration-form");

//Function
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //Variables locales
  var inputUser = e.target.elements.username.value;
  var inputPass = e.target.elements.userpassword.value;
  var inputConfirPass = e.target.elements.confirmpassword.value;
  var inputTaxid = e.target.elements.taxid.value;
  var selectAccount = e.target.elements.account.value;
  var inputCheckbox = e.target.elements.termsofservice.checked;

  //variables salidas

  var validUserSms = document.querySelector(".validation--username");
  var validPassSms = document.querySelector(".validation--user-password");
  var validConfirPassSms = document.querySelector(
    ".validation--confirm-password"
  );
  var validTaxSms = document.querySelector(".validation--tax-id");
  var validAccountSms = document.querySelector(".validation--account");
  var validTermsSms = document.querySelector(".validation--terms-of-service");
  var validEntireSms = document.querySelector(".validation--entire-form");

  // Validation User
  if (inputUser === "") {
    validUserSms.textContent = "Username cannot be blanck";
  } else {
    validUserSms.textContent = "Success";
  }
  // Validation Password

  if (inputPass.length < 8) {
    validPassSms.textContent = "Passwords must have a minimum of 8 characters";
  } else {
    validPassSms.textContent = "Success";
  }

  // Validation confirm password
  if (inputPass !== inputConfirPass || inputPass === "") {
    validConfirPassSms.textContent = "Passwords must match";
  } else {
    validConfirPassSms.textContent = "Success";
  }

  // Validation Taxid

  var isNumber = /^[0-9]+$/;
  if (inputTaxid === "") {
    validTaxSms.textContent = "Must provide Tax ID Number";
  } else if (inputTaxid.match(isNumber) && inputTaxid.length === 10) {
    validTaxSms.textContent = "Success";
  } else {
    validTaxSms.textContent = "Tax ID Number is only numbers and is 10 digits";
  }
  // Validation Taxid

  if (selectAccount !== "") {
    validAccountSms.textContent = "Success";
  } else {
    validAccountSms.textContent = "Must select account type";
  }
  //validation CheckBox

  if (inputCheckbox === false) {
    validTermsSms.textContent = "Must approve terms of service";
  } else {
    validTermsSms.textContent = "Success";
  }

  // Validation of FORM

  if (
    validUserSms.textContent &&
    validPassSms.textContent &&
    validConfirPassSms.textContent &&
    validTaxSms.textContent &&
    validAccountSms.textContent &&
    validTermsSms.textContent === "Success"
  ) {
    validEntireSms.textContent = "Form Completed";
  }
});