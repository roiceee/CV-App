import { debounce } from "lodash";

function validateFirstName(e) {
  const firstNameErrorTextContainer = document.getElementById("first-name-error");
  if (hasNoInput(e, firstNameErrorTextContainer)) {
    return;
  }
  if (hasSpecialCharacters(e, firstNameErrorTextContainer)) {
    return;
  }
  removeErrorWarning(e, firstNameErrorTextContainer);
}

function validateMiddleInitial(e) {
  const middleInitialErrorTextContainer = document.getElementById(
    "middle-initial-error"
  );
  if (hasSpecialCharacters(e, middleInitialErrorTextContainer)) {
    return;
  }
  removeErrorWarning(e, middleInitialErrorTextContainer);
}

function validateLastName(e) {
  const lastNameErrorTextContainer = document.getElementById("last-name-error");
  if (hasNoInput(e, lastNameErrorTextContainer)) {
    return;
  }
  if (hasSpecialCharacters(e, lastNameErrorTextContainer)) {
    return;
  }
  removeErrorWarning(e, lastNameErrorTextContainer);
}

function validateEmail(e) {
  const emailErrorTextContainer = document.getElementById("email-error");
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const value = e.target.value;
  if (hasNoInput(e, emailErrorTextContainer)) {
    return;
  }
  if (!value.match(pattern)) {
    e.target.classList.add("invalid-form");
    emailErrorTextContainer.textContent = "Must be a valid email address.";
    return;
  }
  removeErrorWarning(e, emailErrorTextContainer);
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

const debouncedValidateFirstName = debounce(validateFirstName, 1000);
const debouncedValidateMiddleInitial = debounce(validateMiddleInitial, 1000);
const debouncedValidateLastName = debounce(validateLastName, 1000);
const debouncedValidateEmail = debounce(validateEmail, 1000);

export {
  debouncedValidateFirstName,
  debouncedValidateMiddleInitial,
  debouncedValidateLastName,
  debouncedValidateEmail,
};
