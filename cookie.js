/*
TOO LAZY FOR COOKIE CLICKER
CookieClicker, v. 2.031

1. Copy everything here.
2. https://orteil.dashnet.org/cookieclicker/
3. Ctrl + Shift + J in Chrome.
4. Paste this shit into the console.
*/

(function () {

  /***********************
  UPGRADE CRATES
  ***********************/
  const upgrades = document.querySelectorAll('#upgrades');
  const config = { childList: true };

  // Auto click upgrades when they are enabled
  const cb = function(mutationList, observer) {
    for(const mutation of mutationList) {
      console.log(mutation);
      if (mutation.target.childNodes[0].classList.contains('enabled')) {
        mutation.target.childNodes[0].click();
      }
    };
  };

  const observer = new MutationObserver(cb);
  observer.observe(upgrades[0], config);

  /***********************
  BUILDINGS
  ***********************/
  const products = document.querySelectorAll('#products .product');

  // Auto click buildings when they are enabled
  for(const product of products) {
    const config = { attributes: true };
    const cb = function(mutationList, observer) {
      for(const mutation of mutationList) {
        if ( mutation.target.className.includes('upgrade')) { console.log(mutation.target.className) };
        if ( mutation.target.classList.contains('enabled')) {
            mutation.target.click();
        };
      };
    };

    const observer = new MutationObserver(cb);
    observer.observe(product, config);
  };
})();
