import React from "react";
import { useState } from "react";
import Editor from "./Editor";
import Files from "./Files";
import Output from "./Output";
import "./styles/main.scss";
function App() {
  const [activeCode, setActiveCode] = useState("");

  return (
    <div className="App">
      <div className="file-section">
        <Files />
      </div>
      <div className="code-section">
        <Editor />
        <Output />
      </div>
    </div>
  );
}

export default App;