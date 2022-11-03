import React from 'react';
import {
  FieldGroup,
  ModuleFields,
  BooleanField,
  TextField,
  ColorField,
} from '@hubspot/cms-components/fields';

/**
 * Here we are defining module fields that will show up for marketers in the page editor so they can customize the module
 * We also define default field values
 */
export const fields = (
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
    <ColorField name="button_color" default={{ color: '#F7761F' }} />
  </ModuleFields>
);
