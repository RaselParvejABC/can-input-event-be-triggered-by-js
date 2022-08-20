const inputElement = document.querySelector("#input-element");

console.log(inputElement);

inputElement.addEventListener("input", function () {
  console.log(this.value);
  document.querySelector("#output").textContent = this.value;
});

setInterval(function () {
  inputElement.value = Math.random();
  inputElement.dispatchEvent(new Event("input"));
}, 3000);
