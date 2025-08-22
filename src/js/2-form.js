'use strict';
import "../css/styles.css";

const formData = {
  email: "",
  message: ""
};

const form = document.querySelector("form");
const savedSettings = localStorage.getItem("feedback-form-state");
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);

if (parsedSettings !== null) {
  form.email.value = parsedSettings.email;
  form.message.value = parsedSettings.message;
} else {
 console.log("no date");
}

form.addEventListener("input", event => {
  if (event.target.name) {
    formData.email = form.email.value.trim();
    formData.message = form.message.value.trim();
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", event => {
  event.preventDefault();

  if (form.email.value != "" && form.message.value != "") {
    localStorage.removeItem("feedback-form-state");
    form.reset();
    formData.email = "";
    formData.message = "";
  } else {
    alert("Enter email and message");
  }
 });






/*
formData.setItem("settings", JSON.stringify(settings));




try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parsing error in try...catch");


*/