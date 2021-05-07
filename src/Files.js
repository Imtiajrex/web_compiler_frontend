/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { v4 as uuid } from "uuid";
export default function Files({ files, setFiles, activeFile, setActiveFile }) {
	const newFile = () => {
		localStorage.setItem(
			uuid(),
			JSON.stringify({ name: "New File", value: "" })
		);
		setFiles(Object.entries(localStorage));
	};
	const deleteFile = (key) => {
		localStorage.removeItem(key);
		setFiles(Object.entries(localStorage));
		setActiveFile("");
	};
	return (
		<div className="files">
			<div className="heading">
				Files{" "}
				<button className="button" onClick={newFile}>
					<i className="fas fa-plus" />
				</button>
				<br />
			</div>
			<small style={{ color: "grey", fontSize: "9px" }}>
				Click on the name of the file to select!
			</small>
			{files.length > 0 &&
				files.map((e, idx) => {
					let val = JSON.parse(e[1]);
					return (
						<div
							className={`file ${activeFile == e[0] && "active"}`}
							key={idx}
							onClick={() => setActiveFile(e[0])}
						>
							<a>{val.name}</a>
							<i
								className="fas fa-times delete"
								onClick={() => deleteFile(e[0])}
							/>
						</div>
					);
				})}
		</div>
	);
}
