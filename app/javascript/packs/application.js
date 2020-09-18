require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap';

import { initUpdateNavbarOnScroll } from '../components/navbar';
import { initTyped } from '../components/init_typed';
import { initConfetti } from '../components/init_confetti';




document.addEventListener('turbolinks:load', () => {

  initUpdateNavbarOnScroll();
  initTyped();
  initConfetti();

});