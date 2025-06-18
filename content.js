let adwareCount = 0;
let spywareCount = 0;

const badSelectors = [
  "iframe[src*='ads']",
  "[src*='spyware']",
  "[id*='ad']",
  "[class*='ad']",
  "[id*='track']",
  "[class*='track']",
  "[src*='analytics']",
  "[src*='pixel']",
  "[src*='fingerprint']",
  "script[src*='beacon']"
];
function removeBadStuff() {
  badSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.remove();
      
      if (
        selector.includes("ad") ||
        selector.includes("ads") ||
        selector.includes("pixel") ||
        selector.includes("analytics")
      ) {
        adwareCount++;
      } else {
        spywareCount++;
      }
    });
  });
}
function detectKeyloggers() {
  document.querySelectorAll("input").forEach(input => {
    const onKeyDown = input.getAttribute("onkeydown");
    const onKeyPress = input.getAttribute("onkeypress");

    if (
      (onKeyDown && onKeyDown.toLowerCase().includes("log")) ||
      (onKeyPress && onKeyPress.toLowerCase().includes("log"))
    ) {
      input.removeAttribute("onkeydown");
      input.removeAttribute("onkeypress");
      spywareCount++;
    }
  });
}
function showAlert() {
  if (adwareCount > 0 || spywareCount > 0) {
    alert(
      `Blocked: ${adwareCount} Adware element${adwareCount !== 1 ? 's' : ''}\nBlocked: ${spywareCount} Spyware element${spywareCount !== 1 ? 's' : ''}`
    );
    adwareCount = 0;
    spywareCount = 0;
  }
}
setInterval(() => {
  removeBadStuff();
  detectKeyloggers();
  showAlert();
}, 3000);
