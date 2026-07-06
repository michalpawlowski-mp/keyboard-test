import "./style.css";
import mouseKeys from "./data/mouseKeys.js";
import keyboardKeys from "./data/keyboardKeys.js";
import { keyboardEvents } from "./events/keyboardEvents.js";
import { mouseEvents } from "./events/mouseEvents.js";

keyboardEvents();
mouseEvents();

document.querySelector("#app").innerHTML = `
  <div class="keyboard">
    ${keyboardKeys.map((key) => `<div class="key" data-key="${key.code}">${key.label}</div>`).join("")}
  </div>
  <div class="mouse">
    ${mouseKeys.map((key) => `<div class="mouse-btn" data-key="${key.code}"></div>`).join("")}
  </div>
`;
