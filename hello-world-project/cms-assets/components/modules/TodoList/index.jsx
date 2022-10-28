import { Island } from '@hubspot/cms-components';
import TodoList from '../../islands/TodoList.jsx?island';
export { default as fields } from './fields.jsx';

import Layout from '../../Layout.jsx';

export const meta = {
  label: `Todo List Module`,
};

/**
 * 'fieldValues' represents the resolved values from the defined module fields (./fields.jsx)
 * This will be the value provided by a marketer in the page editor, or will fallback to the defined default value
 * e.g., fieldValues = {
 *   "default_todo": {"text": "Todo Test 1", "completed": false}
 * }
 *
 * <Island /> is used here to enable client-side interactivty of a component
 * the `hydrateOn` prop allows customization of hydration, i.e., hydrate on page load, or hydrate when the component first becomes visible
 *
 * The Island component takes on the props of the component it is wrapping
 * Only serializable props are supported
 */
export const Component = (fieldValues) => {
  return (
    <Layout>
      <Island
        module={TodoList}
        id="todo-list-island"
        hydrateOn="load"
        // TodoList props:
        initialTodos={[fieldValues.default_todo]}
      />
    </Layout>
  );
};
