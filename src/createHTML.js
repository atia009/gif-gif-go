function createHTML() {
  const refreshBtn = document.createElement("button");
  refreshBtn.id = "btn-refresh";
  refreshBtn.textContent = "Refresh";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Search new gif");
  const submitBtn = document.createElement("button");
  submitBtn.id = "btn-submit";
  submitBtn.textContent = "Search";

  document.body.append(refreshBtn, input, submitBtn);
}

export default createHTML;
