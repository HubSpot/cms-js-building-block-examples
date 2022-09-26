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
      name="todo_group"
      label="Todo Group"
      children={[
        <TextField
          label="Todo"
          name="text"
          default="Todo Test 1"
          required
        />,
        <BooleanField
          label="Todo Completed"
          name="completed"
          default={false}
        />,
      ]}
    />
  </ModuleFields>
);

/*
* TODO: Use this FieldGroup once FieldGroups with occurrence are supported in modules
<FieldGroup
      key="todo_list"
      name="todo_list"
      label="Todo List"
      occurrence={{
        min: 0,
        max: null,
      }}
      children={[
        <TextField label="Todo" name="todo_text" default="" required />,
        <BooleanField
          label="Todo Completed"
          name="todo_completed"
          default={false}
        />,
      ]}
      default={[
        {
          todo_text: "Todo Test 1",
          todo_completed: false,
        },
        {
          todo_text: "Todo Test 2",
          todo_completed: true,
        },
      ]}
    />
*/
