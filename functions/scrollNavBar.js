import { intro, navBarTop, height } from "./variables.js";

function scrollNavBar() {
  let introProps = intro.getBoundingClientRect();

  let sectionHeight = -(height-10)
    if(introProps.top < sectionHeight){
      
      navBarTop.style.display = "flex";
    }else{
      navBarTop.style.display = "none";
    }
};
export default scrollNavBar

