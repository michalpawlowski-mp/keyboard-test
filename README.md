# ⌨️ Keyboard & Mouse Tester

Wizualny tester klawiatury i myszy — sprawdź, czy wszystkie klawisze i przyciski działają poprawnie. Kliknij fizyczny klawisz lub przycisk myszy, a odpowiadający mu element na ekranie podświetli się w czasie rzeczywistym.

🔗 [**Live demo:**](https://keyboard-test-eight.vercel.app/)

## 📋 O projekcie

Projekt stworzony dla zabawy i do portfolio — prosty, ale kompletny przykład pracy z natywnymi eventami klawiatury i myszy w czystym JavaScript, bez żadnego frameworka.

### Funkcjonalności

- Pełnowymiarowa wizualna klawiatura (104 klawisze, układ ANSI z numpadem)
- Podświetlanie klawisza w momencie fizycznego wciśnięcia (`keydown` / `keyup`)
- Test przycisków myszy: lewy, prawy, scroll
- Blokada domyślnych akcji przeglądarki (np. F3 - wyszukiwarka, F5 - odświeżanie, Tab - zmiana fokusu), żeby test nie przeszkadzał w korzystaniu ze strony

### Znane ograniczenia

- **Przyciski boczne myszy (wstecz/dalej)** zostały celowo usunięte z testera. W większości przeglądarek wywołują nawigację w historii na poziomie systemowym, którego nie da się zablokować z poziomu JavaScript — więc ich testowanie psułoby UX (cofałoby stronę zamiast pokazywać wynik testu).
- **Klawisz Win** zadziała poprawnie w teście (podświetli się na wizualnej klawiaturze), ale ze względów systemowych dodatkowo otworzy menu Start — przeglądarka nie ma możliwości zablokowania tego zachowania, bo jest ono przechwytywane przez system operacyjny zanim JavaScript zdąży zareagować.

## 🛠️ Stack technologiczny

- **Vite** — bundler i dev server
- **Vanilla JavaScript** (ES Modules) — bez frameworka
- **CSS** (custom properties, Flexbox) — bez preprocesorów i bibliotek UI

## 🧠 Decyzje techniczne

**`event.code` zamiast `event.key`** — do rozpoznawania klawiszy używane jest `event.code`, które zwraca fizyczną pozycję klawisza niezależnie od układu klawiatury (np. zawsze `KeyA`, bez względu na Shift/CapsLock/język). Dzięki temu wizualna klawiatura reaguje na _fizyczne_ położenie klawisza, a nie na wpisany znak.

**Dane jako tablica rzędów** — układ klawiatury jest renderowany na podstawie tablicy tablic (rząd po rzędzie), a nie jednej płaskiej listy. Dzięki temu wizualny podział na rzędy odpowiada faktycznemu układowi klawiatury, niezależnie od szerokości ekranu.

## 🚀 Uruchomienie lokalnie

```bash
git clone https://github.com/michalpawlowski-mp/keyboard-test
cd keyboard-test
npm install
npm run dev
```

Aplikacja wystartuje domyślnie pod adresem `http://localhost:5173`.

### Build produkcyjny

```bash
npm run build
```

Gotowe pliki wylądują w folderze `dist/`.

## 👤 Autor

**Michał Pawłowski**
Portfolio: [michalpawlowski.pl](https://michalpawlowski.pl)
