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
  const upgradeOptions = { childList: true };

  // Auto click upgrades when they are enabled
  const upgradeCb = function(mutationList, upgradeObserver) {
    for(const mutation of mutationList) {
      if (mutation.target.childNodes[0].classList.contains('enabled')) {
        mutation.target.childNodes[0].click();
      }
    };
  };

  const upgradeObserver = new MutationObserver(upgradeCb);
  upgradeObserver.observe(upgrades[0], upgradeOptions);

  /***********************
  BUILDINGS
  ***********************/
  const products = document.querySelectorAll('#products .product');

  // Auto click buildings when they are enabled
  for(const product of products) {
    const productOptions = { attributes: true };
    const productCb = function(mutationList, productObserver) {
      for(const mutation of mutationList) {
        if ( mutation.target.classList.contains('enabled')) {
            mutation.target.click();
        };
      };
    };

    const productObserver = new MutationObserver(productCb);
    productObserver.observe(product, productOptions);
  };

  /***********************
  SHIMMERS
  ***********************/
  const shimmers = document.querySelectorAll('#shimmers');
  const shimmerOptions = { childList: true };

  // Auto click upgrades when they are enabled
  const shimmerCb = function(mutationList, shimmerObserver) {
    for(const mutation of mutationList) {
      if (mutation.target.childNodes.length > 0) {
        mutation.target.childNodes[0].click();
      }
    };
  };

  const shimmerObserver = new MutationObserver(shimmerCb);
  shimmerObserver.observe(shimmers[0], shimmerOptions);

})();

/*
15	0.1
100	1
1,100	8
12,000	47
130,000	260
1.4 million	1,400
20 million	7,800
330 million	44,000
5.1 billion	260,000
75 billion	1.6 million
1 trillion	10 million
14 trillion	65 million
170 trillion	430 million
2.1 quadrillion	2.9 billion
26 quadrillion	21 billion
310 quadrillion	150 billion
71 quintillion	1.1 trillion
12 sextillion	8.3 trillion
*/
