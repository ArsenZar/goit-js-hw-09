'use strict';
import "../css/styles.css";

console.log("success");

const formData = {
  email: "",
  message: ""
};

const form = document.querySelector("form");


form.addEventListener("input", event => {
  if (event.target.name) {
    formData.email = form.email.value;
    formData.message = form.message.value;
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

 form.addEventListener("submit", event => {
   event.preventDefault();
   localStorage.removeItem("feedback-form-state");
   form.reset();
 });

  const savedSettings = localStorage.getItem("feedback-form-state");
  console.log(savedSettings); // A string

  const parsedSettings = JSON.parse(savedSettings);
  //console.log(parsedSettings.email); // Settings object

if (parsedSettings !== null) {
  form.email.value = parsedSettings.email;
  form.message.value = parsedSettings.message;
} else {
 console.log("no date");
}




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