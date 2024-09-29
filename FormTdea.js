let radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(function(radio) {
  if (radio.value === "0") {
    radio.checked = true;

    try {
      if (typeof radio.onclick === "function") {
        radio.onclick();
      }
    } catch (error) {
      console.error("Error" + radio.id, error);
    }
  }
});
