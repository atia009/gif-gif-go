function createHTML() {
  const img = document.createElement("img");

  const refreshBtn = document.createElement("button");
  refreshBtn.id = "btn-refresh";
  refreshBtn.textContent = "Refresh";

  document.body.append(img, refreshBtn);
}

export default createHTML;
