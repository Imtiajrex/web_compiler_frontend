import React from "react";

export default function Files() {
  console.log(localStorage);
  return (
    <div className="files">
      <div className="heading">
        Files{" "}
        <button className="button">
          <i className="fas fa-plus" />
        </button>
      </div>
      <div className="file">
        <a>Index.cpp</a>
      </div>
      <div className="file">
        <a>View.cpp</a>
      </div>
    </div>
  );
}
