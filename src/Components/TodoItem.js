import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong> <br />
        {this.props.todo.body} <br />
      </li>
    );
  }
}

export default TodoItem;
