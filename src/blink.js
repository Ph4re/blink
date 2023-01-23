/*
 * Function that help positionning the the popper element in tooltip component
 * From another project
 */

import arrow from './arrow-up.svg';

export default class Blink {
  static #isInternalConstructing = false;
  static #INSTANCE;

  #triggerDimensions;
  #popperDimensions;
  #trigger;
  #popper;
  #options;

  constructor(trigger, popper, options) {
    console.log(arrow);
    if (!Blink.#isInternalConstructing) {
      throw new TypeError('Blink Class is not constructable');
    }
    this.#triggerDimensions = trigger.getBoundingClientRect();
    this.#popperDimensions = popper.getBoundingClientRect();
    this.#trigger = trigger;
    this.#popper = popper;
    this.#options = options;
  }

  static create(
    trigger,
    popper,
    options = { placement: 'right', event: 'hover', arrow: true }
  ) {
    /* Make the instance only through create static methode
     *
     * eg. New Blink(trigger, popper) is not possible
     */
    popper.style.position = 'absolute';
    Blink.#isInternalConstructing = true;
    Blink.#INSTANCE = new Blink(trigger, popper, options);
    Blink.#isInternalConstructing = false;

    Blink.#INSTANCE.#placement();

    return Blink.#INSTANCE;
  }

  #placement() {
    switch (this.#options.placement) {
      case 'top':
        this.#placementTop();
        break;
      case 'bottom':
        this.#placementBottom();
        break;
      case 'left':
        this.#placementLeft();
        break;
      case 'right':
        this.#placementRight();
        break;
      case 'auto':
        this.#placementAuto();
        break;
      default:
        this.#placementTop();
    }

    this.#hasPlace(this.#options.placement, this.#trigger, this.#popper)
      ? null
      : console.warn(
          'Be carreful, there is no place for the tooltip to show !'
        );
  }

  #placementTop() {
    this.#popper.style.left =
      this.#triggerDimensions.left +
      (this.#triggerDimensions.width - this.#popperDimensions.width) / 2 +
      'px';
    this.#popper.style.top =
      this.#triggerDimensions.top - this.#popperDimensions.height - 15 + 'px';

    if (this.#options.arrow) {
      const background = window.getComputedStyle(this.#popper).backgroundColor;
      const arrow = document.createElement('div');
      arrow.style.cssText = `width: 10px;
           height: 10px;
           transform: rotate(45deg);
           background-color: ${background}; 
           position: absolute;
           bottom: -5px;
           left: ${this.#popperDimensions.width / 2 - 5}px;`;
      this.#popper.appendChild(arrow);
    }
  }

  #placementBottom() {
    this.#popper.style.left =
      this.#triggerDimensions.left +
      (this.#triggerDimensions.width - this.#popperDimensions.width) / 2 +
      'px';
    this.#popper.style.top = this.#triggerDimensions.bottom + 15 + 'px';

    if (this.#options.arrow) {
      const background = window.getComputedStyle(this.#popper).backgroundColor;
      const arrow = document.createElement('div');
      arrow.style.cssText = `width: 10px;
         height: 10px;
         transform: rotate(45deg);
         background-color: ${background}; 
         position: absolute;
         top: -5px;
         left: ${this.#popperDimensions.width / 2 - 5}px;`;
      this.#popper.appendChild(arrow);
    }
  }

  #placementLeft() {
    this.#popper.style.top =
      this.#triggerDimensions.top +
      (this.#triggerDimensions.height - this.#popperDimensions.height) / 2 +
      'px';
    this.#popper.style.left =
      this.#triggerDimensions.left - this.#popperDimensions.width - 20 + 'px';

    if (this.#options.arrow) {
      const background = window.getComputedStyle(this.#popper).backgroundColor;
      const arrow = document.createElement('div');
      arrow.style.cssText = `width: 10px;
           height: 10px;
           transform: rotate(45deg);
           background-color: ${background}; 
           position: absolute;
           top: ${this.#popperDimensions.height / 2 - 5}px;
           right: -5px;`;
      this.#popper.appendChild(arrow);
    }
  }

  #placementRight() {
    this.#popper.style.top =
      this.#triggerDimensions.top +
      (this.#triggerDimensions.height - this.#popperDimensions.height) / 2 +
      'px';
    this.#popper.style.left = this.#triggerDimensions.right + 15 + 'px';

    if (this.#options.arrow) {
      const background = window.getComputedStyle(this.#popper).backgroundColor;
      const arrow = document.createElement('div');
      arrow.style.cssText = `width: 10px;
         height: 10px;
         transform: rotate(45deg);
         background-color: ${background}; 
         position: absolute;
         top: ${this.#popperDimensions.height / 2 - 5}px;
         left: -5px;`;
      this.#popper.appendChild(arrow);
    }
  }

  #placementAuto() {
    this.#hasPlace('top')
      ? this.#placementTop()
      : this.#hasPlace('bottom')
      ? this.#placementBottom()
      : this.#hasPlace('right')
      ? this.#placementRight()
      : this.#hasPlace('left')
      ? this.#placementLeft()
      : (this.#placementTop(),
        console.warn(
          'Be carreful, there is no place for the tooltip to show !'
        ));
  }

  #hasPlace(direction) {
    switch (direction) {
      case 'top':
        return this.#triggerDimensions.top > this.#popperDimensions.height + 20;
      case 'bottom':
        return (
          window.innerHeight - this.#triggerDimensions.bottom >
          this.#popperDimensions.height + 20
        );
      case 'left':
        return this.#triggerDimensions.left > this.#popperDimensions.width + 20;
      case 'right':
        return (
          window.innerWidth - this.#triggerDimensions.right >
          this.#popperDimensions.width + 20
        );
    }
  }
}
