let width = window.innerWidth;
let height = window.innerHeight;
let ball = document.getElementById("picture");
let description = document.getElementById("description");
let navBar = document.getElementById("navBar");
let navBarTop = document.getElementById("navBarTop");

function windowDimention() {
  
  gsap.to("#description ", {
    duration: 1,
    delay: 0.5,
    x: width / 2 + description.clientWidth * 0.5,
    ease: "back",
  });
  gsap.to("#picture ", {
    duration: 1,
    delay: 1.5,
    y:
      height / 2 +
      ball.clientHeight / 2 -
      (description.clientHeight + ball.clientHeight) / 2,
    ease: "bounce",
  });
}
window.addEventListener("load", (e) => {
  let distanceTop = -(ball.clientHeight + window.innerHeight / 3);
  let distanceRight = window.innerWidth / 2 - navBar.clientWidth / 2;

  ball.style.top = `${distanceTop}px`;
  windowDimention();
});
window.addEventListener("resize", (e) => {
  location.reload();
});

function scrollNavBar() {
  let scrollTop = document.documentElement.scrollTop;
  let NavBarHeight = navBar.offsetTop;
  if (scrollTop > NavBarHeight + 220) {
    navBarTop.style.display = "flex";
    console.log('funciona')
  } else {
    navBarTop.style.display = "none";
  }
}
window.addEventListener("scroll", scrollNavBar);


const pageSections = new fullpage('#fullpage', {
  navigation: true,
  scrollBar: true,
  loopBottom: false,
  menu: '#navBarTopList',
  anchors:['home', 'about', 'projects', 'contact' ]
});

