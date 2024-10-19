const button = document.querySelector('button');
const result = document.getElementById('result');

button.addEventListener('click', function() {

    const num1 = parseFloat(document.querySelectorAll('input')[0].value);
    const num2 = parseFloat(document.querySelectorAll('input')[1].value);

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            result.textContent = `Number 1 (${num1}) is larger.`;
        } else if (num2 > num1) {
            result.textContent = `Number 2 (${num2}) is larger.`;
        } else {
            result.textContent = `Both numbers are equal.`;
        }
    } else {
        result.textContent = 'Please enter valid numbers.';
        result.style.color = 'rgb(235, 85, 85)';
    }
});
