
const displayHistory = document.querySelector('.calculator__display--history');
const displayAnswer = document.querySelector('.calculator__display--answer');
const displayWorking = document.querySelector('.calculator__display--working');
const displayPreview = document.querySelector('.calculator__display--preview');
const key = document.querySelector('.calculator__key');

console.log(displayHistory);
console.log(displayAnswer);
console.log(displayWorking);
console.log(displayPreview);
console.log(key);

console.log(displayWorking.value);

function removeDisplayPlaceholder () {
  let content = displayWorking.innerHTML;
  if (content === '<p class="calculator__display--placeholder">0</p>') {
    content = '';
  }

  return content;
}

function appendNumber(value) {
  if (displayWorking.innerText === '0') {
    displayWorking.innerText = value;
  } else {
    displayWorking.innerText += value;
  }
}

function clearDisplay () {
  reset = displayWorking.innerHTML = '0';
  return reset;
}

function calculate() {
  const equation = displayWorking.innerText;
  
  try {
    const solution = eval(equation);
    displayAnswer.innerText = solution;

    // Add to history: "2+5 = 7"
    saveToHistory(`${equation} = ${solution}`);
    
  } catch (e) {
    displayAnswer.innerText = "Error";
  }
}

function saveToHistory(entry) {
  historyLog.push(entry);
  
  // Keep only the last 3 items so the screen doesn't overflow
  if (historyLog.length > 3) {
    historyLog.shift(); 
  }

  // Update the HTML display
  displayHistory.innerHTML = historyLog
    .map(item => `<p>${item}</p>`)
    .join('');
}

function preview () {
  calculate();
}

