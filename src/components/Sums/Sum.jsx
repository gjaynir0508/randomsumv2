import React from "react";

export default function Sum({ num1, num2, answer }) {
	const pattern = /-?\d+\.{0,1}\d{0,2}/;
	const divQRpattern = /Q: \d+\nR: \d/;
	let formattedAnswer = String(answer).match(pattern)[0];
	if (String(answer).match(divQRpattern)) {
		formattedAnswer = String(answer);
	}
	return (
		<li className="sum">
			<p>{num1}</p>
			<p className="symbol">{num2}</p>
			<p className="answer">{formattedAnswer}</p>
		</li>
	);
}
