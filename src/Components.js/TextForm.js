// import React from "react";

import React, { useState } from 'react';

export default function TextForm(props) {
  // text = "new text Wrong WAY"
  // settext("Enter"); Right Way
  
  const handleUpClick =() =>{
    // console.log("UpperCase Was Clicked"+ text)
    let newtext = text.toUpperCase();
    settext(newtext)
    props.showalert("Converted to uppercase!", "success ");
  }

  const handleLoClick =() =>{
    // console.log("UpperCase Was Clicked"+ text)
    let newtext = text.toLowerCase();
    settext(newtext)
    props.showalert("Converted to Lowercase!", "success ");
  }

  const handleclearClick =() =>{
    // console.log("UpperCase Was Clicked"+ text)
    let newtext = ' ';
    settext(newtext)
    props.showalert("Text Cleared!", "success ");
  }

  // const handlecopyClick =() =>{
  //   // console.log("UpperCase Was Clicked"+ text)
  //   let newtext = document.getElementById("MyBox");
  //   newtext.Select();
  //   navigator.clipboard.writeText(newtext.value);
  
  // }

  const handlecopyClick = () => {
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);   
    props.showalert("Copy to Clipboard", "success ");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  settext(newText.join(" "))
  props.showalert("Extra spaces removed", "success ");
}

// const handleFirstCapital = () => {
//     let newtext = ;
//     settext(newtext)
//   }



  const handleOnChange= (event) =>{
    // console.log("On Change");
    settext(event.target.value);
  }

  const [text,settext] = useState('Enter Text Here ');


  return (
    <>
     <div className="Container" style= { {color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}}
            id="Mybox"
            rows="15"
          ></textarea>
        </div>
        <button className="btn btn-primary mx -1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" Mx-2 onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" Mx-2 onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" Mx-2 onClick={handlecopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" Mx-2 onClick={handleExtraSpaces}>Remove Extra Text</button>
        {/* <button className="btn btn-primary mx-1" Mx-2 onClick={handleFirstCapital}>First Capital Text</button> */}
      </div>
      <div className="container my-2" style= { {color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter Something in the above textbox to preview it here "}</p>
      </div>

    </>
  );
}
