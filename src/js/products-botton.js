
  (() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-ice-cream-open]'),
      closeMenuBtn: document.querySelector('[data-menu-ice-cream-close]'),
      menu: document.querySelector('[data-menu-ice-cream]'),
    };

    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.menu.classList.toggle('is-open-recipe');
    }
  })();

  (() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-ice-coffee-open]'),
      closeMenuBtn: document.querySelector('[data-menu-ice-coffee-close]'),
      menu: document.querySelector('[data-menu-ice-coffee]'),
    };

    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.menu.classList.toggle('is-open-recipe');
    }
  })();

  (() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-milkshakes-open]'),
      closeMenuBtn: document.querySelector('[data-menu-milkshakes-close]'),
      menu: document.querySelector('[data-menu-milkshakes]'),
    };

    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.menu.classList.toggle('is-open-recipe');
    }
  })();
