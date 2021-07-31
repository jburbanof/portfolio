import landingAnimation from "./functions/landingAnimation.js"
import {ball, width, height, esp, en, form} from "./functions/variables.js"
import scrollNavBar from "./functions/scrollNavBar.js"
import reloader from "./functions/reloader.js"
import {changeToEsp, changeToEn} from "./functions/changeIdiom.js"
//import handleSubmit from "./functions/sendE-mail"

window.addEventListener("load", (e) => {
  let distanceTop = -(ball.clientHeight + height / 3);
  
  if (width > 768){
    ball.style.top = `${distanceTop}px`;
    landingAnimation();
  }
  
});

const pageSections = new fullpage('#fullpage', {
  navigation: true,
  scrollBar: true,
  loopBottom: false,
  menu: '#navBarTopList',
  anchors:['home', 'about', 'skills','projects' , 'contact' ],
  responsiveWidth: 768,
});

window.addEventListener("scroll", scrollNavBar);
esp.addEventListener("click", changeToEsp )
en.addEventListener("click", changeToEn )
form.addEventListener('submit', handleSubmit)

async function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application.json'
    }
  })
  if(response.ok){
    this.reset();
    alert('E-mail Sent')
  }
}

reloader();

const checkBox = document.getElementById('checkBox')
const navResponsive = document.getElementById('navResponsive')
const liResponsive = document.querySelectorAll('.liResponsive')

function displayMenu() {
    if(checkBox.checked){
      navResponsive.style.display='flex'
    }else{
      navResponsive.style.display='none'
    }
}
checkBox.addEventListener("click", displayMenu)
liResponsive.forEach(li => li.addEventListener("click", () => navResponsive.style.display='none' ));

