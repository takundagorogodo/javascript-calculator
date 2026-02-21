# 🧮 JavaScript Calculator

A simple and responsive calculator built using HTML, CSS, and JavaScript.  
It performs basic arithmetic operations and includes clear and delete functionality.

---
## 📌 Features
- ➕ Addition
- ➖ Subtraction
- ✖ Multiplication
- ➗ Division
- 🧹 Clear button (C)
- ⌫ Delete last character (Del)
- 🟢 Equals button (=) to calculate result
- 🎨 Clean UI using CSS Grid
- 📱 Responsive design
---

## 🛠 Technologies Used
- HTML5
- CSS3 (Grid Layout)
- JavaScript (DOM manipulation & event handling)

## 📂 Project Structure
calculator-project/
│
├── index.html  
├── style.css  
├── script.js  
├── screenshot.png  
└── README.md  
---

## 🚀 How It Works

1. All calculator buttons are selected using:

```javascript
const buttonsEl = document.querySelectorAll(".buttons button");
```

2. Event listeners are added to each button.

3. Based on the button clicked:
   - `"C"` → Clears the input
   - `"Del"` → Deletes last character
   - `"="` → Calculates result using `eval()`
   - Other buttons → Append value to input

Example delete function:

```javascript
function deleteLast() {
    inputField.value = inputField.value.slice(0, -1);
}

## ▶ How To Run
1. Download or clone this repository
2. Open the project folder
3. Double-click `index.html`
4. The calculator will open in your browser

## 📸 Screenshot
![Calculator Screenshot](screenshot.png)

## 🔥 Future Improvements
- Add keyboard support
- Add scientific functions
- Replace `eval()` with a safer expression parser
- Add dark mode

## 👤 Author

Takundah Gorogodo  
GitHub: https://github.com/takundagorogodo

---

## 📄 License

This project is open-source and free to use.
