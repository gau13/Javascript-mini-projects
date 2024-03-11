const add = document.querySelector("#btn1");
const sub = document.querySelector("#btn2");
const result = document.querySelector(".count");
const changeBy = document.querySelector(".title");
const reset = document.querySelector("#reset");

const addition = () => {
  const countValue = Number(result.innerText);
  const changeByVal = Number(changeBy.value);
  result.innerText = countValue + changeByVal;
};
const subtraction = () => {
  const countValue = Number(result.innerText);
  const changeByVal = Number(changeBy.value);
  result.innerText = countValue - changeByVal;
};

const resetValue = () => {
  result.innerText = 0;
};

add.addEventListener("click", addition);
sub.addEventListener("click", subtraction);
reset.addEventListener("click", resetValue);
