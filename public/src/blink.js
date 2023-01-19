/*
 * Function that help positionning the the popper element in tooltip component
 * From another project
 */

export default function tooltip(
  trigger,
  popper,
  options = { placement: 'auto' }
) {
  if (options.placement == 'auto') {
    hasPlace('top', trigger, popper)
      ? placementTop(trigger, popper)
      : hasPlace('bottom', trigger, popper)
      ? placementBottom(trigger, popper)
      : hasPlace('right', trigger, popper)
      ? placementRight(trigger, popper)
      : hasPlace('left', trigger, popper)
      ? placementLeft(trigger, popper)
      : (placementTop(trigger, popper),
        console.warn(
          'Be carreful, there is no place for the tooltip to show !'
        ));
  } else {
    placement(options.placement, trigger, popper);
    hasPlace(options.placement, trigger, popper)
      ? null
      : console.warn(
          'Be carreful, there is no place for the tooltip to show !'
        );
  }
}

function hasPlace(direction, trigger, popper) {
  switch (direction) {
    case 'top':
      return (
        trigger.getBoundingClientRect().top >
        popper.getBoundingClientRect().height + 20
      );
    case 'bottom':
      return (
        window.innerHeight - trigger.getBoundingClientRect().bottom >
        popper.getBoundingClientRect().height + 20
      );
    case 'left':
      return (
        trigger.getBoundingClientRect().left >
        popper.getBoundingClientRect().width + 20
      );
    case 'right':
      return (
        window.innerWidth - trigger.getBoundingClientRect().right >
        popper.getBoundingClientRect().width + 20
      );
  }
}

function placement(direction, trigger, popper) {
  switch (direction) {
    case 'top':
      placementTop(trigger, popper);
      break;
    case 'bottom':
      placementBottom(trigger, popper);
      break;
    case 'left':
      placementLeft(trigger, popper);
      break;
    case 'right':
      placementRight(trigger, popper);
      break;
    default:
      placementTop(trigger, popper);
  }
}

function placementTop(trigger, popper) {
  popper.style.left =
    trigger.getBoundingClientRect().left +
    (trigger.getBoundingClientRect().width -
      popper.getBoundingClientRect().width) /
      2 +
    'px';
  popper.style.top =
    trigger.getBoundingClientRect().top -
    popper.getBoundingClientRect().height -
    10 +
    'px';
}

function placementBottom(trigger, popper) {
  popper.style.left =
    trigger.getBoundingClientRect().left +
    (trigger.getBoundingClientRect().width -
      popper.getBoundingClientRect().width) /
      2 +
    'px';
  popper.style.top = trigger.getBoundingClientRect().bottom + 10 + 'px';
}

function placementLeft(trigger, popper) {
  popper.style.top =
    trigger.getBoundingClientRect().top +
    (trigger.getBoundingClientRect().height -
      popper.getBoundingClientRect().height) /
      2 +
    'px';
  popper.style.left =
    trigger.getBoundingClientRect().left -
    popper.getBoundingClientRect().width -
    10 +
    'px';
}

function placementRight(trigger, popper) {
  popper.style.top =
    trigger.getBoundingClientRect().top +
    (trigger.getBoundingClientRect().height -
      popper.getBoundingClientRect().height) /
      2 +
    'px';
  popper.style.left = trigger.getBoundingClientRect().right + 10 + 'px';
}
