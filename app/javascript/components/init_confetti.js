import { confetti } from 'dom-confetti';

const initConfetti = () => {

  const button = document.querySelector(".btn-danger")
  button.addEventListener("click", () => confetti(button))

}



export { initConfetti }