export class Blink {
  static #isInternalConstructing = false;
  static #INSTANCE;

  #triggerDimensions;
  #popperDimensions;
  #trigger;
  #popper;
  #options;
  #show = false;
  #arrow;

  constructor(trigger, popper, options) {
    if (!Blink.#isInternalConstructing) {
      throw new TypeError('Blink Class is not constructable');
    }
    this.#trigger = trigger;
    this.#popper = popper;
    this.#options = options;
    this.#arrow = options.arrow ? document.createElement('div') : null;
  }

  static create(trigger, popper, options) {
    /* Make the instance only through create static methode
     *
     * eg. New Blink(trigger, popper) is not possible
     */

    const realOptions = Object.assign(
      { placement: 'auto', event: 'hover', arrow: false, dropdown: 'none' },
      options
    );

    Blink.#isInternalConstructing = true;
    Blink.#INSTANCE = new Blink(trigger, popper, realOptions);
    Blink.#isInternalConstructing = false;

    Blink.#INSTANCE.#initStyle();
    Blink.#INSTANCE.#initEvent();
    Blink.#INSTANCE.#placement();

    return Blink.#INSTANCE;
  }

  #initStyle() {
    this.#popper.style.position = 'absolute';
    this.#popper.style.zIndex = 10;
    this.#popper.style.opacity = 0;
    this.#popper.style.margin = 0;
    this.#popper.style.padding = '8px 12px';
    this.#popper.style.transition = 'opacity .7s ease';
    this.#triggerDimensions = this.#trigger.getBoundingClientRect();
    this.#popperDimensions = this.#popper.getBoundingClientRect();
    this.#popper.style.display = 'none';
  }

  #initEvent() {
    if (this.#options.event == 'hover') {
      this.#trigger.addEventListener('mouseenter', () => {
        this.#popper.style.display = 'block';
        setTimeout(() => {
          this.#popper.style.opacity = 100;
        }, 100);
      });

      this.#trigger.addEventListener('mouseleave', () => {
        this.#popper.style.opacity = 0;
        setTimeout(() => {
          this.#popper.style.display = 'none';
        }, 700);
      });
    }

    if (this.#options.event == 'click') {
      this.#trigger.addEventListener('click', () => {
        if (this.#show) {
          this.#popper.style.opacity = 0;
          setTimeout(() => {
            this.#popper.style.display = 'none';
          }, 700);
          this.#show = false;
        } else {
          this.#popper.style.display = 'block';
          setTimeout(() => {
            this.#popper.style.opacity = 100;
          }, 100);
          this.#show = true;
        }
      });
    }
  }

  #placement() {
    if (this.#options.dropdown !== 'none') {
      this.#placementDropdown(this.#options.dropdown);
    } else {
      if (this.#options.arrow) {
        const background = window.getComputedStyle(
          this.#popper
        ).backgroundColor;
        this.#arrow.style.cssText = `width: 10px;
           height: 10px;
           transform: rotate(45deg);
           position: absolute;
           background-color: ${background};`;
        this.#popper.appendChild(this.#arrow);
      }
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
    }

    this.#hasPlace(this.#options.placement)
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
      this.#arrow.style.cssText += `bottom: -5px;left: ${
        this.#popperDimensions.width / 2 - 5
      }px;`;
    }
  }

  #placementBottom() {
    this.#popper.style.left =
      this.#triggerDimensions.left +
      (this.#triggerDimensions.width - this.#popperDimensions.width) / 2 +
      'px';
    this.#popper.style.top = this.#triggerDimensions.bottom + 15 + 'px';

    if (this.#options.arrow) {
      this.#arrow.style.cssText += `top: -5px;
         left: ${this.#popperDimensions.width / 2 - 5}px;`;
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
      this.#arrow.style.cssText += `top: ${
        this.#popperDimensions.height / 2 - 5
      }px;right: -5px;`;
    }
  }

  #placementRight() {
    this.#popper.style.top =
      this.#triggerDimensions.top +
      (this.#triggerDimensions.height - this.#popperDimensions.height) / 2 +
      'px';
    this.#popper.style.left = this.#triggerDimensions.right + 15 + 'px';

    if (this.#options.arrow) {
      this.#arrow.style.cssText += `top: ${
        this.#popperDimensions.height / 2 - 5
      }px;left: -5px;`;
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

  #placementDropdown(direction) {
    if (direction == 'right') {
      this.#popper.style.left =
        this.#triggerDimensions.right - this.#popperDimensions.width + 'px';
      this.#popper.style.top = this.#triggerDimensions.bottom + 'px';
    } else {
      this.#popper.style.left = this.#triggerDimensions.left + 'px';
      this.#popper.style.top = this.#triggerDimensions.bottom + 'px';
    }
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
