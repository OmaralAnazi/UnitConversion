const DECIMALS_POINT_LIMIT = 3;
const LENGTH_CONVERSION_UNIT = 3.281;
const VOLUME_CONVERSION_UNIT = 0.264;
const MASS_CONVERSION_UNIT = 2.204;

const lengthResultElement = document.getElementById('length');
const volumeResultElement = document.getElementById('volume');
const massResultElement = document.getElementById('mass');
const converterBtn = document.getElementById('converter-btn');
const inputElement = document.getElementById('unit-input');

converterBtn.addEventListener('click', function() {
    const value = parseFloat(inputElement.value);
    if (value) {
        computeUnit(lengthResultElement, 'meters', 'feet', value, LENGTH_CONVERSION_UNIT);
        computeUnit(volumeResultElement, 'liters', 'gallons', value, VOLUME_CONVERSION_UNIT);
        computeUnit(massResultElement, 'kilos', 'pounds', value, MASS_CONVERSION_UNIT);
    }
});

function computeUnit(element, unit1, unit2, value, ConversionUnit) {
    const unit1ToUnit2 = (value * ConversionUnit).toFixed(DECIMALS_POINT_LIMIT);
    const unit2ToUnit1 = (value / ConversionUnit).toFixed(DECIMALS_POINT_LIMIT);
    const outputFormat = `${value} ${unit1} = ${unit1ToUnit2} ${unit2} | ${value} ${unit2} = ${unit2ToUnit1} ${unit1}`;
    element.textContent = outputFormat;
}
