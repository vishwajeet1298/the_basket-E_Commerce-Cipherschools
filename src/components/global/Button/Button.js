import React from 'react';
import "./Button.css";

function Button({text,onClicking}){
    return <button className="global_button" onClick={onClicking}>{text}</button>
    
}
export default Button;