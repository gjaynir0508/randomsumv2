import React from "react";

export default function SumsContainer({ children, operation, visibilility }) {
	return (
		<ul
			className={
				operation
					? visibilility
						? `sums ${operation} visible`
						: `sums ${operation} hidden`
					: "sums"
			}
		>
			{children}
		</ul>
	);
}
