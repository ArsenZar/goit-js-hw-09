'use strict';
import "../css/styles.css";

const formData = {
  email: "",
  message: ""
};


const form = document.querySelector("form");
const savedSettings = localStorage.getItem("feedback-form-state");
const parsedSettings = JSON.parse(savedSettings);

if (parsedSettings !== null) {
  form.email.value = parsedSettings.email;
  form.message.value = parsedSettings.message;

  formData.email = parsedSettings.email;
  formData.message = parsedSettings.message;
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
  if (form.email.value.trim() !== "" && form.message.value.trim() !== "") {
    localStorage.removeItem("feedback-form-state");
    form.reset();
    console.log(formData);
    formData.email = "";
    formData.message = "";
  }
 });
