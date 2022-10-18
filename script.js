"use strict";

const submitButton = document.querySelector(".btn_submit");
const ratingContainer = document.querySelector(".container2");
const cardContainer = document.querySelector(".card_container");
const numberTags = document.querySelectorAll(".btn_num");
const ratingResult = document.querySelector(".btn_result");

// Event Listeners
submitButton.addEventListener("click", () => {
  cardContainer.style.display = "none";
  ratingContainer.style.display = "block";
});

for (let i = 0; i < numberTags.length; i++) {
  numberTags[i].addEventListener("click", () => {
    if (numberTags[i].value === "1") {
      numberTags[i].addEventListener("click", () => {
        numberTags[i].classList.toggle("newBackground");
        ratingResult.innerHTML = `You selected ${numberTags[i].value} out of 5`;
      });
    } else if (numberTags[i].value === "2") {
      numberTags[i].addEventListener("click", () => {
        numberTags[i].classList.toggle("newBackground");
        ratingResult.innerHTML = `You selected ${numberTags[i].value} out of 5`;
      });
    } else if (numberTags[i].value === "3") {
      numberTags[i].addEventListener("click", () => {
        numberTags[i].classList.toggle("newBackground");
        ratingResult.innerHTML = `You selected ${numberTags[i].value} out of 5`;
      });
    } else if (numberTags[i].value === "4") {
      numberTags[i].addEventListener("click", () => {
        numberTags[i].classList.toggle("newBackground");
        ratingResult.innerHTML = `You selected ${numberTags[i].value} out of 5`;
      });
    } else if (numberTags[i].value === "5") {
      numberTags[i].addEventListener("click", () => {
        numberTags[i].classList.toggle("newBackground");
        ratingResult.innerHTML = `You selected ${numberTags[i].value} out of 5`;
      });
    }
  });
}
