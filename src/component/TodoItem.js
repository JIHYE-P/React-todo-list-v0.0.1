import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return this.props.checked !== nextProps.checked
  }
  render(){
    const {text, checked, id, onToggle, onRemove} = this.props;
    return <>
      <div className='todo-item' onClick={() => onToggle(id)}>
        <div className='remove' onClick={(e) => {
          e.stopPropagation(); //onToggle이 실행되지 않도록 함 (이벤트 버블링현상 막기)
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className='checked-mark'>&#x2713;</div>)
        }
      </div>
    </>
  }
}

export default TodoItem;