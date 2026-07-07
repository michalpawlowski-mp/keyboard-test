import "./style.css";
import mouseKeys from "./data/mouseKeys.js";
import keyboardKeys from "./data/keyboardKeys.js";
import { keyboardEvents } from "./events/keyboardEvents.js";
import { mouseEvents } from "./events/mouseEvents.js";

keyboardEvents();
mouseEvents();

document.querySelector("#app").innerHTML = `
  <header>
    <h1>Keyboard & Mouse Tester</h1>
    <p>Kliknij dowolny klawisz lub przycisk myszy, aby sprawdzić czy działa poprawnie.</p>
  </header>
  <main>
    <div class="keyboard">
    ${keyboardKeys
      .map(
        (row) => `
      <div class="keyboard-row">
      ${row.map((key) => `<div class="key" data-key="${key.code}">${key.label}</div>`).join("")}
      </div>
      `,
      )
      .join("")}
    </div>
    <div class="mouse">
    ${mouseKeys.map((key) => `<div class="mouse-btn" data-key="${key.code}"></div>`).join("")}
    </div>
  </main>
`;
