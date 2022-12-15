import { setImg } from "./image";

const Form = () => {
  const input = document.createElement("input");
  const submitBtn = document.createElement("button");
  let currentValue;

  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Search new gif");
  submitBtn.id = "btn-submit";
  submitBtn.textContent = "Search";

  // functions
  function getInputValue() {
    currentValue = input.value;
    input.value = "";
    return currentValue;
  }

  function startSubmitBtnFunctionality() {
    submitBtn.onclick = () => {
      setImg(getInputValue());
    };
  }

  startSubmitBtnFunctionality();
  document.body.append(input, submitBtn);
};

export default Form;
