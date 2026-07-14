const STORAGE_KEY = "glowColor";
const DEFAULT_COLOR = "#292929";

export function initAccentPicker() {
  const swatches = document.querySelectorAll(".accent-swatch");
  const savedColor = localStorage.getItem(STORAGE_KEY) || DEFAULT_COLOR;

  applyColor(savedColor, swatches);

  swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      const color = swatch.dataset.color;
      applyColor(color, swatches);
      localStorage.setItem(STORAGE_KEY, color);
    });
  });
}

function applyColor(color, swatches) {
  document.documentElement.style.setProperty("--glow", color);
  swatches.forEach((s) => {
    s.classList.toggle("selected", s.dataset.color === color);
  });
}
