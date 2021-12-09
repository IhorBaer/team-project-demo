(() => {
  const refs = {
    openContactsBtn: document.querySelector('[data-contacts-modal-open]'),
    closeContactsBtn: document.querySelector('[data-contacts-modal-close]'),
    contactsModal: document.querySelector('[data-contacts-modal]'),
  };

  refs.openContactsBtn.addEventListener('click', toggleModal);
  refs.closeContactsBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.contactsModal.classList.toggle('is-hidden');
  }
})();
