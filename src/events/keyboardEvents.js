export function keyboardEvents() {
  window.addEventListener("keydown", (e) => {
    e.preventDefault();
    const keyEl = document.querySelector(`[data-key="${e.code}"]`);
    if (keyEl) {
      keyEl.classList.add("active");
      keyEl.classList.add("tested");
    }

    updateLockIndicators(e);
  });

  window.addEventListener("keyup", (e) => {
    const keyEl = document.querySelector(`[data-key="${e.code}"]`);
    if (keyEl) keyEl.classList.remove("active");
  });

  window.addEventListener("mousemove", updateLockIndicators, { once: true });
  window.addEventListener("click", updateLockIndicators);

  const resetBtn = document.querySelector("#reset");
  resetBtn.addEventListener("click", () => {
    const testedKeys = document.querySelectorAll(".key.tested");
    testedKeys.forEach((key) => key.classList.remove("tested"));
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
