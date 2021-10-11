import React, { useState } from "react";

function NewGoal(props){
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value
    setEnteredGoal(newValue);
  };

  function handleClick(){
    props.onAdd(enteredGoal);
    setEnteredGoal("")
  }

 
  return(
    <div className="form">
      <input type="text" placeholder="type your goal" onChange={handleChange} value={enteredGoal} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
  

}

export default NewGoal;