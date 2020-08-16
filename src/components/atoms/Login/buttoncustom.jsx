import React from "react";

function ButtonCustom(props) {
  return (
    <button type="button" onClick={props.click} className="custom-button">
      {props.text}
    </button>
  );
}

export default ButtonCustom;
