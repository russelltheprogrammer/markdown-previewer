import "./index.css";
import marked from 'marked';

const Previewer = ({ text }) => {

    marked.setOptions({
        breaks: true
      });
      const renderer = new marked.Renderer();


    return ( 
        <div>
        <label style={{fontWeight: "bold" }}>
        Previewer:
        </label>
        <div id="preview" 
        dangerouslySetInnerHTML={{ __html: marked(text, { renderer: renderer }) }} />
        
        
        </div>

     );
}
 
export default Previewer;