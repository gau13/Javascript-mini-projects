const randomValue = Math.floor(Math.random() * 101);
console.log(randomValue);
const enteredValue = document.querySelector(".inputVal");
const submit = document.querySelector("#submit");
const show = document.querySelector("#show");
const msg = document.querySelector("#msg");
const button = document.querySelector("#disable");
const guessVal = [];

submit.addEventListener("click", () => {
  const userVal = enteredValue.value;
  guessVal.push(userVal);
  show.textContent = "Your Attempts: " + guessVal;
  enteredValue.value = "";
  if (userVal < randomValue) {
    msg.textContent = "Too low";
  } else if (userVal > randomValue) {
    msg.textContent = "Too high";
  } else {
    msg.textContent = "Congrats !! Gotcha";
    button.disabled = false;
  }
});

button.addEventListener("click", () => {
  enteredValue.value = "";

  show.textContent = "";
  msg.textContent = "";
  button.disabled = true;
});
