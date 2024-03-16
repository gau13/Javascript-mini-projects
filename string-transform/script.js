const userInput = document.querySelector("#text");
const lower = document.querySelector("#lower");
const upper = document.querySelector("#upper");
const camel = document.querySelector("#camel");
const pascal = document.querySelector("#pascal");
const snake = document.querySelector("#snake");
const kebab = document.querySelector("#kebab");
const trim = document.querySelector("#trim");

const capitalizeString = (str) => {
  return str[0].toUpperCase() + str.slice(1, str.length);
};

const camelCase = (string) => {
  const lowerCaseStr = string.toLowerCase();
  const filter = lowerCaseStr.split(" ");
  const finalArray = filter.map((word, i) => {
    if (i === 0) return word;

    return capitalizeString(word);
  });
  return finalArray.join("");
};

const pascalCase = (string) => {
  const lowerCaseStr = string.toLowerCase();
  const filter = lowerCaseStr.split(" ");
  const finalArray = filter.map((word) => {
    return capitalizeString(word);
  });
  return finalArray.join("");
};

const snakeCase = (string) => {
  return string.replaceAll(" ", "_");
};

const kebabCase = (string) => {
  return string.replaceAll(" ", "-");
};

const trimCase = (string) => {
  return string.replaceAll(" ", "");

  //   const res = string.trim();
  //   console.log(res);
};
userInput.addEventListener("input", () => {
  lower.value = userInput.value.toLowerCase();
  upper.value = userInput.value.toUpperCase();
  camel.value = camelCase(userInput.value);
  pascal.value = pascalCase(userInput.value);
  snake.value = snakeCase(userInput.value);
  kebab.value = kebabCase(userInput.value);
  trim.value = trimCase(userInput.value);
});
