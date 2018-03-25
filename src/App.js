import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos:[]
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  componentWillMount(){
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  render() {
    return (

      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
