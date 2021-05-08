/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export default function Output({ result, compiling }) {
	return (
		<div className="output">
			<div className="head">Output</div>
			<div
				className="content"
				dangerouslySetInnerHTML={{
					__html: compiling ? "Code is Compiling. Wait a moment." : result,
				}}
			></div>
		</div>
	);
}
