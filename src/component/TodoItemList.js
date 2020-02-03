import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  
  render (){
    const {todos, onToggle, onRemove} = this.props
    const todoList = todos.map((todo) => (
      <TodoItem 
        text={todo.text}
        id={todo.id}
        checked={todo.checked}        
        onToggle={onToggle}
        onRemove={onRemove}
        key={todo.id}    
      />
    ))
    return <>
      {todoList}
    </>
  }
}

export default TodoItemList