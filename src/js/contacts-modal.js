(() => {
  const refs = {
    openContactsBtn: document.querySelector('[contacts-modal-open]'),
    closeContactsBtn: document.querySelector('[contacts-modal-close]'),
    contactsModal: document.querySelector('[contacts-modal]'),
  };

  refs.openContactsBtn.addEventListener('click', toggleModal);
  refs.closeContactsBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.contactsModal.classList.toggle('is-hidden');
  }
})();