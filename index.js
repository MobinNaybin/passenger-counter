let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let sumEl = document.getElementById('sum-el')
let count = 0
let sum = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    sum += count
    sumEl.textContent = 'Sum: ' + sum
    countEl.textContent = 0
    count = 0
    
}

function clean() {
    saveEl.textContent = 'Previous entries: ';
    sumEl.textContent = 'Sum: '
    countEl.textContent = 0
    count = 0
    sum = 0
}
