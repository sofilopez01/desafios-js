const firsName = document.querySelector("#FirstNameInput");
const lastName = document.querySelector("#LastNameInput");
const email = document.querySelector("#EmailInput");
const password = document.querySelector("#PassInput");

const firsNameError = document.querySelector("#FirstNameError");
const lastNameError = document.querySelector("#LastNameError");
const emailError = document.querySelector("#EmailError");
const passwordError = document.querySelector("#PassError");

const button = document.querySelector("#button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  validateEmpty(
    firsName.value,
    firsName,
    firsNameError,
    "First Name cannot be empty"
  );
  validateEmpty(
    lastName.value,
    lastName,
    lastNameError,
    "Last Name cannot be empty"
  );
  validateEmail(email.value, email, emailError);
  validateEmpty(
    password.value,
    password,
    passwordError,
    "Password cannot be empty"
  );
});

// ------------------- FUNCIONES -------------------

// Valida que el email tenga un formato correcto con regex
function validateEmail(valueInput, divInput, divError) {
  let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regExp.test(valueInput) == true) {
    hideError(divInput, divError); // si es válido, ocultamos error
  } else {
    showError(divInput, divError, "looks like this is not an email"); // si no, mostramos error
  }
}

// Valida que un campo no esté vacío
function validateEmpty(valueIntup, divInput, divError, nameInput) {
  if (valueIntup.length == 0) {
    showError(divInput, divError, nameInput);
  } else {
    hideError(divInput, divError);
  }
}

// Muestra un error: cambia el borde del input y muestra mensaje + ícono
function showError(divInput, divErorr, error) {
  divInput.style.border = "1px solid red";
  divErorr.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="">
   <p class="error">${error}</p>`;
}

// Oculta el error: vuelve el borde al color original y limpia el mensaje
function hideError(divInput, divError) {
  divInput.style.border = "1px solid  hsl(246, 25%, 77%)";
  divError.innerHTML = ``;
}
