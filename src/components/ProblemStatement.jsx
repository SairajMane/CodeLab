import React, { useState } from "react";
import "../css/prblmstmt.css";


function Prblmstmt() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  const editorStyles = {
    borderRadius : 14,
    overflow : 'hidden'
  }
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
            
      </div>
    </div>
  );
}

export default Prblmstmt;