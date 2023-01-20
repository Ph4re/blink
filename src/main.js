import Blink from './blink.js';

const trigger = document.getElementById('trigger');
const popper = document.getElementById('popper');
const blink = Blink.create(trigger, popper);

console.log(blink);
