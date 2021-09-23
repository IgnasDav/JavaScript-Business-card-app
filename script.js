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
const fieldEmpty1 = document.createElement("p");
const fieldEmpty2 = document.createElement("p");
const fieldEmpty3 = document.createElement("p");
const fieldEmpty4 = document.createElement("p");
const fieldEmpty5 = document.createElement("p");
const img = document.createElement("img");

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
fieldEmpty1.classList = "card__error";
fieldEmpty2.classList = "card__error";
fieldEmpty3.classList = "card__error";
fieldEmpty4.classList = "card__error";
fieldEmpty5.classList = "card__error";
fieldEmpty1.textContent = "Please enter your full name";
fieldEmpty2.textContent = "Please enter your email";
fieldEmpty3.textContent = "Please enter your phone";
fieldEmpty4.textContent = "Please enter your address";
fieldEmpty5.textContent = "Please enter your services";
//Prepending into parent classes
input.append(card);
card.prepend(cardLeftSide, cardRightSide);
cardLeftSide.prepend(img, fullName, services);
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
    inputNameClass.append(fieldEmpty1);
  }
  if (inputEmail.value === "") {
    inputEmailClass.append(fieldEmpty2);
  }
  if (inputPhone.value === "") {
    inputTelClass.append(fieldEmpty3);
  }
  if (inputAddress.value === "") {
    inputAddressClass.append(fieldEmpty4);
  }
  if (inputServices.value === "") {
    inputServicesClass.append(fieldEmpty5);
  }
}
function removingErrors() {
  if (inputFullName.value !== "") {
    fieldEmpty1.textContent = "";
    inputNameClass.append(fieldEmpty1);
  }
  if (inputEmail.value !== "") {
    fieldEmpty2.textContent = "";
    inputEmailClass.append(fieldEmpty2);
  }
  if (inputPhone.value !== "") {
    fieldEmpty3.textContent = "";
    inputTelClass.append(fieldEmpty3);
  }
  if (inputAddress.value !== "") {
    fieldEmpty4.textContent = "";
    inputAddressClass.append(fieldEmpty4);
  }
  if (inputServices.value !== "") {
    fieldEmpty5.textContent = "";
    inputServicesClass.append(fieldEmpty5);
  }
}
function addingItems() {
  if (
    inputFullName.value !== "" &&
    inputEmail.value !== "" &&
    inputPhone.value !== "" &&
    inputAddress.value !== "" &&
    inputServices.value !== ""
  ) {
    img.alt = "Card Logo";
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcMpmSEWgxC5IigMmd69BzXP4oZPEA4AZWQ&usqp=CAU";
  } else {
    img.src = "";
    img.alt = "";
  }
}

btnCreate.addEventListener("click", removingErrors);
btnCreate.addEventListener("click", checkingValues);
btnCreate.addEventListener("click", addingItems);
btnCreate.addEventListener("click", createCard);
