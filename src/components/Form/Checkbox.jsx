import React from "react";

export default function Checkbox({ label, handleChange, idName, value }) {
	return (
		<div className="form-field check-box">
			<input
				type="checkbox"
				id={idName}
				name={idName}
				value={value}
				onChange={handleChange}
			/>
			<label htmlFor={idName}>{label}</label>
		</div>
	);
}
