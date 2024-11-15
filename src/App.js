import React, { useState } from 'react';
import Todo from './components/Todo';
import './App.css';

// Import images correctly
import addIcon from '/Users/nandnimohan/Desktop/todo-list/src/assests/add.png';   // Correct path
import deleteIcon from '/Users/nandnimohan/Desktop/todo-list/src/assests/delete.png'; // Correct path

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>
          <img src={addIcon} alt="Add" />
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDelete={() => deleteTodo(index)}
            deleteIcon={deleteIcon}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
