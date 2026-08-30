/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { v4 as uuid } from "uuid";
export default function Files({
	files,
	setFiles,
	activeFile,
	setActiveFile,
	setFileTab,
}) {
	const newFile = () => {
		localStorage.setItem(
			uuid(),
			JSON.stringify({ name: "New File", value: "" })
		);
		setFiles(Object.entries(localStorage));
	};
	const deleteFile = (key) => {
		setActiveFile("");
		localStorage.removeItem(key);
		setFiles(Object.entries(localStorage));
	};
	return (
		<>
			<div className="heading">
				<a>Files</a>
				<button className="button" onClick={newFile}>
					<i className="fas fa-plus" />
				</button>
				<i className="fas fa-times close" onClick={() => setFileTab(false)} />
				<hr />
			</div>
			<div className="files-list">
				{files.length > 0 &&
					files.map((e, idx) => {
						let val = JSON.parse(e[1]);
						return (
							<div
								className={`file ${activeFile == e[0] ? "active" : null}`}
								key={idx}
								onClick={() => setActiveFile(e[0])}
							>
								<a>{val.name}</a>
								<i
									className="fas fa-trash delete"
									onClick={() => deleteFile(e[0])}
								/>
							</div>
						);
					})}
			</div>
		</>
	);
}
