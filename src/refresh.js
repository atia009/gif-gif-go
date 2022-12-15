import appendElementToDOM from "./helper-functions";
import { setImg } from "./image";

const Refresh = () => {
  const btn = document.createElement("button");
  btn.textContent = "Refresh";

  // cache DOM
  appendElementToDOM(btn);

  // bind events
  btn.addEventListener("click", setImg);
};

export default Refresh;
