export function keyboardEvents() {
  window.addEventListener("keydown", (e) => {
    const keyEl = document.querySelector(`[data-key="${e.code}"]`);
    if (keyEl) keyEl.classList.add("active");
  });

  window.addEventListener("keyup", (e) => {
    const keyEl = document.querySelector(`[data-key="${e.code}"]`);
    if (keyEl) keyEl.classList.remove("active");
  });
}
