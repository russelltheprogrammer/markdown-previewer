import './App.css';
import React, { useState } from 'react';



function App() {

const [ text, setText] = useState("");

// const handleChange = (initialValues) => {
//   setText(initialValues.concat(text))
// }



  return (
    <div className="App">
      <header id="header">
        Markdown Previewer
      </header>
      <div className="contentOfMyApp">

      <form id="markDownForm">

      <label>
        Editor:
        <textarea 
        id="editor" 
        rows="10" 
        cols="45"
        name="text"
        placeholder="Insert Text Here"
        // value={text}
        // onChange={handleChange}
         />
      </label>

      </form>
        
      <div id="preview">
       
      Preview
      </div>
      </div>
    </div>
  );
}

export default App;
