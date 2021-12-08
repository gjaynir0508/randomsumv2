import React from "react";

export default function ToggleButton({ setVisibility, visibility }) {
	return (
		<button
			onClick={() => {
				setVisibility((prev) => !prev);
			}}
			className="btn toggle"
		>
			{visibility ? "Hide Answers" : "Show Answers"}
		</button>
	);
}
