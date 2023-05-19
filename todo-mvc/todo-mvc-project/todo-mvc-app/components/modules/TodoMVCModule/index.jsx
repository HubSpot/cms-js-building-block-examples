import TodoMVC from '../../todomvc-separate-islands/index.jsx';

const DEFAULT_TODOS_IF_NO_FETCH = [
  {
    id: 'default-todo-1',
    name: 'Default todo 1',
    completed: false,
  },
  {
    id: 'default-todo-2',
    name: 'Default todo 2',
    completed: true,
  },
];

export function Component({ todoPlaceholder, dataQueryResult }) {
  const todosFromHubDB =
    dataQueryResult?.data?.HUBDB?.todo_js_example_collection?.items;

  const initialTodos = todosFromHubDB ?? DEFAULT_TODOS_IF_NO_FETCH;

  return (
    <TodoMVC initialTodos={initialTodos} todoPlaceholder={todoPlaceholder} />
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: `TodoMVC module`,
};

export const query = `query AllTodos {
  HUBDB {
    todo_js_example_collection {
      items {
        id: hs_id
        name
        completed
      }
    }
  }
}`;
