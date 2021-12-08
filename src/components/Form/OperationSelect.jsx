import React from "react";

export default function OperationSelect({ handleChange }) {
	return (
		<div className="form-select">
			<label htmlFor="operation">Choose the Operation to perform</label>
			<br />
			<select name="operation" id="operation" onChange={handleChange}>
				<option value="add">Addition</option>
				<option value="sub">Subtraction</option>
				<option value="mul">Multiplication</option>
				<option value="div">Division (Decimal Output)</option>
				<option value="divQR">
					Division (Quotient Remainder Output)
				</option>
			</select>
		</div>
	);
}
