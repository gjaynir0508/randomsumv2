import React from "react";

export default function FloatingInput({ label, idName, handleChange, value }) {
	return (
		<div className="form-field input">
			<input
				type="text"
				id={idName}
				name={idName}
				value={value !== 0 ? value : ""}
				onChange={handleChange}
				placeholder={" "}
				required
				autoComplete="off"
			/>
			<label htmlFor={idName}>{label}</label>
		</div>
	);
}
