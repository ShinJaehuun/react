import React from "react";

function SubDialog(props) {
  const ischeck = props.check;

  return (
    <div style={{ background: props.color }}>
      <p>{props.title}</p>
      <p>{props.message}</p>
      <p>{ischeck ? <button>버튼</button> : <></>}</p>
    </div>
  );
}
export default SubDialog;
