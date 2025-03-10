const unitTypeSelect = document.getElementById('unitType');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const fromValueInput = document.getElementById('fromValue');
const toValueInput = document.getElementById('toValue');
const convertButton = document.getElementById('convertButton');

const units = {
    length: ['meters', 'feet', 'inches', 'kilometers', 'miles'],
    weight: ['kilograms', 'grams', 'pounds', 'ounces'],
    temperature: ['Celsius', 'Fahrenheit', 'Kelvin']
};

function populateUnits() {
    const unitType = unitTypeSelect.value;
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    units[unitType].forEach(unit => {
        const option = document.createElement('option');
        option.value = unit;
        option.textContent = unit;
        fromUnitSelect.appendChild(option);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        toUnitSelect.appendChild(option2);
    });
}

function convertUnits() {
    const unitType = unitTypeSelect.value;
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const fromValue = parseFloat(fromValueInput.value);

    let toValue;

    if (isNaN(fromValue)) {
        toValueInput.value = '';
        return;
    }

    if (unitType === 'length') {
        if (fromUnit === 'meters' && toUnit === 'feet') {
            toValue = fromValue * 3.28084;
        } else if (fromUnit === 'feet' && toUnit === 'meters') {
            toValue = fromValue / 3.28084;
        } else if (fromUnit === 'meters' && toUnit === 'inches') {
            toValue = fromValue * 39.3701;
        } else if (fromUnit === 'inches' && toUnit === 'meters') {
            toValue = fromValue / 39.3701;
        } else if (fromUnit === 'kilometers' && toUnit === 'miles'){
            toValue = fromValue * 0.621371;
        } else if (fromUnit === 'miles' && toUnit === 'kilometers'){
            toValue = fromValue / 0.621371;
        }
         else {
            toValue = fromValue;
        }
    } else if (unitType === 'weight') {
        if (fromUnit === 'kilograms' && toUnit === 'pounds') {
            toValue = fromValue * 2.20462;
        } else if (fromUnit === 'pounds' && toUnit === 'kilograms') {
            toValue = fromValue / 2.20462;
        } else if (fromUnit === 'grams' && toUnit === 'ounces') {
            toValue = fromValue * 0.035274;
        } else if (fromUnit === 'ounces' && toUnit === 'grams') {
            toValue = fromValue / 0.035274;
        } else {
            toValue = fromValue;
        }
    } else if (unitType === 'temperature') {
        if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
            toValue = (fromValue * 9/5) + 32;
        } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
            toValue = (fromValue - 32) * 5/9;
        } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
            toValue = fromValue - 273.15;
        } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
            toValue = fromValue + 273.15;
        }
        else {
            toValue = fromValue;
        }
    }

    toValueInput.value = toValue.toFixed(2);
}

unitTypeSelect.addEventListener('change', populateUnits);
convertButton.addEventListener('click', convertUnits);

populateUnits();
