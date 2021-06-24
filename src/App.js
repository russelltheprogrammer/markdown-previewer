import './index.css';
import React, { useState } from 'react';
import Editor from './Editor';




function App() {


  return (
    <div className="App">
      <header id="header">
        Markdown Previewer
      </header>
      
      <Editor />
        
    </div>
  );
}

export default App;
