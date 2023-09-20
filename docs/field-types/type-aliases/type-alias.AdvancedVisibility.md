[API](../index.md) > AdvancedVisibility

# Type alias: AdvancedVisibility

> **AdvancedVisibility**: [`BaseField`](type-alias.BaseField.md) & \{
  `boolean_operator`: `"AND"` \| `"OR"`;
  `children`: [`AdvancedVisibility`](type-alias.AdvancedVisibility.md)[];
  `criteria`: \{
    `controlling_field_path`: `string`;
    `controlling_value_regex`: `string`;
    `operator`: `"NOT_EQUAL"` \| `"EQUAL"` \| `"EMPTY"` \| `"NOT_EMPTY"` \| `"MATCHES_REGEX"`;
  }[];
 }

> ## `AdvancedVisibility.boolean_operator`
>
> **boolean\_operator**: `"AND"` \| `"OR"`
>
> ## `AdvancedVisibility.children`
>
> **children**?: [`AdvancedVisibility`](type-alias.AdvancedVisibility.md)[]
>
> ## `AdvancedVisibility.criteria`
>
> **criteria**: \{
> `controlling_field_path`: `string`;
> `controlling_value_regex`: `string`;
> `operator`: `"NOT_EQUAL"` \| `"EQUAL"` \| `"EMPTY"` \| `"NOT_EMPTY"` \| `"MATCHES_REGEX"`;
> }[]
>
>

## Source

fieldTypes.ts:40
