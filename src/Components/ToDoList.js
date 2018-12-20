import React, { Component } from 'react';
import './ToDoList.css';
class ToDoList extends Component {
  render() {
    return (
      <div className="list">
        <div className="header">
          <form>
            <input placeholder="Ingresa una tarea..." />
            <button type="submit">Agregar</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ToDoList;