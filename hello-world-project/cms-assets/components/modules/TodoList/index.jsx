import { Island } from "@hubspot/cms-components";
import TodoListProvider from "../../islands/TodoList.jsx?island";
export { default as fields } from "./fields.jsx";

import Layout from "../../Layout";

export const meta = {
  label: `Todo List Module`,
};

export const Component = (fieldValues) => {
  console.log("Field values:", fieldValues.todo_group);

  return (
    <Layout>
      <Island
        id={`todo-list-island`}
        module={TodoListProvider}
        hydrateOn="load"
        todos={[fieldValues.todo_group]}
      />
    </Layout>
  );
};
