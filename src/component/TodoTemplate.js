import React from 'react'

const TodoTemplate = ({form, children}) => {
  return <>
    <main className="todo-template">
      <div className="title">My Tasks</div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        {children}
      </section>
    </main>
  </>
}

export default TodoTemplate;