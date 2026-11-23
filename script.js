const form = document.getElementById("lead-form");
const message = document.getElementById("form-msg");

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name) {
      message.textContent = "Введите имя.";
      message.className = "form__msg form__msg--error";
      form.elements.name.focus();
      return;
    }

    if (!emailIsValid) {
      message.textContent = "Проверьте email: он должен выглядеть как name@example.com.";
      message.className = "form__msg form__msg--error";
      form.elements.email.focus();
      return;
    }

    message.textContent = "Спасибо! Форма работает в демонстрационном режиме — данные не отправлены.";
    message.className = "form__msg form__msg--ok";
    form.reset();
  });
}
