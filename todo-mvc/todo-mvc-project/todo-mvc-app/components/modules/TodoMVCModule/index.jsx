import TodoMVC from '../../todomvc-separate-islands/index.jsx';

export function Component({ todoPlaceholder, dataQueryResult }) {
  const initialTodos =
    dataQueryResult.data.HUBDB.todo_js_example_collection.items;
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
