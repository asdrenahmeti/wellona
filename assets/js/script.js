let hamburger = document.querySelector(".open-menu");
let icon = document.querySelector("i");
let dropdown = document.querySelector(".dropdown");
console.log(icon.className);
console.log(dropdown);

hamburger.addEventListener("click", () => {
  if (icon.className === "fa fa-bars") {
    icon.className = "fa fa-times";
  } else {
    icon.className = "fa fa-bars";
  }
  let menu = document.querySelector("ul");

  menu.classList.toggle("show-menu");
});

dropdown.addEventListener("click", () => {
  let dropdown = document.querySelector(".dropdown-menu");

  dropdown.classList.toggle("show-dropdown");
});
