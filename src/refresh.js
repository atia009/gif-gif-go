import { setImg } from "./image";

const Refresh = () => {
  const btn = document.createElement("button");
  btn.textContent = "Refresh";

  // bind events
  btn.addEventListener("click", setImg);

  // functions
  function appendBtnToDOM(element) {
    document.body.append(element);
  }

  appendBtnToDOM(btn);
};

export default Refresh;
