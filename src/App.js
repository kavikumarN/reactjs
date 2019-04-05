import React, { Component } from "react";
import Todos from "./Todos";
class App extends Component {
  state = {
    todos: [{ id: 1, content: "bsnl" }, { id: 2, content: "iocl" }]
  };
  deleteTodo = id => {
    console.log.id(id);
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todo</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
