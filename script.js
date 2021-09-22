"use strict";

//Global Variables

const btnCreate = document.querySelector(".input__btn");
const inputFullName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#tel");
const inputAddress = document.querySelector("#address");
const inputServices = document.querySelector("#services");
const input = document.querySelector(".input");

const cardLeftSide = document.createElement("div");
const cardRightSide = document.createElement("div");
const card = document.createElement("div");
const fullName = document.createElement("p");
const email = document.createElement("a");
const phone = document.createElement("a");
const address = document.createElement("p");
const services = document.createElement("p");

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
  fullName.textContent = window.localStorage.getItem("Full-name");
  email.textContent = window.localStorage.getItem("Email");
  phone.textContent = window.localStorage.getItem("Phone");
  address.textContent = window.localStorage.getItem("Address");
  services.textContent = window.localStorage.getItem("Services");
  inputFullName.value = window.localStorage.getItem("Full-name");
  inputEmail.value = window.localStorage.getItem("Email");
  inputPhone.value = window.localStorage.getItem("Phone");
  inputAddress.value = window.localStorage.getItem("Address");
  inputServices.value = window.localStorage.getItem("Services");
});

btnCreate.addEventListener("click", createCard);
