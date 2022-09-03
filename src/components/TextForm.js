import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
}
const handleLowClick = ()=>{
    //console.log("Lowercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
}
const handleClearClick = ()=>{
    let newText='';  
    setText(newText);
}
const handleCopy = ()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}
const removeExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
     setText(newText.join(" "))  
}
const handleOnChange = (event)=>{
        // console.log("On change");   
        console.log(props.mode)
        setText(event.target.value)
}
const [text, setText] = useState("");
return (
<div className='container' style={{color: props.mode==='light'?'black':'white'}}>
    <h1 >{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
    </div>  
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
       <h2>Preview</h2>
       <p>{text}</p>  
    </div>
</div>

  )
}
