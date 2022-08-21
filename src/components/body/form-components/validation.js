import { debounce } from "lodash";

function validateRequiredInput(e, errorTextContainerID) {
  const errorTextContainer = document.getElementById(errorTextContainerID);
  if (hasNoInput(e, errorTextContainer)) {
    return;
  }
  if (hasSpecialCharacters(e, errorTextContainer)) {
    return;
  }
  removeErrorWarning(e, errorTextContainer);
}

function validateInput(e, errorTextContainerID) {
  const errorTextContainer = document.getElementById(
    errorTextContainerID
  );
  if (hasSpecialCharacters(e, errorTextContainer)) {
    return;
  }
  removeErrorWarning(e, errorTextContainer);
}

function validateEmail(e, errorTextContainerID) {
  const errorTextContainer = document.getElementById(errorTextContainerID);
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const value = e.target.value;
  if (hasNoInput(e, errorTextContainer)) {
    return;
  }
  if (!value.match(pattern)) {
    e.target.classList.add("invalid-form");
    errorTextContainer.textContent = "Must be a valid email address.";
    return;
  }
  removeErrorWarning(e, errorTextContainer);
}

function validateExactLength(e, requiredLength, errorTextContainerID) {
  const errorTextContainer = document.getElementById(errorTextContainerID);
  const value = e.target.value;
  if (value === "") {
    removeErrorWarning(e, errorTextContainer);
    return;
  }
  if (value.length !== requiredLength) {
    errorTextContainer.textContent = `Input should contain exactly ${requiredLength} characters.`
    e.target.classList.add("invalid-form");
    return true;
  }
}

function hasSpecialCharacters(e, errorTextContainer) {
  const value = e.target.value;
  const pattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  if (value.match(pattern)) {
    errorTextContainer.textContent = "Should not contain special characters.";
    e.target.classList.add("invalid-form");
    return true;
  }
}

function hasNoInput(e, errorTextContainer) {
  const value = e.target.value;
  if (value.trim() === "") {
    e.target.classList.add("invalid-form");
    errorTextContainer.textContent = "This field is required.";
    return true;
  }
}

function removeErrorWarning(e, errorTextContainer) {
  e.target.classList.remove("invalid-form");
  errorTextContainer.textContent = "";
}

const debouncedValidateRequiredInput = debounce(validateRequiredInput, 1000);
const debouncedValidateInput = debounce(validateInput, 1000);
const debouncedValidateEmail = debounce(validateEmail, 1000);
const debouncedValidateExactLength = debounce(validateExactLength, 1000);

export {
  debouncedValidateRequiredInput,
  debouncedValidateInput,
  debouncedValidateEmail,
  debouncedValidateExactLength
};
