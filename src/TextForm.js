import React, {useState} from 'react'



export default function TextForm(props) {
   const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success")
   }
   const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase","success")
   }
   const handleOnChange =(event)=>{
    setText(event.target.value);
    
   }
   const handleClearClick =()=>{
    let newText="";
    setText(newText)
    props.showAlert("text cleared","success")
   }
   const handleCopy= ()=>{
    var text=document.getElementById('exampleFormControlTextarea1')
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success")
   }
   const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed","success")

   }



    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
             <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Clear Extra space</button>
            

        </div >
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
             <h2>Your text summary</h2>
             <p>{text.split(" ").length}words and {text.length} characters</p>
             <p>{0.008*text.split(" ").length} minutes to read</p>
             <h3>Preview</h3>
             <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>

        </>
    )
}
