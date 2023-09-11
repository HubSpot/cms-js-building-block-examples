[API](../index.md) > SnakeToCamelCaseMap

# Type alias: SnakeToCamelCaseMap`<T>`

> **SnakeToCamelCaseMap**: <`T`> `{ [OriginalKey in keyof T as OriginalKey extends string ? SnakeToCamelCase<OriginalKey> : OriginalKey]: T[OriginalKey] }`

## Type parameters

| Parameter |
| :------ |
| `T` *extends* \{} |

## Source

fieldTypes.ts:589
