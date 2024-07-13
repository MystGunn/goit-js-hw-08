const form = document.querySelector('.feedback-form');

const saveToLocalStorage = (throttle((event) => {
    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500));

  form.addEventListener('input', saveToLocalStorage);

  document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const formData = JSON.parse(savedData);
      form.elements.email.value = formData.email || '';
      form.elements.message.value = formData.message || '';
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value
    };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  });

  function throttle(func, wait) {
    let timeout = null;
    let previous = 0;
    return function() {
      const now = new Date().getTime();
      const remaining = wait - (now - previous);
      const context = this;
      const args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(() => {
          previous = new Date().getTime();
          timeout = null;
          func.apply(context, args);
        }, remaining);
      }
    };
  }
