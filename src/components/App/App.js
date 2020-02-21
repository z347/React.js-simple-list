import React, { Component } from "react";
import Task from "../Task/Task";
import Input from "../Input/Input";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: JSON.parse(localStorage.getItem("to-do list")) || []
    };
  }

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks.splice(index, 1);
      return tasks;
    });
  };

  addTask = task => {
    this.setState(state => {
      let ms = new Date();
      let { tasks } = state;
      tasks.push({
        id: ms.getTime(),
        title: task,
        done: false
      });
      return tasks;
    });
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("to-do list", JSON.stringify(nextState.tasks));
  }

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(tasks => !tasks.done);
    const doneTasks = tasks.filter(tasks => tasks.done);

    return (
      <div>
        <Input
          addTask={this.addTask}
          actualValueTasks={this.actualValueTasks}
        />
        <div className="App">
          <h1 className="title">Active tasks: {activeTasks.length}</h1>
          {[...activeTasks, ...doneTasks].map(task => (
            <Task
              doneTask={() => this.doneTask(task.id)}
              deleteTask={() => this.deleteTask(task.id)}
              key={task.id}
              task={task}
            ></Task>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
