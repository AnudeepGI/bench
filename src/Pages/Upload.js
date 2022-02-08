import { useRef } from "react";
import Header from "../Components/Header";
import '../assets/ud-styles.css';

function Upload() {
    const fileInputRef= useRef();
  
    const handleChange = (event) =>{
      // do something with event data  
    }

    return (
      <div className="test">
        <h1>Upload</h1>
        <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file'hidden/>
        <button onClick={()=>fileInputRef.current.click()}>
        Custom File Input Button
      </button>
      </div>
    );
  }
  
  export default Upload;
  