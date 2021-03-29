import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function Editor({ activeFile, setFiles }) {
  let editorRef = useRef();
  let editorKeyDown = (e) => {
    if (e.key === "Tab" && !e.shiftKey) {
      // tab was pressed

      // get caret position/selection
      var val = editorRef.current.value,
        start = editorRef.current.selectionStart,
        end = editorRef.current.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      editorRef.current.value =
        val.substring(0, start) + "\t" + val.substring(end);

      // put caret at right position again
      editorRef.current.selectionStart = editorRef.current.selectionEnd =
        start + 1;

      // prevent the focus lose
      e.preventDefault();
      return false;
    }
  };
  const [file_name, setFileName] = useState("");

  let file = localStorage.getItem(activeFile);

  React.useEffect(() => {
    console.log(activeFile);
    if (activeFile != null && activeFile != "") {
      let file_content = typeof file == "string" ? JSON.parse(file) : {};
      setCode(file_content.value);
      setFileName(file_content.name);
    }
  }, [activeFile, file]);
  const [code, setCode] = useState(
    typeof file == "string" ? JSON.parse(file).value : ""
  );

  const handleChange = (e) => {
    setCode(e.target.value);
    let file_content = localStorage.getItem(activeFile);

    file_content =
      typeof file == "string"
        ? JSON.parse(file_content)
        : { name: "", value: "" };

    let new_file_content = JSON.stringify({
      ...file_content,
      value: e.target.value,
    });

    localStorage.setItem(activeFile, new_file_content);
  };

  const handleName = (e) => {
    setFileName(e.target.value);
    let file_content = localStorage.getItem(activeFile);

    file_content =
      typeof file == "string"
        ? JSON.parse(file_content)
        : { name: "", value: "" };

    let new_file_content = JSON.stringify({
      ...file_content,
      name: e.target.value,
    });

    localStorage.setItem(activeFile, new_file_content);
    setFiles(Object.entries(localStorage));
  };
  return (
    <div className="editor">
      <div className="editor-buttons">
        <button className="button">
          <a>Run</a> <i className="fas fa-play" />
        </button>
      </div>
      <div className="editor-name">
        <input
          type="text"
          placeholder="File Name"
          value={file_name}
          onChange={handleName}
          disabled={activeFile == null || activeFile == ""}
        />
      </div>
      <div className="editor-textarea">
        <textarea
          ref={editorRef}
          onKeyDown={editorKeyDown}
          spellCheck={false}
          value={code}
          onFocus={() => window.scrollTo(0, editorRef.current.offsetTop)}
          onChange={handleChange}
          disabled={activeFile == null || activeFile == ""}
        />
      </div>
    </div>
  );
}
