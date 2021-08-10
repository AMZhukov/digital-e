const sendForm = (id, classView, popupId, classViewPopup, modalWindow, classModalWindow) => {
  const errorMessage = 'Something went wrong...';
  const loadMessage = 'Loading...';
  const successMessage = 'Thank! We will contact you shortly';
  const form = document.querySelector(id);
  const popup = document.querySelector(popupId);
  const modal = document.querySelector(modalWindow);

  const statusMessage = document.createElement('div');

  statusMessage.style.cssText = 'font-size: 2rem; color: blue;';

  if (form) {
    let initialValueButtonform = form.querySelector('button').textContent;
    form.addEventListener('submit', (event) => {
      if (form.querySelector('.error')) return;
      event.preventDefault();
      form.querySelector('button').textContent = loadMessage;
      const formData = new FormData(form);
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body)
        .then((respronce) => {
          if (respronce.status !== 200) {
            throw new Error('status network not 200');
          }
          console.log(classView, classViewPopup, classModalWindow);
          form.querySelector('button').textContent = initialValueButtonform;
          form.classList.remove(classView[0]);
          setTimeout(() => form.classList.remove(classView[1]), 700);

          popup.classList.add(classViewPopup[0]);
          setTimeout(() => popup.classList.add(classViewPopup[1]), 700);

          setTimeout(() => popup.classList.remove(classViewPopup[0]), 2000);
          setTimeout(() => popup.classList.remove(classViewPopup[1]), 2600);

          setTimeout(() => modal.classList.remove(classModalWindow[0]), 1400);
          setTimeout(() => modal.classList.remove(classModalWindow[1]), 3000);
          form.reset();
          document.querySelector('.app').style.overflow = 'auto';
        })
        .catch((error) => {
          form.querySelector('button').textContent = errorMessage;
          console.error(error);
        })
        .finally(() => {});
    });
  }

  const postData = (body) => {
    return fetch('http://localhost:30000/api/sendForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };
};
export { sendForm };
