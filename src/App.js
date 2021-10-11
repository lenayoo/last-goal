import React, {useState} from 'react';
import NewGoal from './components/NewGoal';
import ToDoItem from './components/ToDoItem';
import "./styles.css"

function App() {

  const [goals, setGoals] = useState([]);

  function addItem (enteredGoal){
    setGoals((prevGoals) => [...prevGoals, enteredGoal])
  };

  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  function deleteGoal(id){
    setGoals(prevGoals => {
      return prevGoals.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
        <h1>{currentMonth} Goals</h1>
        </div>
        <NewGoal onAdd={addItem} />
        <ul>
          <li>Wake up @ 4:30</li>
          <li>please working react!</li>
          {goals.map((goalItem, index ) => (
            <ToDoItem 
              key={index}
              id={index}
              text={goalItem}
              onChecked={deleteGoal} />))}
        </ul>
      </div>
      <div className="footer">copyright &copy; Lena's sweet English</div>
    </div>
  );
}

export default App;
