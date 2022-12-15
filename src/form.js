import { setImg } from "./image";
import appendElementToDOM from "./helper-functions";

const Form = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  let currentValue;

  btn.textContent = "Search";

  // functions
  function setInput() {
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Search new gif");
  }

  function getCurrentValue() {
    return currentValue;
  }

  function updateCurrentValue() {
    currentValue = input.value;
    input.value = "";
  }

  function startBtnFunctionality() {
    updateCurrentValue();
    setImg(getCurrentValue());
  }

  setInput();

  // cache DOM
  form.append(input, btn);
  appendElementToDOM(form);

  // bind events
  btn.addEventListener("click", startBtnFunctionality);
};

export default Form;
