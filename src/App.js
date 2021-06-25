import './index.css';
import React, { } from 'react';
import Editor from './Editor';

function App() {

  return (
    <div className="App">
      <header id="header">
        Markdown Previewer
      </header>
      <Editor />
      <footer className="footer">
        Coded By <a 
target="_blank"
href="https://github.com/russelltheprogrammer">
  RussellTheProgrammer</a> for FCC curriculum
      </footer>
     </div> 
  );
}

export default App;
