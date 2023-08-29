const checkbox = document.querySelector("#check");
const nav = document.querySelector("nav ul");
checkbox.addEventListener("change", () => {
  console.log(checkbox.checked);
  if (checkbox.checked) {
    nav.style.right = "0";
  } else {
    nav.style.right = "-100%";
  }});