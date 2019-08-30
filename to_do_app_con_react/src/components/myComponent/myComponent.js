import React, { Component } from "react";
import "./myComponent.css";
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "", newTask: [] };
  }
  handleClickAdd() {
    this.setState({ newTask: this.state.newTask.concat(this.state.task) });
  }
  handleChangeInput(e) {
    this.setState({ task: e.target.value });
    console.log(this.state.task);
  }
  remove(id) {
    console.log(id);
    const newDeleteTasks = this.state.newTask.filter(findTask => {
      return findTask !== id;
    });

    this.setState({
      newTask: [...newDeleteTasks]
    });
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="author">Este es el componente de {this.props.name}</div>
        <h1>Todo List</h1>
        <div className="formContainer">
          <form>
            <label>
              <h2>Nueva Tarea:</h2>
              <input
                type="text"
                name="name"
                onChange={e => this.handleChangeInput(e)}
              />
            </label>
            <button
              type="button"
              value="Add"
              onClick={e => this.handleClickAdd(e)}
            >
              Agregar
            </button>
            <ol>
              {this.state.newTask.map((item, index) => (
                <li key={index} data-key={item}>
                  {item}
                  <button
                    type="button"
                    className="cross"
                    onClick={() => this.remove(item)}
                  >
                    X
                  </button>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="task1"
                    value="toDo"
                  />
                </li>
              ))}
            </ol>
          </form>
        </div>
      </div>
    );
  }
}

export default MyComponent;
