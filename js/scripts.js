"use strict";

window.addEventListener("load", function () {
  // =========== On full load remove load-screen
  var loaderScreen = document.querySelector(".loader-screen");
  loaderScreen.style.display = "none"; // =========== All the nodes that should be animated...

  var animatedNodes = ["smoke", "space", "line__line", "line__circle_bottom", "banner-mars__heading", "banner-mars__video"]; // ...animate them

  animatedNodes.forEach(function (node) {
    document.querySelector(".".concat(node)).style.animationPlayState = "running";
  }); // =========== Moving Space Background On Mousemove

  var spaceBg = document.querySelector(".space");
  setTimeout(function () {
    document.body.onmousemove = function (e) {
      var width = document.body.offsetWidth;
      spaceBg.style.transform = "translateX(0)";

      if (e.clientX < width / 3) {
        spaceBg.style.transform = "translateX(-5%)";
      }

      if (e.clientX > width / 3 * 2) {
        spaceBg.style.transform = "translateX(5%)";
      }
    };
  }, 2500); // wait to end of animation
}); // =========== Show/Hide Booking Form

var headerButton = document.querySelector(".header__btn");
var bookFormBlock = document.querySelector(".book-form__wrap");
var bookFormClose = document.querySelector(".book-form__close");

headerButton.onclick = function (e) {
  e.preventDefault();
  bookFormBlock.classList.toggle("book-form__wrap_hidden");
};

bookFormClose.onclick = function (e) {
  e.preventDefault();
  bookFormBlock.classList.toggle("book-form__wrap_hidden");
}; // =========== Header Burger


var headerBurger = document.querySelector(".header__burger");
var headerList = document.querySelector(".header__list");

headerBurger.onclick = function () {
  headerBurger.classList.toggle("header__burger_active");
  headerList.classList.toggle("header__list_showed");
}; // =========== Validate Input Tickets Amount


var inputAmount = document.querySelector("#tickets-amount");

inputAmount.onfocus = function () {
  var value = inputAmount.value;
  inputAmount.value = "";

  inputAmount.onchange = function () {
    var newValue = inputAmount.value;

    if (!isNaN(newValue)) {
      if (newValue.toString().slice(-1) == 2 || newValue.toString().slice(-1) == 3 || newValue.toString().slice(-1) == 4) {
        inputAmount.value = "".concat(newValue, " \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430");
      } else {
        inputAmount.value = "".concat(newValue, " \u0447\u0435\u043B\u043E\u0432\u0435\u043A");
      }
    } else {
      inputAmount.value = value;
    }
  };
};