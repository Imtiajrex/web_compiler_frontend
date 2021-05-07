/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export default function Output({ result, compiling }) {
	return (
		<div className="output">
			<div className="head">
				Output [
				<a
					href="https://github.com/Raihan-28011/ncc"
					target="_blank"
					style={{ color: "yellow" }}
				>
					NCC
				</a>{" "}
				compiler attached. Code documentation is in the repository]
			</div>
			<div
				className="content"
				dangerouslySetInnerHTML={{
					__html: compiling ? "Code is Compiling. Wait a moment." : result,
				}}
			></div>
		</div>
	);
}
