import
React,
{
  // useEffect 
} from "react";
import "./App.css";
import List from "./componnets/List";
import Form from "./componnets/Form";
import useTodo from './hooks/useTodo';

// import useFetch from './hooks/useFetch';

const initialValue = [
  { id: 1, name: "belajar functional componnet" }
]

function App() {
  const { todos, addTodo } = useTodo(initialValue);
  // const { data: pokemons, error: pokemonError, loading: pokemonLoading } = useFetch('api')
  // const { data: digimons, error, loading } = useFetch('https://pokemonapi')

  // if (pokemons.length < 1) {
  //   return <div>Pokemon Empty</div>
  // }

  return (
    <div className="App">
      <h1>TODO List</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} />
    </div>
  );
}

export default App;
