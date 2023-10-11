const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function checkInputs() {
  //get values from the input
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "Username cannot be empty");
  } else {
    //add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  }else if(!isEmail(emailValue)){
    setErrorFor(email, "Email is invalid");
  }else{
    setSuccessFor(email);
  }


  if(passwordValue === ""){
    setErrorFor(password, "Password cannot be empty");
  }else{
    setSuccessFor(password);
  }


  if(password2Value === ""){
    setErrorFor(password2, "Password cannot be empty");
  }else if (passwordValue !== password2Value){
    setErrorFor(password2, "Password is different"); 
  }else{
    setSuccessFor(password2);
  }
}


// ------------X--------------

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control div

  const small = formControl.querySelector("small");

  //add error message for the small tag
  small.innerText = message;

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement; // .form-control div

  //add error class
  formControl.className = "form-control success";
}

// -------------X-------------


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

// ------------X----------
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
