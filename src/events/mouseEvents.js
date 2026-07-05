export function mouseEvents() {
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  window.addEventListener("mousedown", (e) => {
    const keyEl = document.querySelector(`[data-key="${e.button}"]`);
    if (keyEl) keyEl.classList.add("active");
  });

  window.addEventListener("mouseup", (e) => {
    const keyEl = document.querySelector(`[data-key="${e.button}"]`);
    if (keyEl) keyEl.classList.remove("active");
  });
}
