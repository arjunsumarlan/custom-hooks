import React from "react";
import useInput from '../hooks/useInput';

export default props => {
  const { value: name, reset, onChange: onNameChange } = useInput('')

  const onSubmit = e => {
    e.preventDefault();
    props.addTodo(name);
    reset()
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        onChange={onNameChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
