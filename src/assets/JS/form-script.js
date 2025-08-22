export function mainPageFormScript() {
  const form = document.querySelector(".main-page-form__form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank You");
    form.reset();
  });
}
