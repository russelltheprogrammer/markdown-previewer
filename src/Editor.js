import './App.css';
import { useState } from 'react';


export const Editor = ()=> {

return (
<div>
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
      </div>
)};