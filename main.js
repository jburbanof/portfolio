import landingAnimation from "./animations/landingAnimation.js"
import {ball} from "./animations/variables.js"
import scrollNavBar from "./animations/scrollNavBar.js"
let width = window.innerWidth;

let navBar = document.getElementById("navBar");
let navBarTop = document.getElementById("navBarTop");


window.addEventListener("load", (e) => {
  let distanceTop = -(ball.clientHeight + window.innerHeight / 3);
  let distanceRight = window.innerWidth / 2 - navBar.clientWidth / 2;
  
  if (width > 768){
    ball.style.top = `${distanceTop}px`;
    landingAnimation();
  }
  
});
if(width > 768){
  window.addEventListener("resize", (e) => {
  location.reload();
});
}


window.addEventListener("scroll", scrollNavBar);


const pageSections = new fullpage('#fullpage', {
  navigation: true,
  scrollBar: true,
  loopBottom: false,
  menu: '#navBarTopList',
  anchors:['home', 'about', 'skills','projects' , 'contact' ],
  responsiveWidth: 768,
});

