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
      };
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

    const shouldBuy = function(p, c, s, i) {
      const ret = ( p - (0.15355651529 * c) / (s * i) );
      return ret <= 1
              ? true
              : false;
    };

    const productCb = function(mutationList, productObserver) {
      const cps = document.querySelector('#cookiesPerSecond');

      for(const mutation of mutationList) {

        if ( mutation.target.classList.contains('enabled')) {

          // Convert number names to Numbers
          const arrToNum = function (arr) {
            const a = Number(arr[0]);
            const b = arr[1].substring(0, 2) == '' ? 1
            : arr[1].substring(0, 2) == 'Tho' ? 1.0e+3
            : arr[1].substring(0, 2) == 'Mil' ? 1.0e+6
            : arr[1].substring(0, 2) == 'Tri' ? 1.0e+9
            : arr[1].substring(0, 2) == 'Qua' ? 1.0e+12
            : arr[1].substring(0, 2) == 'Qui' ? 1.0e+15
            : arr[1].substring(0, 2) == 'Sex' ? 1.0e+18
            : arr[1].substring(0, 2) == 'Sep' ? 1.0e+21
            : arr[1].substring(0, 2) == 'Oct' ? 1.0e+24
            : arr[1].substring(0, 2) == 'Non' ? 1.0e+27
            : 1.0e+30
            return a * b;
          };

          const t = mutation.target;
          const p = arrToNum(t.querySelector('.price').innerText.split(' '));
          const c = Number(t.querySelector('.owned').innerText);
          const s = arrToNum(cps.innerText.match(/[1-9].*/g)[0].split(' '));
          const i = Number(t.attributes.id.value.slice(-1));

          const buy = shouldBuy(p,c,s,i);

          if (buy) {
            mutation.target.click();
          };
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
      };
    };
  };

  const shimmerObserver = new MutationObserver(shimmerCb);
  shimmerObserver.observe(shimmers[0], shimmerOptions);

})();
