import './App.css';
import React, { useState } from 'react';
import { Editor } from "./Editor";


function App() {

const [ state, setState] = useState({
  text: ""
});

  return (
    <div className="App">
      <header id="header">
        Markdown Previewer
      </header>
      <div className="contentOfMyApp">

        <Editor values={} onChange={} />
        <form id="markDownForm">

      <label>
        Editor:
        <textarea 
        id="editor" 
        rows="10" 
        cols="45"
        name="text"
        placeholder="Insert Text Here"
        type="text"
        value={state.text}
        onChange={handleChange} />
      </label>

      
      </form>
      <div id="preview">
        {state.text}
      Preview
      </div>
      </div>
    </div>
  );
}

export default App;
