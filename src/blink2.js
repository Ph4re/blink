export class Blink {
  // attribute
  static #isInternalConstructing = false;
  static #INSTANCE;

  #triggerDimensions;
  #popperDimensions;
  #trigger;
  #popper;
  #options;
  #show = false;
  #arrow;
  // constructor
  constructor(trigger, popper, options) {
    if (!Blink.#isInternalConstructing) {
      throw new TypeError('Blink Class is not constructable');
    }
    this.#trigger = trigger;
    this.#popper = popper;
    this.#options = options;
  }

  //create method
  static create(trigger, popper, options) {
    /* Make the instance only through create static methode
     *
     * eg. New Blink(trigger, popper) is not possible
     */

    const realOptions = Object.assign(
      {
        placement: 'top',
        event: 'hover',
        arrow: true,
        duration: 700,
      },
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
  //use init style
  #initStyle() {
    this.#popper.style.cssText = `position: absolute;
      z-index: 50;
      opacity: 0;
      margin: 0;
      padding: 8px 12px;
      transition: opacity ${this.#options.duration / 1000}s`;

    this.#triggerDimensions = this.#trigger.getBoundingClientRect();
    this.#popperDimensions = this.#popper.getBoundingClientRect();
    this.#popper.style.display = 'none';

    if (this.#options.arrow) {
      const background = window.getComputedStyle(this.#popper).backgroundColor;
      this.#arrow = document.createElement('div');
      this.#arrow.style.cssText = `width: 10px;
            height: 10px;
            transform: rotate(45deg);
            position: absolute;
            background-color: ${background};`;
      this.#popper.appendChild(this.#arrow);
    }
  }

  //use init event
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
        }, this.#options.duration);
      });

      this.#popper.addEventListener('mouseenter', () => {
        this.#popper.style.display = 'block';
      });

      this.#popper.addEventListener('mouseleave', () => {
        this.#popper.style.display = 'none';
      });
    }

    if (this.#options.event == 'click') {
      this.#trigger.addEventListener('click', () => {
        if (this.#show) {
          this.#popper.style.opacity = 0;
          setTimeout(() => {
            this.#popper.style.display = 'none';
          }, this.#options.duration);
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
  //use placement
  #placement() {
    switch (this.#options.placement) {
      case 'top-left':
        this.#placementTopLeft();
        break;
      case 'top':
        this.#placementTop();
        break;
      case 'top-right':
        this.#placementTopRight();
        break;
      case 'right-top':
        this.#placementRightTop();
        break;
      case 'right':
        this.#placementRight();
        break;
      case 'right-bottom':
        this.#placementRightBottom();
        break;
      case 'bottom-left':
        this.#placementBottomLeft();
        break;
      case 'bottom':
        this.#placementBottom();
        break;
      case 'bottom-right':
        this.#placementBottomRight();
        break;
      case 'left':
        this.#placementLeft();
        break;
      case 'left-top':
        this.#placementLeftTop();
        break;
      case 'left-bottom':
        this.#placementLeftBottom();
        break;

      /*case 'auto':
        this.#placementAuto();
        break;
      default:
        this.#placementTop();*/
    }
  }

  #placementTopLeft() {
    this.#popper.style.left = this.#triggerDimensions.left + 'px';
    this.#popper.style.top =
      this.#triggerDimensions.top - this.#popperDimensions.height - 25 + 'px';
    if (this.#options.arrow) {
      this.#arrow.style.cssText += `bottom: -5px;left: ${
        this.#triggerDimensions.width / 2 - 5
      }px;`;
    }
  }

  #placementTop() {
    this.#popper.style.left =
      this.#triggerDimensions.left +
      (this.#triggerDimensions.width - this.#popperDimensions.width) / 2 +
      'px';
    this.#popper.style.top =
      this.#triggerDimensions.top - this.#popperDimensions.height - 15 + 'px';

    if (this.#options.arrow) {
      this.#arrow.style.cssText += `bottom: -5px; 
        left: ${this.#popperDimensions.width / 2 - 5}px;`;
    }
  }

  #placementTopRight() {
    this.#popper.style.right =
      window.innerWidth - this.#triggerDimensions.right + 'px';
    this.#popper.style.top =
      this.#triggerDimensions.top - this.#popperDimensions.height - 15 + 'px';

    if (this.#options.arrow) {
      this.#arrow.style.cssText += `bottom: -5px;
      right: ${this.#triggerDimensions.width / 2 - 5}px;`;
    }
  }

  #placementRightTop() {
    this.#popper.style.left = this.#triggerDimensions.right + 15 + 'px';
    this.#popper.style.top = this.#triggerDimensions.top + 'px';

    if (this.#options.arrow) {
      this.#arrow.style.cssText += `top: ${
        this.#triggerDimensions.height / 2
      }px;
      left: -5px;`;
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

  #placementRightBottom() {
    this.#popper.style.left = this.#triggerDimensions.right + 15 + 'px';
    this.#popper.style.top =
      this.#triggerDimensions.bottom - this.#popperDimensions.height + 'px';

    if (this.#options.arrow) {
      this.#arrow.style.cssText += `bottom: ${
        this.#triggerDimensions.height / 2
      }px;
      left: -5px;`;
    }
  }

  #placementBottomLeft() {
    this.#popper.style.left = this.#triggerDimensions.left + 'px';
    this.#popper.style.top = this.#triggerDimensions.bottom + 15 + 'px';

    if (this.#options.arrow) {
      this.#arrow.style.cssText += `top: -5px;
         left: ${this.#triggerDimensions.width / 2 - 5}px;`;
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

  #placementBottomRight() {
    this.#popper.style.left =
      this.#triggerDimensions.right - this.#popperDimensions.width + 'px';
    this.#popper.style.top = this.#triggerDimensions.bottom + 15 + 'px';

    if (this.#options.arrow) {
      this.#arrow.style.cssText += `top: -5px;
         right: ${this.#triggerDimensions.width / 2 - 5}px;`;
    }
  }

  #placementLeftTop() {
    this.#popper.style.top = this.#triggerDimensions.top + 'px';
    this.#popper.style.left =
      this.#triggerDimensions.left - this.#popperDimensions.width - 20 + 'px';

    if (this.#options.arrow) {
      this.#arrow.style.cssText += `top: ${
        this.#triggerDimensions.height / 2 + 5
      }px;right: -5px;`;
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

  #placementLeftBottom() {
    this.#popper.style.top =
      this.#triggerDimensions.bottom - this.#popperDimensions.height + 'px';
    this.#popper.style.left =
      this.#triggerDimensions.left - this.#popperDimensions.width - 20 + 'px';

    if (this.#options.arrow) {
      this.#arrow.style.cssText += `bottom: ${
        this.#triggerDimensions.height / 2 - 5
      }px;right: -5px;`;
    }
  }
}
