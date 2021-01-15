(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

      const isModalOpen = refs.modal.classList('is-hidden');
      const method = isModalOpen ? "disableBodyScroll" : "enableBodyScroll";
      bodyScrollLock[method](refs.modal);
    }
    console.log(bodyScrollLock);
})();
