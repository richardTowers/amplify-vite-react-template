import { useState } from "react";


function App() {
  const [todos, setTodos ] = useState<Array<{id: string, content: string}>>([]);


  function createTodo() {
    setTodos([...todos, { id: '', content: window.prompt("Todo content")! }])
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
