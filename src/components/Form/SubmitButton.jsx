import React from "react";

export default function SubmitButton({ text }) {
	return (
		<div className="form-field submit">
			<button className="btn submit" type="submit">
				{text}
			</button>
		</div>
	);
}
