import React from "react";

function ToDoItem(props){
  return(
      <div onClick={() => {
        props.onChecked(props.id);
      }}>
        <li className="list">{props.text}</li>
      </div>
      
  )
}

export default ToDoItem;