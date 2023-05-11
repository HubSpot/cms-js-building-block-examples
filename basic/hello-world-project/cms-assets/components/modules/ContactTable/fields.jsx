import {
  ModuleFields,
  ChoiceField,
  TextField,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <TextField name="title" label="Title" default="some text" />
    <ChoiceField
      name="layout"
      label="Layout"
      default="Table"
      choices={[
        ['Table', 'Table'],
        ['Card', 'Card'],
      ]}
    />
  </ModuleFields>
);
