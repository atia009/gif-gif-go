import { setImg } from "./image";
import appendElementToDOM from "./helper-functions";

const Form = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  let currentValue;

  // cache DOM
  form.append(input, btn);
  appendElementToDOM(form);

  // functions
  function setInput() {
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Search new gif");
  }

  function setBtn() {
    btn.textContent = "Search";
    btn.setAttribute("type", "button");
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
  setBtn();

  // bind events
  btn.addEventListener("click", startBtnFunctionality);
};

export default Form;
