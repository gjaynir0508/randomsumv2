import React from "react";
import SumsContainer from "./Sums/SumsContainer";
import Sum from "./Sums/Sum";
import ToggleButton from "./Sums/ToggleButton";

export default function Sums({ sums, visibility, setVisibility }) {
	return (
		<>
			<SumsContainer
				operation={sums["operation"]}
				visibilility={visibility}
			>
				{sums &&
					typeof sums === "object" &&
					sums.map((sum, index) => (
						<Sum
							num1={sum[0]}
							num2={sum[1]}
							answer={sum[2]}
							visibility={visibility}
							key={index}
						/>
					))}
			</SumsContainer>
			{sums && sums.length > 0 && (
				<ToggleButton
					visibility={visibility}
					setVisibility={setVisibility}
				/>
			)}
		</>
	);
}
