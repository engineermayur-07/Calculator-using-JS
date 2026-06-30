<div align="center">

# 🧮 Calculator — HTML, CSS & JavaScript

**A simple, clean browser-based calculator built to practice front-end fundamentals**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat)](LICENSE)

</div>

---

## 📖 About The Project

A lightweight, no-dependency calculator built entirely with vanilla **HTML, CSS, and JavaScript**. The project was created to practice core front-end syntax and DOM manipulation — handling button clicks, building an expression string, and evaluating it to display the result, all without any external libraries or frameworks.

---

## ✨ Features

- **Standard arithmetic operations** — addition, subtraction, multiplication, division
- **Exponentiation (`^`)** — calculates powers using JavaScript's `**` operator
- **Modulus (`%`)** — calculates remainder
- **Decimal support** — handles floating-point numbers via the `.` button
- **All Clear (AC)** — resets the display instantly
- **Live expression display** — builds and shows the full expression as you type, just like a real calculator
- **Single-click evaluation** — the `=` button evaluates the full expression and displays the result

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript (DOM manipulation, `eval`-based expression evaluation) |

---

## 📁 Project Structure

```
Calculator-using-JS/
│
├── index.html        # Calculator UI — button grid and display
├── styles.css         # Styling for layout, buttons, and display
└── script.js          # Calculator logic — appendToDisplay(), calculate(), allClear()
```

---

## 🚀 Getting Started

No installation or build tools required — this is a pure static site.

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/engineermayur-07/Calculator-using-JS.git
cd Calculator-using-JS

# 2. Open index.html directly in your browser
# (double-click the file, or use a live server)
```

Or simply open `index.html` in any modern web browser — no server needed.

---

## 🖥️ How It Works

```
User clicks a digit/operator button
        ↓
appendToDisplay(value)  →  appends the value to the display's current expression
        ↓
User clicks "="
        ↓
calculate()  →  evaluates the expression string and renders the result
        ↓
User clicks "AC"
        ↓
allClear()  →  resets the display to empty
```

The calculator builds up an expression string as the user clicks buttons (e.g. `12*5-3`) and evaluates it as a single JavaScript expression when `=` is pressed — keeping the logic simple and readable.

---

## 🎯 Button Reference

| Button | Action |
|---|---|
| `0`–`9` | Append digit to expression |
| `.` | Append decimal point |
| `+` `-` `*` `/` | Append arithmetic operator |
| `^` | Append exponentiation operator |
| `%` | Append modulus operator |
| `=` | Evaluate and display result |
| `AC` | Clear the display |

---

## 🎓 What This Project Demonstrates

- DOM element selection and manipulation (`document.getElementById`)
- Event handling via inline `onclick` attributes
- Building and evaluating dynamic string expressions in JavaScript
- Basic responsive layout with CSS Grid/Flexbox for the button panel

---

## 🤝 Contributing

This is a practice project, but suggestions are welcome!

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Developer

<table>
  <tr>
    <td align="center">
      <b>Mayur B. Gund</b><br><br>
      <a href="https://linkedin.com/in/mgund1920">
        <img src="https://img.shields.io/badge/LinkedIn-mgund1920-0077B5?style=flat&logo=linkedin&logoColor=white"/>
      </a>&nbsp;
      <a href="mailto:mgund1920@gmail.com">
        <img src="https://img.shields.io/badge/Gmail-mgund1920@gmail.com-D14836?style=flat&logo=gmail&logoColor=white"/>
      </a>&nbsp;
      <a href="https://github.com/engineermayur-07">
        <img src="https://img.shields.io/badge/GitHub-engineermayur--07-181717?style=flat&logo=github&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <i>Built with HTML, CSS & JavaScript — a fundamentals practice project.</i>
</div>
