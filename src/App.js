import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.list
  }
}

export default connect(mapStateToProps)(App);
