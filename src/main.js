import "./style.css";
import mouseKeys from "./data/mouseKeys.js";
import keyboardKeys from "./data/keyboardKeys.js";
import { keyboardEvents } from "./events/keyboardEvents.js";
import { mouseEvents } from "./events/mouseEvents.js";

function renderApp() {
  return `
    <header>
      <h1>Keyboard & Mouse Tester</h1>
      <p class="intro">
        Kliknij dowolny klawisz lub przycisk myszy, aby sprawdzić czy działa poprawnie.
      </p>
      <p class="disclaimer">
        <b>Uwaga:</b> klawisz Win zadziała poprawnie w teście, ale ze względów
        systemowych dodatkowo otworzy menu Start. Boczne przyciski myszy (wstecz/dalej)
        zostały całkowicie usunięte z testu, ponieważ ograniczenia systemowe i
        przeglądarkowe uniemożliwiały przeprowadzenie ich rzetelnego testu.
      </p>
      <button type="button" id="reset">reset</button>
    </header>
    <main>
      <div class="keyboard">
      <div class="lock-indicators">
        <div class="lock-indicator">
          <div class="lock-dot" data-lock="NumLock"></div>
          Num Lock
        </div>
        <div class="lock-indicator">
          <div class="lock-dot" data-lock="CapsLock"></div>
          Caps Lock
        </div>
        <div class="lock-indicator">
          <div class="lock-dot" data-lock="ScrollLock"></div>
          Scr Lock
        </div>
      </div>
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
}

document.querySelector("#app").innerHTML = renderApp();
keyboardEvents();
mouseEvents();
