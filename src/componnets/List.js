import React from "react";

export default props => {
  return (
    <>
      {props.todos.map(todo => {
        return <li key={todo.id}>{todo.name}</li>;
      })}
    </>
  );
};
