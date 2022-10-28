import { useEffect, useState, useCallback } from "react";

export function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY > 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY < 0) {
    apiObj.scrollPrev();
  }
}

const preventDefault = (ev) => {
  if (ev.preventDefault) {
    ev.preventDefault();
  }
  ev.returnValue = false;
};

const enableBodyScroll = () => {
  document && document.removeEventListener("wheel", preventDefault, false);
};
const disableBodyScroll = () => {
  document &&
    document.addEventListener("wheel", preventDefault, {
      passive: false,
    });
};

export function usePreventBodyScroll() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    hidden ? disableBodyScroll() : enableBodyScroll();

    return enableBodyScroll;
  }, [hidden]);

  const disableScroll = useCallback(() => setHidden(true), []);
  const enableScroll = useCallback(() => setHidden(false), []);
  return { disableScroll, enableScroll };
}
