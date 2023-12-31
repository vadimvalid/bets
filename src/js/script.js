const openDialog = () => {
  const dialog = document.getElementById('dialog');
  dialog.showModal();
};

const closeDialog = () => {
  const dialog = document.getElementById('dialog');
  dialog.close();
};

const getAppPopup = (e) => {
  const button = document.querySelector('.section--app .open-popup');
  const buttonClose = document.querySelector('.dialog__close');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    openDialog();
  });

  buttonClose.addEventListener('click', (e) => {
    e.preventDefault();
    closeDialog();
  });
};

getAppPopup();
