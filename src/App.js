import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };

    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  };

  onButtonSubmit = () => {
    const value = document.querySelector('input').value;
    this.setState({
      tasks: [...this.state.tasks, value],
    });
  }
  
  render() {
    return (
      <div className="App">
        <h2>Welcome to Task App</h2>
        <div>
          <input type="text" />
          <button onClick={this.onButtonSubmit}>Submit</button>
        </div>
        <div className="tasks-list">
          {this.state.tasks.length > 0 ?
            this.state.tasks.map((task, i) => {
            return (
              <Overview key={i} title={task}/>
            )}) :
            (
              <Overview title='No Tasks'/>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
