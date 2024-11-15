import React from 'react';

function Todo({ todo, onDelete, deleteIcon }) {
  return (
    <li>
      <span className="task-text">{todo.text}</span>
      <button onClick={onDelete} className="delete-btn">
        <img src={deleteIcon} alt="Delete" />
        Delete
      </button>
    </li>
  );
}

export default Todo;
