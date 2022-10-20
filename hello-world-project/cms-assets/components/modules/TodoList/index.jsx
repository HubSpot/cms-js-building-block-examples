import TodoList from '../../islands/TodoList.jsx';
export { default as fields } from './fields.jsx';

import Layout from '../../Layout';

export const meta = {
  label: `Todo List Module`,
};

export const Component = (fieldValues) => {
  return (
    <Layout>
      <TodoList initialTodos={[fieldValues.default_todo]} />
    </Layout>
  );
};
