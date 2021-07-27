import { scrollTop, NavBarHeight } from "./variables.js";

function scrollNavBar() {
  if (scrollTop > NavBarHeight + 220) {
    navBarTop.style.display = "flex";
    console.log("funciona");
  } else {
    navBarTop.style.display = "none";
  }
}

export default scrollNavBar