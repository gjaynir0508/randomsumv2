import React from "react";
import FormContainer from "./Form/FormContainer";
import FloatingInput from "./Form/FloatingInput";
import Checkbox from "./Form/Checkbox";
import OperationSelect from "./Form/OperationSelect";
import SubmitButton from "./Form/SubmitButton";

export default function InputForm({
	values,
	handleSubmit,
	handleChangeNum,
	handleChangeStr,
	handleChangeBool,
}) {
	return (
		<FormContainer handleSubmit={handleSubmit}>
			<FloatingInput
				idName="min"
				label="Minimum Number"
				value={values.min}
				handleChange={handleChangeNum}
			/>
			<FloatingInput
				idName="max"
				label="Maximum Number"
				value={values.max}
				handleChange={handleChangeNum}
			/>
			<FloatingInput
				idName="total"
				label="Total Number of Sums"
				value={values.total}
				handleChange={handleChangeNum}
			/>
			<OperationSelect handleChange={handleChangeStr} />
			{["sub", "div", "divQR"].includes(values.operation) && (
				<Checkbox
					idName="secondIsSmaller"
					label="Should the second operand be smaller than the first operand?"
					value={values.secondIsSmaller}
					handleChange={handleChangeBool}
				/>
			)}
			<SubmitButton text="Generate Sums" />
		</FormContainer>
	);
}
