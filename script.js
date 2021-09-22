"use strict";

//Global Variables

const btnCreate = document.querySelector(".input__btn");
const inputFullName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#tel");
const inputAddress = document.querySelector("#address");
const inputServices = document.querySelector("#services");
const input = document.querySelector(".input");

const inputNameClass = document.querySelector(".input__name");
const inputEmailClass = document.querySelector(".input__email");
const inputTelClass = document.querySelector(".input__tel");
const inputAddressClass = document.querySelector(".input__address");
const inputServicesClass = document.querySelector(".input__services");

const cardLeftSide = document.createElement("div");
const cardRightSide = document.createElement("div");
const card = document.createElement("div");
const fullName = document.createElement("p");
const email = document.createElement("a");
const phone = document.createElement("a");
const address = document.createElement("p");
const services = document.createElement("p");
const fieldEmpty = document.createElement("p");

cardLeftSide.classList = "card__left";
cardRightSide.classList = "card__right";
card.classList = "card";
fullName.classList = "card__text";
email.classList = "card__text";
phone.classList = "card__text";
address.classList = "card__text";
services.classList = "card__text";
email.href = "#";
phone.href = "#";
fieldEmpty.classList = "card__error";
fieldEmpty.textContent = "This Field Is Empty";
//Prepending into parent classes

input.append(card);
card.prepend(cardLeftSide, cardRightSide);
cardLeftSide.prepend(fullName, services);
cardRightSide.prepend(email, phone, address);

// Displaying values into the screen

function createCard() {
  fullName.textContent = inputFullName.value;
  email.textContent = inputEmail.value;
  phone.textContent = inputPhone.value;
  address.textContent = inputAddress.value;
  services.textContent = inputServices.value;
  window.localStorage.setItem("Full-name", inputFullName.value);
  window.localStorage.setItem("Email", inputEmail.value);
  window.localStorage.setItem("Phone", inputPhone.value);
  window.localStorage.setItem("Address", inputAddress.value);
  window.localStorage.setItem("Services", inputServices.value);
}
//Creating local storage

window.addEventListener("DOMContentLoaded", () => {
  inputFullName.value = window.localStorage.getItem("Full-name");
  inputEmail.value = window.localStorage.getItem("Email");
  inputPhone.value = window.localStorage.getItem("Phone");
  inputAddress.value = window.localStorage.getItem("Address");
  inputServices.value = window.localStorage.getItem("Services");

  createCard();
});

//Checking inputs
function checkingValues() {
  if (inputFullName.value === "") {
    inputNameClass.prepend(fieldEmpty);
  } else if (inputEmail.value === "") {
    inputEmailClass.prepend(fieldEmpty);
  } else if (inputPhone.value === "") {
    inputTelClass.prepend(fieldEmpty);
  } else if (inputAddress.value === "") {
    inputAddressClass.prepend(fieldEmpty);
  } else if (inputServices.value === "") {
    inputServicesClass.prepend(fieldEmpty);
  }
}
btnCreate.addEventListener("click", checkingValues);
btnCreate.addEventListener("click", createCard);
