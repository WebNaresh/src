import { useState } from "react"
import React from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('')

    const handleClick = () => {
        if (text>" " ) {
            
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Your text is UPPERCASE","success")
        }
    }

    const handleLOClick = () => {
        if (text>" " ) {
            
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Your text is LOWERCASE","success")

        }
    }
    const handleClearCLick = () => {
        if (text>" " ) {
            
            let newText = "";
            setText(newText);
            props.showAlert("Your text is Cleared!","success")
        }
    }
    const handleCopyCLick = () => {
        if (text>" " ) {
            navigator.clipboard.writeText(text)
            props.showAlert("Your text is Copied!","success")
        }
    }
    const handleOnChange = (e) => {
            setText(e.target.value)
    }

    return (
        <>
            <div className="container  ">


                <div className="container my-3">
                    <h1 className="my-4" >{props.heading}</h1>
                    <div className="mb-3 my-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary mx-1"  onClick={ handleClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLOClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearCLick}>Clear Content</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopyCLick}>Copy Content</button>
                </div>
            </div>
            <div className="container my-2">
                <h1>Your text Summary</h1>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p> {0.008 * text.split("").length} minutes read</p>
                <h1>Previes</h1>
                <p className="text-break">{text.length > 0 ? text : "Enter text for preview here"}</p>
            </div>
        </>
    )
}