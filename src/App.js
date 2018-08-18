import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { addToDo, removeToDo } from './actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Redux ToDo List</h1>
        </header>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li key={todo}>{todo}</li>
            );
          })}
        </ul>
        <input type="text" onChange={e => this.setState({input: e.target.value})}></input>
        <button onClick={() => this.props.dispatch(addToDo(this.state.input))}>追加</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.list
  }
};

export default connect(mapStateToProps)(App);
