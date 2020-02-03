import React, { Component } from 'react';
import TodoTemplate from './component/TodoTemplate';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';

class App extends Component {
  id = 0
  state = {
    input: '',
    todos: []
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {input, todos} = this.state
    this.setState({
      input: '',
      todos: todos.concat({id: this.id++, text: input, checked: false})
    })
  }
  handleToggle = (id) => {
    const {todos} = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index]
    const nextTodos = [...todos]

    nextTodos[index] = {
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
  render () {
    const {input, todos} = this.state
    return( 
      <TodoTemplate form={<Form value={input} onChange={this.handleChange} onSubmit={this.handleSubmit} />}>
        <TodoItemList todos={todos} onToggle={this.handleToggle} onRemove={this.handleRemove} />
      </TodoTemplate>
    )
  }
} 

export default App;