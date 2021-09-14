const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input Error Message...
function showError(input, message) {
  const fromControl = input.parentElement;
  fromControl.className = "form-control error";
  const small = fromControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const fromControl = input.parentElement;
  fromControl.className = "form-control success";
}

function checkEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) showSuccess(email);
  else showError(email, "Email is not valid");
}

// check required fields

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "")
      showError(input, `${getFieldName(input)} is required...`);
    else showSuccess(input);
  });
}

// Check Input Length
function checkLength(input, min, max) {
  if (input.value.length < min)
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  else if (input.value.length > max)
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  else showSuccess(input);
}

// Check password match...

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    console.log(input2.value);
    showError(input2, "Passwords do not match");
  }
}

//Get fieldname

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners...
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 5, 8);
  checkLength(password, 5, 10);
  checkEmail(email);
  //checkPasswordsMatch(password, password2);
});
