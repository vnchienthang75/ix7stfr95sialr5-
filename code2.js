"use strict";

const letters = "abcdefghijklmnopqrstuvwxyz";
const upercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "~`!@#$%^&*()[]{}:;<>,.?/|+-_=";

function RandomString(stringSet, numbersStringSet) {
  let result = "";
  for (let i = 0; i < numbersStringSet; i++) {
    const randomIndex = Math.floor(Math.random() * stringSet.length);
    result += stringSet[randomIndex];
  }
  return result;
}

const userId = "v" + RandomString(letters, 15) + "@gmail.com";
const pasword = RandomString(
  letters + upercaseLetters + numbers + specialChars,
  99,
);

console.log("userId: ", userId);
console.log("password:", pasword);

const id = document.querySelector("#id");
const pass = document.querySelector("#pass");

pass.innerHTML = pasword;
