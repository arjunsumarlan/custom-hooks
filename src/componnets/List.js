import React from "react";

export default props => {
  return (
    <>
      <h1>List</h1>
      {props.todos.map(todo => {
        return <li key={todo.id}>{todo.name}</li>;
      })}
    </>
  );
};
