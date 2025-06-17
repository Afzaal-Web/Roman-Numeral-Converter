const convertBtn = document.getElementById('convert-btn');
const resultContainer = document.getElementById('output');
const numberInput = document.getElementById('number');

function validateInput() {
    let inputValue = parseInt(numberInput.value);

    if (!inputValue) {
        displayMessage("Please enter a valid number");
    } else if (isNaN(inputValue) || inputValue < 0) {
        displayMessage("Please enter a number greater than or equal to 1");
    } else if (inputValue >= 4000) {
        displayMessage("Please enter a number less than or equal to 3999");
    } else {
        convertToRoman(inputValue);
    }
}

const displayMessage = (message) => {
    resultContainer.classList.remove('hidden');
    resultContainer.classList.add('alert');
    resultContainer.innerText = message;
}

convertBtn.addEventListener('click', validateInput);

const romanNumeralsMap = [
    { symbol: "M", value: 1000 },
    { symbol: "CM", value: 900 },
    { symbol: "D", value: 500 },
    { symbol: "CD", value: 400 },
    { symbol: "C", value: 100 },
    { symbol: "XC", value: 90 },
    { symbol: "L", value: 50 },
    { symbol: "XL", value: 40 },
    { symbol: "X", value: 10 },
    { symbol: "IX", value: 9 },
    { symbol: "V", value: 5 },
    { symbol: "IV", value: 4 },
    { symbol: "I", value: 1 }
];

const convertToRoman = (number) => {
    resultContainer.innerText = "";
    resultContainer.classList.remove('hidden');
    resultContainer.classList.remove('alert');

    romanNumeralsMap.forEach(pair => {
        while (number >= pair.value) {
            number -= pair.value;
            resultContainer.innerText += pair.symbol;
        }
    });
}

numberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        validateInput();
    }
});
