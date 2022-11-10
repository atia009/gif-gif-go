import generateImage from "./generateImage";

function startRefreshBtnFunctionality() {
  const refreshBtn = document.getElementById("btn-refresh");

  refreshBtn.onclick = generateImage;
}

export default startRefreshBtnFunctionality;
