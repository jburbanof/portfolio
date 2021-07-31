import {width, height, description, ball} from "./variables.js"


function landingAnimation() {
    
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

export default landingAnimation