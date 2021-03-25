import React from "react";

export default function Files({ files, activeFile, setActiveFile }) {
  return (
    <div className="files">
      <div className="heading">
        Files{" "}
        <button className="button">
          <i className="fas fa-plus" />
        </button>
      </div>
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
            </div>
          );
        })}
    </div>
  );
}
