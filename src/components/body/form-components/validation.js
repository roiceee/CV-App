

function validateRequiredInput(DOMElement, errorTextContainerID) {
  const errorTextContainer = document.getElementById(errorTextContainerID);
  if (hasNoInput(DOMElement, errorTextContainer)) {
    return;
  }
  if (hasSpecialCharacters(DOMElement, errorTextContainer)) {
    return;
  }
  removeErrorWarning(DOMElement, errorTextContainer);
}

function validateInput(DOMElement, errorTextContainerID) {
  const errorTextContainer = document.getElementById(
    errorTextContainerID
  );
  if (hasSpecialCharacters(DOMElement, errorTextContainer)) {
    return;
  }
  removeErrorWarning(DOMElement, errorTextContainer);
}

function validateEmail(DOMElement, errorTextContainerID) {
  const errorTextContainer = document.getElementById(errorTextContainerID);
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const value = DOMElement.value;
  if (hasNoInput(DOMElement, errorTextContainer)) {
    return;
  }
  if (!value.match(pattern)) {
    DOMElement.classList.add("invalid-form");
    errorTextContainer.textContent = "Must be a valid email address.";
    return;
  }
  removeErrorWarning(DOMElement, errorTextContainer);
}

function validateExactLength(DOMElement, requiredLength, errorTextContainerID) {
  const errorTextContainer = document.getElementById(errorTextContainerID);
  const value = DOMElement.value;
  if (value === "") {
    removeErrorWarning(DOMElement, errorTextContainer);
    return;
  }
  if (value.length !== requiredLength) {
    errorTextContainer.textContent = `Input should contain exactly ${requiredLength} characters.`
    DOMElement.classList.add("invalid-form");
    return true;
  }
}

function hasSpecialCharacters(DOMElement, errorTextContainer) {
  const value = DOMElement.value;
  const pattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  if (value.match(pattern)) {
    errorTextContainer.textContent = "Should not contain special characters.";
    DOMElement.classList.add("invalid-form");
    return true;
  }
}

function hasNoInput(DOMElement, errorTextContainer) {
  const value = DOMElement.value;
  if (value.trim() === "") {
    DOMElement.classList.add("invalid-form");
    errorTextContainer.textContent = "This field is required.";
    return true;
  }
}

function removeErrorWarning(DOMElement, errorTextContainer) {
  DOMElement.classList.remove("invalid-form");
  errorTextContainer.textContent = "";
}

function resetForms() {
    const forms = document.querySelectorAll('input');
    const errorTextContainers = document.querySelectorAll('.error');
    const fileInputForm = document.getElementById('photo');
    forms.forEach(form => {
      if (form.classList.contains('invalid-form')) {
        form.classList.remove('invalid-form');
      }
    })
    errorTextContainers.forEach(errorTextContainer => {
      errorTextContainer.textContent = "";
    })
    fileInputForm.value = null;
}

// const debouncedValidateRequiredInput = debounce(validateRequiredInput, 1000);
// const debouncedValidateInput = debounce(validateInput, 1000);
// const debouncedValidateEmail = debounce(validateEmail, 1000);
// const debouncedValidateExactLength = debounce(validateExactLength, 1000);

export {
  validateRequiredInput,
  validateInput,
  validateEmail,
  validateExactLength,
  resetForms,
};
