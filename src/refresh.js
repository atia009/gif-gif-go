import appendElementToDOM from "./helper-functions";
import { setImg } from "./image";

const Refresh = () => {
  const btn = document.createElement("button");

  // cache DOM
  appendElementToDOM(btn);

  // functions
  function setBtn() {
    btn.textContent = "Refresh";
  }

  setBtn();

  // bind events
  btn.addEventListener("click", setImg);
};

export default Refresh;
