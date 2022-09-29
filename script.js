"use strict";
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const XInside = x - buttonLeft;
    const YInside = y - buttonTop;
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = YInside + `px`;
    circle.style.left = XInside + `px`;
    this.appendChild(circle);
    setTimeout(function () {
      circle.remove();
    }, 500);
  });
});
