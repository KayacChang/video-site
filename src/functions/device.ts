import MobileDetect from "mobile-detect";

function Detector() {
  return new MobileDetect(window.navigator.userAgent);
}

export function isMobile() {
  return Boolean(Detector().mobile() || Detector().phone());
}

export function isTablet() {
  return Boolean(Detector().tablet());
}
