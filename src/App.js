import React from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  };

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: { 
        text: '',
        id: uniqid() 
      },
    })
  }

  deleteTask = (e) => {
    e.preventDefault();
    const id = e.target.id;
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }
  
  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            onChange={this.handleChange}
            value={task.text}
            type="text" 
            id="taskInput" 
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} onDelete={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
