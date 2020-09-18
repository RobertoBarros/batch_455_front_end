import Typed from 'typed.js';

const initTyped = () => {

  const typed = new Typed('#typed', {
    strings: ["First sentence.", "Second sentence.", 'hello World'],
    typeSpeed: 30,
    loop: true
  });

}

export { initTyped }

