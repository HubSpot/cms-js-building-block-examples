import { useState, useMemo } from 'react';

import Button from './Button';
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

export default function TodoList({ initialTodos = [] }) {
  const initialTodosMapped = useMemo(() => {
    return initialTodos.map((initialTodo, i) => {
      return {
        id: `default-${i}`,
        key: `default-${i}`,
        ...initialTodo,
      };
    });
  });
  const [todoList, setTodoList] = useState(initialTodosMapped);
  const [todoInput, setTodoInput] = useState('');

  const addTodo = (todo) => {
    todo['id'] = id;
    todo['key'] = id;
    id += 1;

    setTodoList((prevList) => [...prevList, todo].sort(todoSortByCompleted));
  };

  const handleRemoveTodo = (todoId) => {
    const removeIndex = todoList.map((todo) => todo.id).indexOf(todoId);
    setTodoList((prevList) => {
      let updatedList = [...prevList];
      updatedList.splice(removeIndex, 1);
      return updatedList;
    });
  };

  const handleUpdateTodo = (updatedTodo) => {
    const updatedId = updatedTodo.id;
    const updateIndex = todoList.map((todo) => todo.id).indexOf(updatedId);
    setTodoList((prevList) => {
      let updatedList = [...prevList];
      updatedList[updateIndex] = updatedTodo;
      return updatedList.sort(todoSortByCompleted);
    });
  };

  const handleAddTodoClick = () => {
    const todo = { text: todoInput, completed: false };

    addTodo(todo);
    setTodoInput('');
    return todo;
  };

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.toDoForm}>
        <input
          className={styles.todoInput}
          placeholder="Add a todo..."
          value={todoInput}
          onInput={(e) => setTodoInput(e.target.value)}
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
