Shery.mouseFollower();

Shery.makeMagnet(".magnet", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.hoverWithMediaCircle(".hvr", {
  videos: ["assets/1.webm", "assets/2.webm", "assets/3.webm"],
});

gsap.to(".l-elem", {
  scrollTrigger: {
    trigger: "#projects-images",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 2,
    // markers: true,
  },
  y: "-300%",
  ease: Power1,
});

const elems = document.querySelectorAll(".l-elem");

Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    elems.forEach((elem, index) => {
      ScrollTrigger.create({
        trigger: elem,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

let menu = document.querySelector("#menu");
let close = document.querySelector("#close");

let tl = gsap.timeline();

tl.to("#side-nav", {
  right: 0,
  duration: 0.7,
});

tl.from("#side-nav a", {
  x: 150,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

tl.from("#side-nav i", {
  opacity: 0,
  x: 150,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

close.addEventListener("click", function () {
  tl.reverse();
});
