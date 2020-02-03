import React from 'react'

const Form = ({onChange, onSubmit, value}) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} placeholder="Add My Tasks :)" />
    </form>
  )
}

export default Form;