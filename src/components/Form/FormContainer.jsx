import React from "react";

export default function FormContainer({ children, handleSubmit }) {
	return (
		<form className="form-container" onSubmit={handleSubmit} noValidate>
			{children}
		</form>
	);
}
