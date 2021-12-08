import React from "react";
import Error from "./Error/Error.jsx";

export default function Errors({ errors }) {
	return (
		<div className="error-container">
			<ul className="errors">
				{errors &&
					typeof errors === "object" &&
					errors.map((error, index) => (
						<Error error={error} key={index} />
					))}
			</ul>
		</div>
	);
}
