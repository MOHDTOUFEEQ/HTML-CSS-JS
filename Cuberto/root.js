
gsap.registerPlugin(ScrollTrigger);
gsap.to(".fleftinfo", {
  scrollTrigger: {
    trigger: "#fimage",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
    endTrigger:".last"
  },
  y: "-300%",
  ease: Power2, // Corrected 'Power1' usage
});

gsap.from("#cuberto", {
  opacity: 0,
  duration: 0.5,
});

const body = document.querySelector("body")
const invisible = document.querySelector(".invisible")
const overlay = document.querySelector(".overlay")

body.addEventListener('mousemove',function (e) {
  invisible.style.left = e.pageX  + "px"
  invisible.style.top = e.pageY + "px"
})

overlay.addEventListener("mousemove",function (e) {
  const img = document.querySelector(".overlay img")

})
gsap.set("footer h1",{
  opacity: '0',
  height : ".2rem"
})
var controller = new ScrollMagic.Controller();

// Tween - Section 2
var scene = new ScrollMagic.Scene({
  triggerElement: "footer"
})
// animate color and top border in relation to scroll position
.setTween("footer h1", {
  opacity: '1',
  duration: 5,
  height : "5rem"
})
.addTo(controller);
var scene = new ScrollMagic.Scene({
  triggerElement: "footer"
})
// animate color and top border in relation to scroll position
.setTween("footer", {
  height : "100vh",
  duration: 1,
  ease: Power2,
})
.addTo(controller);