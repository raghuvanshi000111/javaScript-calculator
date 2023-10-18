"use strict";

///seleting element
const equalBtn = document.querySelector(".equal");
const display = document.querySelector(".display");
const message = document.querySelector(".status");

///function result producer
function resultProducer(el, input) {
	const numbers = input.split(el);
	let operator = {
		"+": function (x, y) {
			return x + y;
		},
		"-": function (x, y) {
			return x - y;
		},
		"*": function (x, y) {
			return x * y;
		},
		"/": function (x, y) {
			return x / y;
		},
	};
	result = operator[el](Number(numbers[0]), Number(numbers[1]));
	display.value = result.toFixed(2);
	message.textContent = "Can you use one operator at a time";
	return el;
}
let result;
function calculatorLogic(input) {
	const rowData = input.split("");

	rowData.forEach((el) => {
		el === "+" ? resultProducer(el, input) : "";
		el === "-" ? resultProducer(el, input) : "";
		el === "*" ? resultProducer(el, input) : "";
		el === "/" ? resultProducer(el, input) : "";
	});
	///error handling
	if (result === undefined || String(result) === "NaN") {
		display.value = "";
		message.textContent = "invalid input type";
	}
}

//////event lisner
equalBtn.addEventListener("click", (e) => {
	e.preventDefault();
	calculatorLogic(display.value);
});
