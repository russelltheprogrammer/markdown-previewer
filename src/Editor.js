import React, { useState } from 'react';
import "./index.css"

const Editor = () => {

const [ text, setText] = useState("");

const handleChange = (e) => {
  setText(e.target.value);
  
}

    return (

        <div className="editor-box">
            <label style={{fontWeight: "bold" }}>
        Editor:
        </label>
        <form id="markDownForm">

        <textarea 
        id="editor" 
        rows="10" 
        cols="45"
        name="text"
        placeholder="Insert Text Here"
        value={text}
        onChange={handleChange}
         />
      
      </form>
      <div className="space-box">
          {null}
      </div>
        <div id="preview">
            {text}
        </div>

      </div>
      );
}
 
export default Editor;