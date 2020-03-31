import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./componnets/List";
import Form from "./componnets/Form";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "belajar functional componnet" }
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("did update terpanggil");
  }, [todos]);

  const onSubmit = e => {
    e.preventDefault();
    setTodos(todos.concat({ id: todos.length + 1, name }));
    setName("");
  };

  const onNameChange2 = e => {
    setName(e.target.value);
  };

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="App">
      <button onClick={() => setShowForm(!showForm)}>Toggle form</button>
      {showForm && (
        <Form
          name={name}
          onNameChange={e => onNameChange2(e)}
          onSubmit={onSubmit}
        />
      )}
      <List todos={todos} />
    </div>
  );
}

export default App;
