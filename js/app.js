import gsap from 'gsap';
import '../styles/app.scss';
import splitType from "split-type";


const myText = new splitType(".wrapper .my__text", { types: "words" });

const chars = myText.words;

gsap.fromTo(
  chars,
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.125,
    duration: 2,
    ease: "power4.inOut",
  }
);

