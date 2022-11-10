import generateImage from "./generateImage";

let currentValue;

function startRefreshBtnFunctionality() {
  const refreshBtn = document.getElementById("btn-refresh");

  refreshBtn.onclick = () => {
    generateImage(currentValue);
  };
}

function getInputValue() {
  const input = document.querySelector("input");
  currentValue = input.value;
  input.value = "";
  return currentValue;
}

function startSubmitBtnFunctionality() {
  const submitBtn = document.getElementById("btn-submit");

  submitBtn.onclick = () => {
    generateImage(getInputValue());
  };
}

export { startRefreshBtnFunctionality, startSubmitBtnFunctionality };
