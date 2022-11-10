import generateImage from "./generateImage";

function startRefreshBtnFunctionality() {
  const refreshBtn = document.getElementById("btn-refresh");

  refreshBtn.onclick = generateImage;
}

function getInputValue() {
  return document.querySelector("input").value;
}

function startSubmitBtnFunctionality() {
  const submitBtn = document.getElementById("btn-submit");

  submitBtn.onclick = () => {
    generateImage(getInputValue());
  };
}

export { startRefreshBtnFunctionality, startSubmitBtnFunctionality };
