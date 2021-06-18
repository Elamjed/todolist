import AddTask from './component/AddTask';
import TaskList from "./component/TaskList"
import './App.css';
import React from 'react'
function App() {
  return (
    <div className="App">
     <AddTask/>
     <TaskList/>
    </div>

  );
}

export default App;
