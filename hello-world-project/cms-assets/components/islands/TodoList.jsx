import { useState } from 'react';

import Button from './Button.jsx';
import styles from '../../styles/todo.module.css';

let id = 0;
const todoSortByCompleted = (todoA, todoB) => {
  if (todoA.completed && todoB.completed) {
    // Earlier IDs correspond to higher place in the list
    return todoA.id - todoB.id;
  }
  if (todoA.completed) return 1;
  if (todoB.completed) return -1;
  return todoA.id - todoB.id;
};

const initialTodosMapped = (todos) =>
  todos.map((initialTodo, i) => ({
    id: `default-${i}`,
    key: `default-${i}`,
    ...initialTodo,
  }));

function TodoItem({ todo, onRemove, onUpdate }) {
  const handleTodoCompleteClick = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    onUpdate(updatedTodo);
  };

  const handleTodoRemoveClick = () => {
    onRemove(todo.id);
  };

  return (
    <li className={styles.todoContainer}>
      <div
        onClick={handleTodoCompleteClick}
        className={`${styles.todo} ${
          todo.completed ? styles.complete : styles.notComplete
        }`}
      >
        <input type="checkbox" checked={todo.completed} onChange={() => {}} />
        {todo.text}
        {todo.dateAdded ? (
          <span className={styles.todoDateAdded}>{todo.dateAdded}</span>
        ) : (
          ''
        )}
      </div>
      <div className={styles.todoRemove} onClick={handleTodoRemoveClick}>
        -
      </div>
    </li>
  );
}

function TodoList({ initialTodos = [] }) {
  const [todoList, setTodoList] = useState(() =>
    initialTodosMapped(initialTodos),
  );
  const [todoInput, setTodoInput] = useState('');

  const addTodo = (todo) => {
    todo['id'] = id;
    todo['key'] = id;
    id += 1;

    setTodoList([...todoList, todo].sort(todoSortByCompleted));
  };

  const handleRemoveTodo = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodoList(
      todoList
        .map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
        .sort(todoSortByCompleted),
    );
  };

  const handleAddTodoClick = () => {
    const todo = { text: todoInput, completed: false };

    addTodo(todo);
    setTodoInput('');
    return todo;
  };

  const handleTodoInput = (e) => setTodoInput(e.target.value);
  const handleTodoKeyDown = (e) => {
    if (e.key === 'Enter' && todoInput) {
      handleAddTodoClick();
    }
  };

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.toDoForm}>
        <input
          className={styles.todoInput}
          placeholder="Add a todo..."
          value={todoInput}
          onInput={handleTodoInput}
          onKeyDown={handleTodoKeyDown}
        />

        <Button onClick={handleAddTodoClick} disabled={!todoInput}>
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{' '}
          </svg>
        </Button>
      </div>

      <ul className={styles.todoList}>
        {todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onRemove={handleRemoveTodo}
            onUpdate={handleUpdateTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
