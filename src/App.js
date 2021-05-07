import React from "react";
import { useState } from "react";
import Editor from "./Editor";
import Files from "./Files";
import Output from "./Output";
import "./styles/main.scss";

function App() {
	const [files, setFiles] = useState(Object.entries(localStorage));
	const [activeFile, setActiveFile] = useState("");
	const [result, setResult] = useState("");
	const [compiling, setCompiling] = useState(false);

	return (
		<div className="App">
			<div className="file-section">
				<Files
					files={files}
					setFiles={setFiles}
					activeFile={activeFile}
					setActiveFile={setActiveFile}
				/>
			</div>
			<div className="code-section">
				<Editor
					activeFile={activeFile}
					setFiles={setFiles}
					setResult={setResult}
					compiling={compiling}
					setCompiling={setCompiling}
				/>
				<Output result={result} compiling={compiling} />
			</div>
		</div>
	);
}

export default App;
