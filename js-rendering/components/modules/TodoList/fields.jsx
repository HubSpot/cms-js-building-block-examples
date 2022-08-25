import React from "react";
import {
  FieldGroup,
  ModuleFields,
  BooleanField,
  TextField,
} from "@hubspot/cms-components/fields";

export default (
  <ModuleFields>
    <FieldGroup
      name="todo_list"
      label="Todo List"
      children={[
        <TextField label="Todo" name="todo_text" required />,
        <BooleanField
          label="Todo Completed"
          name="todo_completed"
          default={false}
        />,
      ]}
      default={[
        {
          todo_text: "Read the JS Rendering Docs",
          completed: false,
        },
        {
          todo_text: "Upload this to HubSpot",
          completed: true,
        },
      ]}
    />
  </ModuleFields>
);
