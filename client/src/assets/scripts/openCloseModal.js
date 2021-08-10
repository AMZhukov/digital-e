const openCloseModalWindow = (
  buttonStartModalId,
  modalWindowId,
  formId,
  modalWindowActiveClass,
  formActiveClass,
  modalWindowDisplayClass,
  formDisplayClass,
  buttonCloseClass,
) => {
  const buttonStartModal = document.querySelector(buttonStartModalId);
  const form = document.querySelector(formId);
  const modalWindow = document.querySelector(modalWindowId);
  const buttonClose = document.querySelector(buttonCloseClass);
  buttonStartModal.addEventListener('click', (event) => {
    if (event.target === buttonStartModal) {
      modalWindow.classList.add(modalWindowActiveClass);
      modalWindow.classList.add(modalWindowDisplayClass);
      form.classList.add(formActiveClass);
      form.classList.add(formDisplayClass);
      document.querySelector('.app').style.overflow = 'hidden';
    }
  });
  modalWindow.addEventListener('click', (event) => {
    if (event.target.closest(modalWindowId)) {
      closeModal();
    }
  });
  buttonClose.addEventListener('click', (event) => {
    if (event.target.closest(buttonCloseClass)) {
      closeModal();
    }
  });
  function closeModal() {
    modalWindow.classList.remove(modalWindowActiveClass);
    setTimeout(() => modalWindow.classList.remove(modalWindowDisplayClass), 600);
    form.classList.remove(formActiveClass);
    setTimeout(() => form.classList.remove(formDisplayClass), 600);
    document.querySelector('.app').style.overflow = 'auto';
    form.style.overflow = 'hidden';
  }
};
export { openCloseModalWindow };
