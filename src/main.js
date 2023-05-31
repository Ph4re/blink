//import { Blink } from './blink.js';
import { Blink } from './blink2.js';

const trigger = document.getElementById('trigger');
const trigger1 = document.getElementById('trigger1');
const popper = document.getElementById('popper');
const popper1 = document.getElementById('popper1');

Blink.create(trigger, popper);
Blink.create(trigger1, popper1);
