[API](../index.md) > BaseField

# Type alias: BaseField

> **BaseField**: `object`

## Type declaration

### `advanced_visibility`

**advanced\_visibility**?: [`AdvancedVisibility`](type-alias.AdvancedVisibility.md)

***

### `display_width`

**display\_width**?: `string`

***

### `help_text`

**help\_text**?: `string`

***

### `id`

**id**?: `string`

***

### `inline_help_text`

**inline\_help\_text**?: `string` \| `null`

***

### `label`

**label**: `string`

***

### `locked`

**locked**?: `boolean`

***

### `name`

**name**: `string`

***

### `occurrence`

**occurrence**?: `object`

> #### `occurrence.default`
>
> **default**?: `number` \| `null`
>
> #### `occurrence.max`
>
> **max**?: `number` \| `null`
>
> #### `occurrence.min`
>
> **min**: `number`
>
> #### `occurrence.sorting_label_field`
>
> **sorting\_label\_field**?: `string`
>
>

***

### `required`

**required**?: `boolean`

***

### `sortable`

**sortable**?: `boolean`

***

### `visibility`

**visibility**?: `object`

> #### `visibility.access`
>
> **access**?: \{
> `gates`: `string`[];
> `operator`: `"HAS_ALL"` \| `"HAS_ANY"` \| `"HAS_NONE"`;
> `scopes`: `string`[];
> } \| `null`
>
> #### `visibility.controlling_field`
>
> **controlling\_field**?: `string` \| `null`
>
> #### `visibility.controlling_field_path`
>
> **controlling\_field\_path**?: `string` \| `null`
>
> #### `visibility.controlling_value_regex`
>
> **controlling\_value\_regex**?: `string` \| `null`
>
> #### `visibility.hidden_subfields`
>
> **hidden\_subfields**?: \{} \| `null`
>
> #### `visibility.operator`
>
> **operator**?: `"NOT_EQUAL"` \| `"EQUAL"` \| `"EMPTY"` \| `"NOT_EMPTY"` \| `"MATCHES_REGEX"` \| `null`
>
>

***

### `visibility_rules`

**visibility\_rules**?: `"SIMPLE"` \| `"ADVANCED"`

## Source

fieldTypes.ts:3
