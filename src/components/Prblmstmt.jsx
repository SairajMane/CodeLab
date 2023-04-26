import React, { useState } from "react";
import "../css/prblmstmt.css";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import "../css/codemirror.css";
import Dropdown from "./Dropdownmenu";
import { Sidebar } from "rsuite";

function Prblmstmt() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div className="problempage">
      <div className="problemArea">
        <div className="heading">
          <p> Problem Statement</p>
        </div>
        <div className="prblmdef">
          <p>
            Study of MySQL Open source software. Discuss the characteristics
            like efficiency, scalability, performance and transactional
            properties
          </p>
        </div>
        <div className="descr">
          <p> Description</p>
        </div>
        <div className="description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="editor">
        <div className="langselect">
          <Dropdown />
        </div>
        <div className = "editsec">
          <CodeMirror
            value="console.log('hello world!');"
            height="500px"
            theme="dark"
            extensions={[cpp({ jsx: true })]}
            onChange={onChange}
          />
        </div>
      </div>
      {/* <div
          data-pym-src="https://www.jdoodle.com/plugin"
          data-language="java"
          data-version-index="4"
          data-libs="mavenlib1, mavenlib2"
        >
          Optional default code goes here
        </div>
        <script
          src="https://www.jdoodle.com/assets/jdoodle-pym.min.js"
          type="text/javascript"
        ></script> */}
    </div>
  );
}

export default Prblmstmt;
