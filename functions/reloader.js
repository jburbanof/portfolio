import {width} from "./variables.js"
function reloader() {
    if(width > 768){
    window.addEventListener("resize", (e) => {
    location.reload();
    scrollNavBar
  });
  }
};

export default reloader
