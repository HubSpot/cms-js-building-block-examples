import { Island } from '@hubspot/cms-components';
import TodoList from '../../islands/TodoList.jsx?island';
export { default as fields } from './fields.jsx';

import Layout from '../../Layout';

export const meta = {
  label: `Todo List Module`,
};

export const Component = (fieldValues) => {
  return (
    <Layout>
      <Island
        module={TodoList}
        initialTodos={[fieldValues.default_todo]}
        id="todo-list-island"
        hydrateOn="load"
      />
    </Layout>
  );
};
