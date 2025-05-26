function changeLastName() {
    const newLastName = document.getElementById('newLastNameInput').value;
    if (newLastName) {
        document.getElementById('lastName').textContent = newLastName;
    }
}

function changeRandomBackground() {
    const colors = ['#f8d5f0', '#d5f8e5', '#f8f4d5', '#e5d5f8', '#d5e8f8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function askAge() {
    while (true) {
        const age = prompt("Сколько вам лет?", "");
        
        if (age === null) {
            alert("Ввод отменён");
            break;
        }
        
        if (confirm(`Вы уверены, что вам ${age}?`)) {
            alert(`Ваш возраст: ${age}`);
            break;
        }
    }
}