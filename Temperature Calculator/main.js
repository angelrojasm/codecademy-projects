//DOM Element Constants
const leftVal = document.getElementById('input');
const leftType = document.getElementById('left-type');
const rightVal = document.getElementById('output');
const rightType = document.getElementById('right-type');
const heading = document.getElementById('temperature-h2');
const calculateButton = document.getElementById('calculate');
const table = document.getElementById('dynamic-table');
//Global Variables

var tableRowNum = 1;

//Functions

const convert = (val, inputType, outputType) => {
	if (inputType === 'Celcius') {
		if (outputType === 'Farenheit') {
			return val * (9 / 5) + 32;
		} else if (outputType === 'Kelvin') {
			return Number(val) + Number(273.15);
		} else return val;
	} else if (inputType === 'Farenheit') {
		if (outputType === 'Celcius') {
			return (val - 32) * (5 / 9);
		} else if (outputType === 'Kelvin') {
			return (val - 32) * (5 / 9) + 273.15;
		} else return val;
	} else {
		if (outputType === 'Celcius') {
			return val - 273.15;
		} else if (outputType === 'Farenheit') {
			return (val - 273.15) * (9 / 5) + 32;
		} else return val;
	}
};

const createTableEntry = () => {
	let tableRow = document.createElement('tr');
	let tableNumberHeading = document.createElement('th');
	let tableDataValue = document.createElement('td');
	let tableDataTemperature = document.createElement('td');
	let tableDataCast = document.createElement('td');
	let tableDataIcon = document.createElement('i');

	tableRow.appendChild(tableNumberHeading);
	tableRow.appendChild(tableDataValue);
	tableRow.appendChild(tableDataTemperature);
	tableRow.appendChild(tableDataCast);

	tableNumberHeading.scope = 'row';
	tableNumberHeading.innerHTML = tableRowNum;
	tableRowNum++;
	tableDataValue.innerHTML = leftVal.value + ' ' + leftType.value;
	tableDataTemperature.innerHTML = rightVal.value + ' ' + rightType.value;

	let temp = Number(convert(leftVal.value, leftType.value, 'Celcius'));

	if (temp <= -9) {
		tableDataIcon.className = 'fa fa-snowflake-o';
	} else if (temp <= 15) {
		tableDataIcon.className = 'fa fa-tint';
	} else if (temp <= 22) {
		tableDataIcon.className = 'fa fa-cloud';
	} else {
		tableDataIcon.className = 'fa fa-sun-o';
	}

	tableDataCast.appendChild(tableDataIcon);
	table.appendChild(tableRow);
};

const leftConvert = () => {
	rightVal.value = convert(leftVal.value, leftType.value, rightType.value);
};

const rightConvert = () => {
	leftVal.value = convert(rightVal.value, rightType.value, leftType.value);
};

calculateButton.onclick = function () {
	leftConvert();
	createTableEntry();
};
/*
leftVal.oninput = leftConvert;
leftType.oninput = leftConvert;

rightVal.oninput = rightConvert;
rightType.oninput = leftConvert;
*/
