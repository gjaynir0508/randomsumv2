import React from "react";

export default function Error({ error }) {
	return (
		<li className="error">
			{Object.keys(error)[0]}
			<span className="error-tip">{Object.values(error)[0]}</span>
		</li>
	);
}
