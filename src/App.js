import React, { Component } from 'react';
import './App.css';
import TodoTemplate from './component/TodoTemplate';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';

class App extends Component {
  id = 3
  state = {
    input: '',
    todos: [
      {
        id: 0,
        text: 'React 1',
        checked: false
      },
      {
        id: 1,
        text: 'React 2',
        checked: true
      },
      {
        id: 2,
        text: 'React 3',
        checked: false
      }
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++, 
        text: input, 
        checked: false
      })
    })
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate()
    }
  }
  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index]
    const nextTodos = [...todos]

    nextTodos[index]= {
      ...selected,
      checked: !selected.checked
    }
    this.setState({
      todos: nextTodos
    })
  }
  handleRemove = (id) => {
    const {todos} = this.state
    this.setState({
      todos: todos.filter(todo => todo.id !== id) 
    })
  }
  render(){
    const {input, todos} = this.state;
    return (
      <TodoTemplate form={(
        <Form
          value={input}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          onCreate={this.handleCreate}
        />
      )}>
        <TodoItemList 
          todos={todos} 
          onToggle={this.handleToggle} 
          onRemove={this.handleRemove}  
        />
      </TodoTemplate>
    )
  }
}

export default App;
