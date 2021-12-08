import React, { useState } from "react";

import InputForm from "./components/InputForm";
import Sums from "./components/Sums";
import Container from "./components/Container";
import Errors from "./components/Errors";

import randomSums from "./utils/randomGen";

import "./App.css";

const initialValues = {
	min: 0,
	max: 0,
	total: 0,
	secondIsSmaller: false,
	operation: "add",
};

export default function App() {
	const [values, setValues] = useState(initialValues);
	const [sums, setSums] = useState([]);
	const [errors, setErrors] = useState([]);
	const [visibility, setVisibility] = useState(false);

	const submitCallbackFunction = (event) => {
		event.preventDefault();
		let secIsSmall = values.secondIsSmaller;
		let defSecIsSmall = false;
		const newValues = {
			min: Number(values.min),
			max: Number(values.max),
			total: Number(values.total),
			secondIsSmaller: ["sub", "div", "divQR"].includes(values.operation)
				? typeof secIsSmall === "string"
					? secIsSmall === "true"
						? true
						: defSecIsSmall
					: typeof secIsSmall === "boolean"
					? secIsSmall
					: defSecIsSmall
				: defSecIsSmall,
			operation: values.operation,
		};
		const [success, data] = randomSums(newValues);
		if (success) {
			let sumsWithInfo = data;
			sumsWithInfo["operation"] = values.operation;
			setSums(sumsWithInfo);
			setErrors([]);
		} else {
			setErrors(data);
		}
	};

	const handleChangeNum = (event) => {
		const { name, value } = event.target;
		// const pattern = /\d+\.{0,1}\d{0,2}/;
		const pattern = /\d{0,8}/;
		if (value.match(pattern)) {
			setValues((prev) => ({ ...prev, [name]: value.match(pattern)[0] }));
		} else if (value === "") {
			setValues((prev) => ({ ...prev, [name]: 0 }));
		}
	};

	const handleChangeStr = (ev) => {
		const { name, value } = ev.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	const handleChangeBool = (ev) => {
		setValues((prev) => ({
			...prev,
			secondIsSmaller: !values.secondIsSmaller,
		}));
	};

	return (
		<Container>
			<h1>Random Sum Generator</h1>
			<p>Enter the values and click on Generate to create sums</p>
			<InputForm
				handleSubmit={submitCallbackFunction}
				values={values}
				handleChangeNum={handleChangeNum}
				handleChangeStr={handleChangeStr}
				handleChangeBool={handleChangeBool}
			/>
			{errors.length > 0 && <Errors errors={errors} />}
			<Sums
				sums={sums}
				visibility={visibility}
				setVisibility={setVisibility}
			/>
		</Container>
	);
}
