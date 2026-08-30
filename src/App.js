import React from "react";
import { useState } from "react";
import Editor from "./Editor";
import Files from "./Files";
import Info from "./Info";
import Output from "./Output";
import "./styles/main.scss";

function App() {
	const [files, setFiles] = useState(Object.entries(localStorage));
	const [activeFile, setActiveFile] = useState("");
	const [result, setResult] = useState("");
	const [compiling, setCompiling] = useState(false);
	const [fileTab, setFileTab] = useState(false);
	const [infoTab, setInfoTab] = useState(false);

	return (
		<div className="App">
			<div className="head">
				<div className="logo">
					<img src="/logo.png" alt="logo" />
					WEBPILER
				</div>
				<button className="button" onClick={() => setFileTab(true)}>
					File <i className="fas fa-bars" />
				</button>
				<button onClick={() => setInfoTab(true)} className="button">
					Info <i className="fas fa-info-circle" />
				</button>
			</div>
			<div
				className="file-section"
				style={{ transform: `translate(${fileTab ? "0" : "-240px"})` }}
			>
				<Files
					files={files}
					setFiles={setFiles}
					activeFile={activeFile}
					setActiveFile={setActiveFile}
					setFileTab={setFileTab}
				/>
			</div>
			<div
				className="info-section"
				style={{ transform: `translate(${infoTab ? "0" : "-240px"})` }}
			>
				<Info setInfoTab={setInfoTab} />
			</div>
			<div className="code-section">
				<Editor
					activeFile={activeFile}
					setFiles={setFiles}
					setResult={setResult}
					compiling={compiling}
					setCompiling={setCompiling}
					setActiveFile={setActiveFile}
				/>
				<Output result={result} compiling={compiling} />
			</div>
		</div>
	);
}

export default App;
