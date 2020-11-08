window.onload = () => {
  const form = document.querySelector(".site-footer__form");
  const inputForm = document.querySelector(".site-footer__form-input");

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const inputValue = inputForm.value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailRegex.test(inputValue)) {
      inputForm.classList.add("error");
    } else {
      inputForm.classList.remove("error");
    }
  });
};
