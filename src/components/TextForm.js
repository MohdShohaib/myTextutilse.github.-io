import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    // console.log("upperwasclicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "Success");
  }
  const handleLoClick =()=>{
    // console.log("upperwasclicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "Success");
  }
  const handleOnChange =(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const handleClearClick =(event)=>{
    // console.log("On change");
    setText(event.target.value);
    props.showAlert("clear", "Success");
  }
  const handleCopy=()=>{
    
    navigator.clipboard.writeText(text); 
    
    props.showAlert("Copy to clipboard", "Success");
  }

const handleExtraSpaces=()=>{
  let newText = text.split(/[ ]+/);
 setText(newText.join(" "))
 props.showAlert("Remove Extra Spaces", "Success");
}

  const [text,setText]= useState('');
  // setText('soyanali');
  // text="new text";
  return (
    <>
    < div className="style" style={{color:props.mode==='dark'?'white':'black'}} >
    <div className='container' > 
    <h1>{props.heading}  </h1>
<div className="form-floating">
  <textarea className="form-control" value={text}   id="myBox" 
   onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#032d40':'white', height:190, color:props.mode==='dark'?'white':'black'}}   ></textarea>
  <label htmlFor="floatingTextarea"></label>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to upper case</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lower case</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
</div>
<div className="container"  >
  <h2>
    Your text summary
  </h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} character </p>
  <p> {0.08 * text.split(" ").length} Minute read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to preview !"}</p>
</div>
</div>
</>
  )
}
