export function keyboardEvents() {
  window.addEventListener("keydown", (e) => {
    e.preventDefault();
    const keyEl = document.querySelector(`[data-key="${e.code}"]`);
    if (keyEl) keyEl.classList.add("active");

    updateLockIndicators(e);
  });

  window.addEventListener("keyup", (e) => {
    const keyEl = document.querySelector(`[data-key="${e.code}"]`);
    if (keyEl) keyEl.classList.remove("active");
  });
}

function updateLockIndicators(e) {
  const lockDots = document.querySelectorAll(".lock-dot");

  lockDots.forEach((dot) => {
    const lockName = dot.dataset.lock;
    const isLocked = e.getModifierState(lockName);
    dot.classList.toggle("locked", isLocked);
  });
}
