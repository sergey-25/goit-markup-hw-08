
    
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');

      const isMenuBtn = refs.menu.classList('is-hidden');
      const method = isMenuBtn ? "disableBodyScroll" : "enableBodyScroll";
      bodyScrollLock[method](refs.menu);
    }
    console.log(bodyScrollLock);
})();