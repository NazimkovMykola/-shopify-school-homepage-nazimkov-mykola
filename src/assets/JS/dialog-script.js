const setLocaleStorageDialog = () => {
  window.localStorage.setItem("isDialogViewed", "true");
};

export function setDialog() {
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const dialog = document.querySelector("#dialog");
      if (dialog && window.localStorage.getItem("isDialogViewed") !== "true") {
        dialog.showModal();
        document.body.classList.add("no-scroll");
      }
      const closeDialogBtn = dialog.querySelector("#close-dialog-btn");
      if (closeDialogBtn) {
        closeDialogBtn.addEventListener("click", () => {
          dialog.close();
          document.body.classList.remove("no-scroll");
        });
      }
      const btnFormSubmit = dialog.querySelector('button[type="submit"]');
      if (btnFormSubmit) {
        btnFormSubmit.addEventListener("click", () => {
          setLocaleStorageDialog();
        });
      }
      dialog.addEventListener("close", () => {
        dialog.remove();
        setLocaleStorageDialog();
        document.body.classList.remove("no-scroll");
      });
    }, 1000);
  });
}
