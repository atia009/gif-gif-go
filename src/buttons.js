import generateImage from "./generateImage";

function startRefreshBtnFunctionality() {
  const refreshBtn = document.getElementById("btn-refresh");

  refreshBtn.onclick = generateImage;
}

function getInputValue() {
  const input = document.querySelector("input");
  const inputValue = input.value;
  input.value = "";
  return inputValue;
}

function startSubmitBtnFunctionality() {
  const submitBtn = document.getElementById("btn-submit");

  submitBtn.onclick = () => {
    generateImage(getInputValue());
  };
}

export { startRefreshBtnFunctionality, startSubmitBtnFunctionality };
