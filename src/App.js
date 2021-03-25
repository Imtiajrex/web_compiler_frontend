import React from "react";
import { useState } from "react";
import Editor from "./Editor";
import Files from "./Files";
import Output from "./Output";
import "./styles/main.scss";
function App() {
  const files = Object.entries(localStorage);
  const [activeFile, setActiveFile] = useState("");

  return (
    <div className="App">
      <div className="file-section">
        <Files
          files={files}
          activeFile={activeFile}
          setActiveFile={setActiveFile}
        />
      </div>
      <div className="code-section">
        <Editor activeFile={activeFile} />
        <Output />
      </div>
    </div>
  );
}

export default App;
