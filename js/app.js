import gsap from 'gsap';
import '../styles/app.scss';
import splitType from "split-type";


const myText = new splitType(".wrapper .my__text", { types: "words" });

const chars = myText.words;

const tl = gsap.timeline();

tl.fromTo(
  chars,
  {
    y: 150,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 2,
    ease: "power4.inOut",
  }
)
.to(".text__wrapper", {y: "-90px", ease: "power2.out"} , "-=0.35");
;

