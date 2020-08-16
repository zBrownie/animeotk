import React from "react";
import "./styles.css";
// import { Container } from './styles';

function TextFieldCustom(props) {
  let typeInput = props.type !== "" ? props.type : "text";
  return (
    <div className="custom-field">
      <label id={props.id}>{props.label}</label>
      <input
        type={typeInput}
        placeholder={props.placeholder}
        ref={props.inputRef}
        className="txt-field"
        id={props.id}
      />
    </div>
  );
}

export default TextFieldCustom;
