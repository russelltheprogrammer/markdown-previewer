import React, { useState } from 'react';
import "./index.css"
import Previewer from './Previewer';
import defaultText from './defaultText';

const Editor = () => {

const [ text, setText] = useState(defaultText);

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
        cols="50"
        name="text"
        placeholder="Insert Text Here"
        value={text}
        onChange={handleChange}
         />
      
      </form>
      <div className="space-box">
          {null}
      </div>
      <Previewer text={text} />
      </div>
      
      );
}
 
export default Editor;