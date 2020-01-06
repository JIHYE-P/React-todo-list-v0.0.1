import React, { Children } from 'react'
import './TodoTemplate.css';

// {form, childern} 파라미터로 받게 되는 것은 props인데
// (props) => {form children}를 비구조화할당 형태로 작성 = {form, children}
const TodoTemplate = ({form, children}) => {
  return <>
    <main className='todo-list-template'>
      <div className='title'>오늘 할 일</div>
      <section className='form-wrapper'>
        {form}
      </section>
      <section className='todos-wrapper'>
        {children}
      </section>
    </main>
  </>
}

export default TodoTemplate