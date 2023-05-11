import { useState } from 'react';
import Form from './Form';
import List from './List';

function Todo() {
  const [todos, settodos] = useState([]);

  function addTodo(newTodo) {
    settodos([...todos, newTodo]);
  }

  return (
    <div>
      <Form addTodo={addTodo} />
      <List todos={todos} settodos={settodos} />
    </div>
  );
}

export default Todo;