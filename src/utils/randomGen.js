function validate({ min, max, total, secondIsSmaller, operation }) {
	let errors = [];
	if (!(Number(min) && Number(min) > 0)) {
		errors.push({
			"Invalid Input (min)": "Minimum Number must be a Number",
		});
	}

	if (!(Number(max) && Number(max) > 0)) {
		errors.push({
			"Invalid Input (max)": "Maximum Number must be a Number",
		});
	}

	if (!(Number(total) && Number(total) > 0)) {
		errors.push({
			"Invalid Input (total)": "Total Number of Sums must be a Number",
		});
	}

	if (!["add", "sub", "mul", "div", "divQR"].includes(operation)) {
		errors.push({
			"Invalid Operation": `Operation "${operation}" is not defined`,
		});
	}

	if (!(typeof secondIsSmaller === "boolean")) {
		errors.push({
			"Invalid value for Checkbox": "",
		});
	}

	if (min >= max) {
		errors.push({
			"Range Error":
				"Minimum Number must be strictly less than Maximum Number",
		});
	}

	return errors;
}

function randomNumber(a, b) {
	return Math.floor(Math.random() * (b - a + 1)) + a;
}

function calculator(num1, num2, operation) {
	switch (operation) {
		case "add":
			return num1 + num2;

		case "sub":
			return num1 - num2;

		case "mul":
			return num1 * num2;

		case "div":
			return num1 / num2;

		case "divQR":
			return `Q: ${Math.floor(num1 / num2)}\nR: ${num1 % num2}`;

		default:
			return { Error: `Operation: "${operation}" is not defined` };
	}
}

function createSum(min, max, operation) {
	const [num1, num2] = [randomNumber(min, max), randomNumber(min, max)];
	return [num1, num2, calculator(num1, num2, operation)];
}

function createSumSecondIsSmaller(min, max, operation) {
	const num1 = randomNumber(min, max);
	const num2 = randomNumber(min, num1 - 1);
	return [num1, num2, calculator(num1, num2, operation)];
}

export default function randomSums(values) {
	if (!values) {
		return [
			false,
			{ "Input(s) missing": "No input Values were provided!" },
		];
	}
	const { min, max, total, operation, secondIsSmaller = false } = values;
	const errors = validate(values);
	if (errors.length > 0) {
		return [false, errors];
	} else {
		const randomSumsList = [];
		let functionToUse = secondIsSmaller
			? createSumSecondIsSmaller
			: createSum;
		for (let i = 0; i < total; i++) {
			randomSumsList.push(functionToUse(min, max, operation));
		}

		return [true, randomSumsList];
	}
}
