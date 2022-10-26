import React from 'react';
import {
  FieldGroup,
  ModuleFields,
  BooleanField,
  TextField,
} from '@hubspot/cms-components/fields';

export default (
  <ModuleFields>
    <FieldGroup name="default_todo" label="Default Todo">
      <TextField
        label="Todo title"
        name="text"
        default="Todo Test 1"
        required
      />
      <BooleanField label="Todo Completed" name="completed" default={false} />
    </FieldGroup>
  </ModuleFields>
);
