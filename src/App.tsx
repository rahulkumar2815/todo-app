import React from 'react'
import TaskList from './components/TaskList'
import CompletedTask from './components/CompletedTask'

const App:React.FC = () => {
  return (
    <>
  <div className="todo_app_section">
    <div className="todo_app_container">
      <div className="new_tast_list task_list">
        <h2>Task List</h2>
        <div>
          <TaskList/>
        </div>

      </div>
      <div className="completed_task_list task_list">
        <h2>CompletedListItem</h2>
      </div>
    </div>
  </div>

 
   
    </>

  );
};

export default App
