import React from "react";
import { useRef } from "react";

export default function Editor() {
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
  return (
    <div className="editor">
      <div className="editor-buttons">
        <button className="button">
          <a>Run</a> <i className="fas fa-play" />
        </button>
      </div>
      <div className="editor-textarea">
        <textarea
          ref={editorRef}
          onKeyDown={editorKeyDown}
          spellCheck={false}
        />
      </div>
    </div>
  );
}
