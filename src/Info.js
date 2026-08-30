/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export default function Info({ setInfoTab }) {
	return (
		<div>
			<div className="heading">
				<a>Info</a>
				<i className="fas fa-times close" onClick={() => setInfoTab(false)} />
				<hr />
			</div>
			<div className="info-list">
				<a href="https://github.com/Raihan-28011/ncc" target="_blank">
					<div className="info">NCC Compiler C++ [Documentation]</div>
				</a>
				<a
					href="https://github.com/imtiajrex/web_compiler_frontend"
					target="_blank"
				>
					<div className="info">Web Compiler UI [React + Webassembly]</div>
				</a>
			</div>
		</div>
	);
}
