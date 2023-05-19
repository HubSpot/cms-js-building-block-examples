[@hubspot/cms-components](README.md) / Exports

# @hubspot/cms-components

## Table of contents

### Type Aliases

- [AdvancedVisibility](modules.md#advancedvisibility)
- [AlignmentFieldType](modules.md#alignmentfieldtype)
- [BackgroundImageFieldType](modules.md#backgroundimagefieldtype)
- [BaseField](modules.md#basefield)
- [BlogFieldType](modules.md#blogfieldtype)
- [BooleanFieldType](modules.md#booleanfieldtype)
- [BorderFieldType](modules.md#borderfieldtype)
- [BorderSideType](modules.md#bordersidetype)
- [ChoiceFieldType](modules.md#choicefieldtype)
- [ColorFieldType](modules.md#colorfieldtype)
- [CrmObjectFieldType](modules.md#crmobjectfieldtype)
- [CrmObjectPropertyFieldType](modules.md#crmobjectpropertyfieldtype)
- [CssUnit](modules.md#cssunit)
- [CtaFieldType](modules.md#ctafieldtype)
- [DateFieldType](modules.md#datefieldtype)
- [DateTimeFieldType](modules.md#datetimefieldtype)
- [EmailFieldType](modules.md#emailfieldtype)
- [EmbedFieldType](modules.md#embedfieldtype)
- [Field](modules.md#field)
- [FieldComponentProps](modules.md#fieldcomponentprops)
- [FieldType](modules.md#fieldtype)
- [FileFieldType](modules.md#filefieldtype)
- [FollowUpEmailFieldType](modules.md#followupemailfieldtype)
- [FontFieldType](modules.md#fontfieldtype)
- [FontVariants](modules.md#fontvariants)
- [FormFieldType](modules.md#formfieldtype)
- [GradientColorType](modules.md#gradientcolortype)
- [GradientFieldType](modules.md#gradientfieldtype)
- [GroupFieldType](modules.md#groupfieldtype)
- [HtmlFieldType](modules.md#htmlfieldtype)
- [HubdbRowFieldType](modules.md#hubdbrowfieldtype)
- [HubdbTableFieldType](modules.md#hubdbtablefieldtype)
- [HublFieldType](modules.md#hublfieldtype)
- [IconFieldType](modules.md#iconfieldtype)
- [ImageFieldType](modules.md#imagefieldtype)
- [LinkFieldType](modules.md#linkfieldtype)
- [LogoFieldType](modules.md#logofieldtype)
- [MeetingFieldType](modules.md#meetingfieldtype)
- [MenuFieldType](modules.md#menufieldtype)
- [NumberFieldType](modules.md#numberfieldtype)
- [PageFieldType](modules.md#pagefieldtype)
- [PaymentFieldType](modules.md#paymentfieldtype)
- [RichTextFeatures](modules.md#richtextfeatures)
- [RichTextFieldType](modules.md#richtextfieldtype)
- [SfdcCamapaignFieldType](modules.md#sfdccamapaignfieldtype)
- [SimpleMenuFieldType](modules.md#simplemenufieldtype)
- [SnakeToCamelCaseMap](modules.md#snaketocamelcasemap)
- [SpacingFieldType](modules.md#spacingfieldtype)
- [SpacingValueType](modules.md#spacingvaluetype)
- [SurveyFieldType](modules.md#surveyfieldtype)
- [TagFieldType](modules.md#tagfieldtype)
- [TextAlignmentFieldType](modules.md#textalignmentfieldtype)
- [TextFieldType](modules.md#textfieldtype)
- [UrlFieldType](modules.md#urlfieldtype)
- [UrlTypes](modules.md#urltypes)
- [VideoFieldType](modules.md#videofieldtype)
- [WorkflowFieldType](modules.md#workflowfieldtype)

## Type Aliases

### AdvancedVisibility

Ƭ **AdvancedVisibility**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `boolean_operator` | ``"AND"`` \| ``"OR"`` |
| `children?` | [`AdvancedVisibility`](modules.md#advancedvisibility)[] |
| `criteria` | { `controlling_field_path?`: `string` ; `controlling_value_regex`: `string` ; `operator`: ``"NOT_EQUAL"`` \| ``"EQUAL"`` \| ``"EMPTY"`` \| ``"NOT_EMPTY"`` \| ``"MATCHES_REGEX"``  }[] |

#### Defined in

fieldTypes.ts:40

___

### AlignmentFieldType

Ƭ **AlignmentFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alignment_direction?` | ``"HORIZONTAL"`` \| ``"VERTICAL"`` \| ``"BOTH"`` |
| `default?` | { `horizontal_align?`: ``"LEFT"`` \| ``"CENTER"`` \| ``"RIGHT"`` ; `vertical_align?`: ``"TOP"`` \| ``"MIDDLE"`` \| ``"BOTTOM"``  } |
| `default.horizontal_align?` | ``"LEFT"`` \| ``"CENTER"`` \| ``"RIGHT"`` |
| `default.vertical_align?` | ``"TOP"`` \| ``"MIDDLE"`` \| ``"BOTTOM"`` |
| `type` | ``"alignment"`` |

#### Defined in

fieldTypes.ts:51

___

### BackgroundImageFieldType

Ƭ **BackgroundImageFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `background_position?`: ``"TOP_LEFT"`` \| ``"TOP_CENTER"`` \| ``"TOP_RIGHT"`` \| ``"MIDDLE_LEFT"`` \| ``"MIDDLE_CENTER"`` \| ``"MIDDLE_RIGHT"`` \| ``"BOTTOM_LEFT"`` \| ``"BOTTOM_CENTER"`` \| ``"BOTTOM_RIGHT"`` ; `background_size?`: ``"COVER"`` \| ``"CONTAIN"`` \| ``"AUTO"`` ; `src?`: `string`  } |
| `default.background_position?` | ``"TOP_LEFT"`` \| ``"TOP_CENTER"`` \| ``"TOP_RIGHT"`` \| ``"MIDDLE_LEFT"`` \| ``"MIDDLE_CENTER"`` \| ``"MIDDLE_RIGHT"`` \| ``"BOTTOM_LEFT"`` \| ``"BOTTOM_CENTER"`` \| ``"BOTTOM_RIGHT"`` |
| `default.background_size?` | ``"COVER"`` \| ``"CONTAIN"`` \| ``"AUTO"`` |
| `default.src?` | `string` |
| `type` | ``"backgroundimage"`` |

#### Defined in

fieldTypes.ts:59

___

### BaseField

Ƭ **BaseField**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `advanced_visibility?` | [`AdvancedVisibility`](modules.md#advancedvisibility) |
| `display_width?` | `string` |
| `help_text?` | `string` |
| `id?` | `string` |
| `inline_help_text?` | `string` \| ``null`` |
| `label` | `string` |
| `locked?` | `boolean` |
| `name` | `string` |
| `occurrence?` | { `default?`: `number` \| ``null`` ; `max?`: `number` \| ``null`` ; `min`: `number` ; `sorting_label_field?`: `string`  } |
| `occurrence.default?` | `number` \| ``null`` |
| `occurrence.max?` | `number` \| ``null`` |
| `occurrence.min` | `number` |
| `occurrence.sorting_label_field?` | `string` |
| `required?` | `boolean` |
| `sortable?` | `boolean` |
| `visibility?` | { `access?`: { `gates?`: `string`[] ; `operator`: ``"HAS_ALL"`` \| ``"HAS_ANY"`` \| ``"HAS_NONE"`` ; `scopes?`: `string`[]  } \| ``null`` ; `controlling_field?`: `string` \| ``null`` ; `controlling_field_path?`: `string` \| ``null`` ; `controlling_value_regex?`: `string` \| ``null`` ; `hidden_subfields?`: {} \| ``null`` ; `operator?`: ``"NOT_EQUAL"`` \| ``"EQUAL"`` \| ``"EMPTY"`` \| ``"NOT_EMPTY"`` \| ``"MATCHES_REGEX"`` \| ``null``  } |
| `visibility.access?` | { `gates?`: `string`[] ; `operator`: ``"HAS_ALL"`` \| ``"HAS_ANY"`` \| ``"HAS_NONE"`` ; `scopes?`: `string`[]  } \| ``null`` |
| `visibility.controlling_field?` | `string` \| ``null`` |
| `visibility.controlling_field_path?` | `string` \| ``null`` |
| `visibility.controlling_value_regex?` | `string` \| ``null`` |
| `visibility.hidden_subfields?` | {} \| ``null`` |
| `visibility.operator?` | ``"NOT_EQUAL"`` \| ``"EQUAL"`` \| ``"EMPTY"`` \| ``"NOT_EMPTY"`` \| ``"MATCHES_REGEX"`` \| ``null`` |
| `visibility_rules?` | ``"SIMPLE"`` \| ``"ADVANCED"`` |

#### Defined in

fieldTypes.ts:3

___

### BlogFieldType

Ƭ **BlogFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `number` \| `number`[] |
| `placeholder?` | `string` |
| `type` | ``"blog"`` |

#### Defined in

fieldTypes.ts:76

___

### BooleanFieldType

Ƭ **BooleanFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `boolean` |
| `display?` | ``"toggle"`` \| ``"checkbox"`` |
| `type` | ``"boolean"`` |

#### Defined in

fieldTypes.ts:81

___

### BorderFieldType

Ƭ **BorderFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allow_custom_border_sides?` | `boolean` |
| `default?` | { `border_radius?`: { `units`: [`CssUnit`](modules.md#cssunit) ; `value`: `number`  } ; `bottom?`: [`BorderSideType`](modules.md#bordersidetype) ; `left?`: [`BorderSideType`](modules.md#bordersidetype) ; `right?`: [`BorderSideType`](modules.md#bordersidetype) ; `top?`: [`BorderSideType`](modules.md#bordersidetype)  } |
| `default.border_radius?` | { `units`: [`CssUnit`](modules.md#cssunit) ; `value`: `number`  } |
| `default.border_radius.units` | [`CssUnit`](modules.md#cssunit) |
| `default.border_radius.value` | `number` |
| `default.bottom?` | [`BorderSideType`](modules.md#bordersidetype) |
| `default.left?` | [`BorderSideType`](modules.md#bordersidetype) |
| `default.right?` | [`BorderSideType`](modules.md#bordersidetype) |
| `default.top?` | [`BorderSideType`](modules.md#bordersidetype) |
| `type` | ``"border"`` |

#### Defined in

fieldTypes.ts:104

___

### BorderSideType

Ƭ **BorderSideType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color?` | `string` |
| `opacity?` | `number` |
| `style?` | ``"none"`` \| ``"solid"`` \| ``"dashed"`` \| ``"double"`` \| ``"groove"`` \| ``"ridge"`` \| ``"inset"`` \| ``"outset"`` |
| `width?` | { `units`: [`CssUnit`](modules.md#cssunit) ; `value`: `number`  } |
| `width.units` | [`CssUnit`](modules.md#cssunit) |
| `width.value` | `number` |

#### Defined in

fieldTypes.ts:87

___

### ChoiceFieldType

Ƭ **ChoiceFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `choices` | [`any`, `string`][] |
| `default?` | `string` \| `number` \| (`string` \| `number`)[] |
| `display?` | ``"radio"`` \| ``"select"`` \| ``"checkbox"`` |
| `multiple?` | `boolean` |
| `placeholder?` | `string` |
| `reordering_enabled?` | `boolean` |
| `type` | ``"choice"`` |

#### Defined in

fieldTypes.ts:118

___

### ColorFieldType

Ƭ **ColorFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `color?`: `string` ; `opacity?`: `number`  } |
| `default.color?` | `string` |
| `default.opacity?` | `number` |
| `type` | ``"color"`` |

#### Defined in

fieldTypes.ts:127

___

### CrmObjectFieldType

Ƭ **CrmObjectFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `id?`: `number`  } |
| `default.id?` | `number` |
| `display_format?` | `string` |
| `display_properties?` | `string`[] |
| `object_type` | `string` |
| `placeholder?` | `string` |
| `properties_to_fetch` | `string`[] |
| `type` | ``"crmobject"`` |

#### Defined in

fieldTypes.ts:134

___

### CrmObjectPropertyFieldType

Ƭ **CrmObjectPropertyFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `property?`: `string`  } |
| `default.property?` | `string` |
| `object_type` | `string` |
| `placeholder?` | `string` |
| `type` | ``"crmobjectproperty"`` |

#### Defined in

fieldTypes.ts:145

___

### CssUnit

Ƭ **CssUnit**: ``"px"`` \| ``"pt"`` \| ``"em"`` \| ``"rem"`` \| ``"%"`` \| ``"ex"`` \| ``"ch"``

#### Defined in

fieldTypes.ts:86

___

### CtaFieldType

Ƭ **CtaFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `string` |
| `type` | ``"cta"`` |

#### Defined in

fieldTypes.ts:153

___

### DateFieldType

Ƭ **DateFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `number` |
| `type` | ``"date"`` |

#### Defined in

fieldTypes.ts:157

___

### DateTimeFieldType

Ƭ **DateTimeFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `number` |
| `step?` | `number` |
| `type` | ``"datetime"`` |

#### Defined in

fieldTypes.ts:161

___

### EmailFieldType

Ƭ **EmailFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allow_custom_email_addresses?` | `boolean` |
| `default?` | `string`[] |
| `type` | ``"email"`` |

#### Defined in

fieldTypes.ts:166

___

### EmbedFieldType

Ƭ **EmbedFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `embed_type?`: `string` ; `height?`: `number` ; `max_height?`: `number` ; `max_width?`: `number` ; `media_bridge_object?`: {} ; `oembed_response?`: {} ; `oembed_string?`: `string` ; `size_type?`: ``"auto"`` \| ``"auto_custom_max"`` \| ``"auto_full_width"`` \| ``"exact"`` ; `source_type?`: ``"oembed"`` \| ``"html"`` \| ``"media_bridge"`` ; `width?`: `number`  } |
| `default.embed_type?` | `string` |
| `default.height?` | `number` |
| `default.max_height?` | `number` |
| `default.max_width?` | `number` |
| `default.media_bridge_object?` | {} |
| `default.oembed_response?` | {} |
| `default.oembed_string?` | `string` |
| `default.size_type?` | ``"auto"`` \| ``"auto_custom_max"`` \| ``"auto_full_width"`` \| ``"exact"`` |
| `default.source_type?` | ``"oembed"`` \| ``"html"`` \| ``"media_bridge"`` |
| `default.width?` | `number` |
| `resizeable?` | `boolean` |
| `show_preview?` | `boolean` |
| `supported_media_bridge_providers` | `number`[] |
| `supported_oembed_types` | (``"photo"`` \| ``"video"`` \| ``"link"`` \| ``"rich"``)[] |
| `supported_source_types` | (``"oembed"`` \| ``"html"`` \| ``"media_bridge"``)[] |
| `type` | ``"embed"`` |

#### Defined in

fieldTypes.ts:171

___

### Field

Ƭ **Field**: [`BaseField`](modules.md#basefield) & [`AlignmentFieldType`](modules.md#alignmentfieldtype) \| [`BackgroundImageFieldType`](modules.md#backgroundimagefieldtype) \| [`BlogFieldType`](modules.md#blogfieldtype) \| [`BooleanFieldType`](modules.md#booleanfieldtype) \| [`BorderFieldType`](modules.md#borderfieldtype) \| [`ChoiceFieldType`](modules.md#choicefieldtype) \| [`ColorFieldType`](modules.md#colorfieldtype) \| [`CrmObjectFieldType`](modules.md#crmobjectfieldtype) \| [`CrmObjectPropertyFieldType`](modules.md#crmobjectpropertyfieldtype) \| [`CtaFieldType`](modules.md#ctafieldtype) \| [`DateFieldType`](modules.md#datefieldtype) \| [`DateTimeFieldType`](modules.md#datetimefieldtype) \| [`EmailFieldType`](modules.md#emailfieldtype) \| [`EmbedFieldType`](modules.md#embedfieldtype) \| [`FileFieldType`](modules.md#filefieldtype) \| [`FollowUpEmailFieldType`](modules.md#followupemailfieldtype) \| [`FontFieldType`](modules.md#fontfieldtype) \| [`FormFieldType`](modules.md#formfieldtype) \| [`GradientFieldType`](modules.md#gradientfieldtype) \| [`HtmlFieldType`](modules.md#htmlfieldtype) \| [`HubdbRowFieldType`](modules.md#hubdbrowfieldtype) \| [`HubdbTableFieldType`](modules.md#hubdbtablefieldtype) \| [`HublFieldType`](modules.md#hublfieldtype) \| [`IconFieldType`](modules.md#iconfieldtype) \| [`ImageFieldType`](modules.md#imagefieldtype) \| [`LinkFieldType`](modules.md#linkfieldtype) \| [`LogoFieldType`](modules.md#logofieldtype) \| [`MeetingFieldType`](modules.md#meetingfieldtype) \| [`MenuFieldType`](modules.md#menufieldtype) \| [`NumberFieldType`](modules.md#numberfieldtype) \| [`TextFieldType`](modules.md#textfieldtype) \| [`GroupFieldType`](modules.md#groupfieldtype) \| [`PageFieldType`](modules.md#pagefieldtype) \| [`PaymentFieldType`](modules.md#paymentfieldtype) \| [`RichTextFieldType`](modules.md#richtextfieldtype) \| [`SfdcCamapaignFieldType`](modules.md#sfdccamapaignfieldtype) \| [`SimpleMenuFieldType`](modules.md#simplemenufieldtype) \| [`SpacingFieldType`](modules.md#spacingfieldtype) \| [`SurveyFieldType`](modules.md#surveyfieldtype) \| [`TagFieldType`](modules.md#tagfieldtype) \| [`TextFieldType`](modules.md#textfieldtype) \| [`TextAlignmentFieldType`](modules.md#textalignmentfieldtype) \| [`UrlFieldType`](modules.md#urlfieldtype) \| [`VideoFieldType`](modules.md#videofieldtype) \| [`WorkflowFieldType`](modules.md#workflowfieldtype) \| [`GroupFieldType`](modules.md#groupfieldtype)

#### Defined in

fieldTypes.ts:536

___

### FieldComponentProps

Ƭ **FieldComponentProps**<`T`\>: `AdaptChildren`<`AdaptChildren`<[`SnakeToCamelCaseMap`](modules.md#snaketocamelcasemap)<`Omit`<`Extract`<[`Field`](modules.md#field), { `type`: `T`  }\>, ``"type"``\>\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FieldType`](modules.md#fieldtype) |

#### Defined in

fieldTypes.ts:605

___

### FieldType

Ƭ **FieldType**: [`Field`](modules.md#field)[``"type"``]

#### Defined in

fieldTypes.ts:587

___

### FileFieldType

Ƭ **FileFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `string` |
| `picker` | ``"file"`` \| ``"image"`` \| ``"video"`` \| ``"document"`` |
| `type` | ``"file"`` |

#### Defined in

fieldTypes.ts:194

___

### FollowUpEmailFieldType

Ƭ **FollowUpEmailFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `string` |
| `placeholder?` | `string` |
| `type` | ``"followupemail"`` |

#### Defined in

fieldTypes.ts:199

___

### FontFieldType

Ƭ **FontFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `color?`: `string` ; `fallback?`: `string` ; `font`: `string` ; `font_set?`: ``"DEFAULT"`` \| ``"GOOGLE"`` \| ``"CUSTOM"`` ; `google_font_variants?`: [`FontVariants`](modules.md#fontvariants)[] ; `size?`: `number` ; `size_unit?`: [`CssUnit`](modules.md#cssunit) ; `styles?`: { `key`: `string` ; `value`: `string`  } ; `variant?`: `string`  } |
| `default.color?` | `string` |
| `default.fallback?` | `string` |
| `default.font` | `string` |
| `default.font_set?` | ``"DEFAULT"`` \| ``"GOOGLE"`` \| ``"CUSTOM"`` |
| `default.google_font_variants?` | [`FontVariants`](modules.md#fontvariants)[] |
| `default.size?` | `number` |
| `default.size_unit?` | [`CssUnit`](modules.md#cssunit) |
| `default.styles?` | { `key`: `string` ; `value`: `string`  } |
| `default.styles.key` | `string` |
| `default.styles.value` | `string` |
| `default.variant?` | `string` |
| `load_external_fonts?` | `boolean` |
| `maxSize?` | `number` |
| `minSize?` | `number` |
| `type` | ``"font"`` |

#### Defined in

fieldTypes.ts:223

___

### FontVariants

Ƭ **FontVariants**: ``"100"`` \| ``"100i"`` \| ``"200"`` \| ``"200i"`` \| ``"300"`` \| ``"300i"`` \| ``"400"`` \| ``"400i"`` \| ``"500"`` \| ``"500i"`` \| ``"600"`` \| ``"600i"`` \| ``"700"`` \| ``"700i"`` \| ``"800"`` \| ``"800i"`` \| ``"900"`` \| ``"900i"``

#### Defined in

fieldTypes.ts:204

___

### FormFieldType

Ƭ **FormFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allow_inline_form_editing?` | `boolean` |
| `default?` | { `form_id?`: `string` ; `form_type?`: ``"HUBSPOT"`` \| ``"TICKET_FORM"`` ; `message?`: `string` ; `redirect_id?`: `number` ; `redirect_url?`: `string` ; `response_type?`: ``"inline"`` \| ``"redirect"`` ; `workflow_id?`: `number`[]  } |
| `default.form_id?` | `string` |
| `default.form_type?` | ``"HUBSPOT"`` \| ``"TICKET_FORM"`` |
| `default.message?` | `string` |
| `default.redirect_id?` | `number` |
| `default.redirect_url?` | `string` |
| `default.response_type?` | ``"inline"`` \| ``"redirect"`` |
| `default.workflow_id?` | `number`[] |
| `type` | ``"form"`` |

#### Defined in

fieldTypes.ts:240

___

### GradientColorType

Ƭ **GradientColorType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | { `a`: `number` ; `b`: `string` ; `g`: `string` ; `r`: `string`  } |
| `color.a` | `number` |
| `color.b` | `string` |
| `color.g` | `string` |
| `color.r` | `string` |

#### Defined in

fieldTypes.ts:263

___

### GradientFieldType

Ƭ **GradientFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `color?`: [`GradientColorType`](modules.md#gradientcolortype)[] ; `side_or_corner?`: { `horizontalSide?`: ``"LEFT"`` \| ``"RIGHT"`` ; `verticalSide?`: ``"TOP"`` \| ``"BOTTOM"``  }  } |
| `default.color?` | [`GradientColorType`](modules.md#gradientcolortype)[] |
| `default.side_or_corner?` | { `horizontalSide?`: ``"LEFT"`` \| ``"RIGHT"`` ; `verticalSide?`: ``"TOP"`` \| ``"BOTTOM"``  } |
| `default.side_or_corner.horizontalSide?` | ``"LEFT"`` \| ``"RIGHT"`` |
| `default.side_or_corner.verticalSide?` | ``"TOP"`` \| ``"BOTTOM"`` |
| `type` | ``"gradient"`` |

#### Defined in

fieldTypes.ts:253

___

### GroupFieldType

Ƭ **GroupFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | [`Field`](modules.md#field)[] |
| `default?` | [] \| {} |
| `expanded?` | `boolean` |
| `tab?` | ``"STYLE"`` |
| `type` | ``"group"`` |

#### Defined in

fieldTypes.ts:527

___

### HtmlFieldType

Ƭ **HtmlFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `string` |
| `type` | ``"html"`` |

#### Defined in

fieldTypes.ts:271

___

### HubdbRowFieldType

Ƭ **HubdbRowFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `columns_to_fetch` | `string`[] |
| `default?` | { `id`: `number`  } |
| `default.id` | `number` |
| `display_columns?` | `string`[] |
| `display_format?` | `string` |
| `placeholder?` | `string` |
| `table_name_or_id` | `string` \| `number` |
| `type` | ``"hubdbrow"`` |

#### Defined in

fieldTypes.ts:275

___

### HubdbTableFieldType

Ƭ **HubdbTableFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `string` \| `number` |
| `placeholder?` | `string` |
| `type` | ``"hubdbtable"`` |

#### Defined in

fieldTypes.ts:286

___

### HublFieldType

Ƭ **HublFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `string` |
| `type` | ``"hubl"`` |

#### Defined in

fieldTypes.ts:291

___

### IconFieldType

Ƭ **IconFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `name?`: `string` ; `type?`: ``"SOLID"`` \| ``"REGULAR"`` ; `unicode?`: `string`  } |
| `default.name?` | `string` |
| `default.type?` | ``"SOLID"`` \| ``"REGULAR"`` |
| `default.unicode?` | `string` |
| `set?` | ``"fontawesome-5"`` \| ``"fontawesome-5.0.10"`` \| ``"fontawesome-5.14.0"`` |
| `type` | ``"icon"`` |

#### Defined in

fieldTypes.ts:295

___

### ImageFieldType

Ƭ **ImageFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `alt?`: `string` ; `height?`: `number` ; `loading?`: ``"disabled"`` \| ``"eager"`` \| ``"lazy"`` ; `max_height?`: `number` ; `max_width?`: `number` ; `size_type?`: ``"auto"`` \| ``"auto_custom_max"`` \| ``"auto_full_width"`` \| ``"exact"`` ; `src`: `string` ; `width?`: `number`  } |
| `default.alt?` | `string` |
| `default.height?` | `number` |
| `default.loading?` | ``"disabled"`` \| ``"eager"`` \| ``"lazy"`` |
| `default.max_height?` | `number` |
| `default.max_width?` | `number` |
| `default.size_type?` | ``"auto"`` \| ``"auto_custom_max"`` \| ``"auto_full_width"`` \| ``"exact"`` |
| `default.src` | `string` |
| `default.width?` | `number` |
| `resizeable?` | `boolean` |
| `responsive?` | `boolean` |
| `show_loading?` | `boolean` |
| `type` | ``"image"`` |

#### Defined in

fieldTypes.ts:304

___

### LinkFieldType

Ƭ **LinkFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `no_follow?`: `boolean` ; `open_in_new_tab?`: `boolean` ; `sponsored?`: `boolean` ; `url?`: { `content_id`: `number` ; `href`: `string` ; `type`: [`UrlTypes`](modules.md#urltypes)  } ; `user_generated_content?`: `boolean`  } |
| `default.no_follow?` | `boolean` |
| `default.open_in_new_tab?` | `boolean` |
| `default.sponsored?` | `boolean` |
| `default.url?` | { `content_id`: `number` ; `href`: `string` ; `type`: [`UrlTypes`](modules.md#urltypes)  } |
| `default.url.content_id` | `number` |
| `default.url.href` | `string` |
| `default.url.type` | [`UrlTypes`](modules.md#urltypes) |
| `default.user_generated_content?` | `boolean` |
| `placeholder?` | `string` |
| `show_advanced_rel_options?` | `boolean` |
| `supported_types?` | [`UrlTypes`](modules.md#urltypes)[] |
| `type` | ``"link"`` |

#### Defined in

fieldTypes.ts:320

___

### LogoFieldType

Ƭ **LogoFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `alt?`: `string` ; `height?`: `number` ; `loading?`: `string` ; `override_inherited_src?`: `boolean` ; `src?`: `string` ; `suppress_company_name?`: `boolean` ; `width?`: `number`  } |
| `default.alt?` | `string` |
| `default.height?` | `number` |
| `default.loading?` | `string` |
| `default.override_inherited_src?` | `boolean` |
| `default.src?` | `string` |
| `default.suppress_company_name?` | `boolean` |
| `default.width?` | `number` |
| `show_loading` | ``true`` |
| `type` | ``"logo"`` |

#### Defined in

fieldTypes.ts:337

___

### MeetingFieldType

Ƭ **MeetingFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `string` |
| `embeddable?` | `boolean` |
| `placeholder?` | `string` |
| `type` | ``"meeting"`` |

#### Defined in

fieldTypes.ts:350

___

### MenuFieldType

Ƭ **MenuFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `number` \| `string` |
| `placeholder?` | ``"string"`` |
| `type` | ``"menu"`` |

#### Defined in

fieldTypes.ts:356

___

### NumberFieldType

Ƭ **NumberFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `number` \| `number`[] \| ``null`` |
| `display?` | ``"text"`` \| ``"slider"`` |
| `format?` | ``"ANY"`` \| ``"INTEGER"`` |
| `max?` | `number` |
| `min?` | `number` |
| `placeholder?` | `string` |
| `prefix?` | `string` |
| `step?` | `number` |
| `suffix?` | `string` |
| `type` | ``"number"`` |

#### Defined in

fieldTypes.ts:361

___

### PageFieldType

Ƭ **PageFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `number` \| `number`[] |
| `placeholder?` | `string` |
| `type` | ``"page"`` |

#### Defined in

fieldTypes.ts:373

___

### PaymentFieldType

Ƭ **PaymentFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `id?`: `number`  } |
| `default.id?` | `number` |
| `type` | ``"payment"`` |

#### Defined in

fieldTypes.ts:378

___

### RichTextFeatures

Ƭ **RichTextFeatures**: ``"block"`` \| ``"font_family"`` \| ``"font_size"`` \| ``"bold"`` \| ``"italic"`` \| ``"underline"`` \| ``"text_color"`` \| ``"background_color"`` \| ``"alignment"`` \| ``"bulleted_list"`` \| ``"numbered_list"`` \| ``"lineheight"`` \| ``"outdent"`` \| ``"indent"`` \| ``"strikethrough"`` \| ``"superscript"`` \| ``"subscript"`` \| ``"code_format"`` \| ``"link"`` \| ``"image"`` \| ``"emoji"`` \| ``"personalize"`` \| ``"cta"`` \| ``"embed"`` \| ``"video"`` \| ``"table"`` \| ``"charmap"`` \| ``"anchor"`` \| ``"hr"`` \| ``"nonbreaking_space"`` \| ``"source_code"`` \| ``"visual_blocks"`` \| ``"colors"`` \| ``"fonts"`` \| ``"indents"`` \| ``"lists"`` \| ``"standard_emphasis"`` \| ``"advanced_emphasis"``

#### Defined in

fieldTypes.ts:384

___

### RichTextFieldType

Ƭ **RichTextFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `string` |
| `enabled_features?` | [`RichTextFeatures`](modules.md#richtextfeatures)[] |
| `type` | ``"richtext"`` |

#### Defined in

fieldTypes.ts:424

___

### SfdcCamapaignFieldType

Ƭ **SfdcCamapaignFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `string` |
| `type` | ``"salesforcecampaign"`` |

#### Defined in

fieldTypes.ts:429

___

### SimpleMenuFieldType

Ƭ **SimpleMenuFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | {}[] |
| `type` | ``"simplemenu"`` |

#### Defined in

fieldTypes.ts:433

___

### SnakeToCamelCaseMap

Ƭ **SnakeToCamelCaseMap**<`T`\>: { [OriginalKey in keyof T as OriginalKey extends string ? SnakeToCamelCase<OriginalKey\> : OriginalKey]: T[OriginalKey] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

fieldTypes.ts:594

___

### SpacingFieldType

Ƭ **SpacingFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `margin?`: { `bottom?`: [`SpacingValueType`](modules.md#spacingvaluetype) ; `top?`: [`SpacingValueType`](modules.md#spacingvaluetype)  } ; `padding?`: { `bottom?`: [`SpacingValueType`](modules.md#spacingvaluetype) ; `left?`: [`SpacingValueType`](modules.md#spacingvaluetype) ; `right?`: [`SpacingValueType`](modules.md#spacingvaluetype) ; `top?`: [`SpacingValueType`](modules.md#spacingvaluetype)  }  } |
| `default.margin?` | { `bottom?`: [`SpacingValueType`](modules.md#spacingvaluetype) ; `top?`: [`SpacingValueType`](modules.md#spacingvaluetype)  } |
| `default.margin.bottom?` | [`SpacingValueType`](modules.md#spacingvaluetype) |
| `default.margin.top?` | [`SpacingValueType`](modules.md#spacingvaluetype) |
| `default.padding?` | { `bottom?`: [`SpacingValueType`](modules.md#spacingvaluetype) ; `left?`: [`SpacingValueType`](modules.md#spacingvaluetype) ; `right?`: [`SpacingValueType`](modules.md#spacingvaluetype) ; `top?`: [`SpacingValueType`](modules.md#spacingvaluetype)  } |
| `default.padding.bottom?` | [`SpacingValueType`](modules.md#spacingvaluetype) |
| `default.padding.left?` | [`SpacingValueType`](modules.md#spacingvaluetype) |
| `default.padding.right?` | [`SpacingValueType`](modules.md#spacingvaluetype) |
| `default.padding.top?` | [`SpacingValueType`](modules.md#spacingvaluetype) |
| `type` | ``"spacing"`` |

#### Defined in

fieldTypes.ts:441

___

### SpacingValueType

Ƭ **SpacingValueType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `units` | [`CssUnit`](modules.md#cssunit) |
| `value` | `string` |

#### Defined in

fieldTypes.ts:437

___

### SurveyFieldType

Ƭ **SurveyFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `id?`: `string` ; `survey_type?`: ``"CES"`` \| ``"CSAT"`` \| ``"NPS"``  } |
| `default.id?` | `string` |
| `default.survey_type?` | ``"CES"`` \| ``"CSAT"`` \| ``"NPS"`` |
| `placeholder?` | `string` |
| `type` | ``"survey"`` |

#### Defined in

fieldTypes.ts:456

___

### TagFieldType

Ƭ **TagFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `string` \| `number` \| { `id`: `string` ; `name`: `string` ; `slug`: `string`  } |
| `tag_value` | ``"SLUG"`` \| ``"NAME"`` \| ``"ID"`` \| ``"ALL"`` |
| `type` | ``"tag"`` |

#### Defined in

fieldTypes.ts:464

___

### TextAlignmentFieldType

Ƭ **TextAlignmentFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `text_align?`: ``"LEFT"`` \| ``"CENTER"`` \| ``"RIGHT"`` \| ``"JUSTIFY"``  } |
| `default.text_align?` | ``"LEFT"`` \| ``"CENTER"`` \| ``"RIGHT"`` \| ``"JUSTIFY"`` |
| `type` | ``"textalignment"`` |

#### Defined in

fieldTypes.ts:483

___

### TextFieldType

Ƭ **TextFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allow_new_line?` | `boolean` |
| `default?` | `string` |
| `show_emoji_picker?` | `boolean` |
| `type` | ``"text"`` |
| `validation_regex?` | `string` |

#### Defined in

fieldTypes.ts:476

___

### UrlFieldType

Ƭ **UrlFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `content_id?`: `number` ; `href?`: `string` ; `supported_types?`: [`UrlTypes`](modules.md#urltypes)[] ; `type?`: [`UrlTypes`](modules.md#urltypes)  } |
| `default.content_id?` | `number` |
| `default.href?` | `string` |
| `default.supported_types?` | [`UrlTypes`](modules.md#urltypes)[] |
| `default.type?` | [`UrlTypes`](modules.md#urltypes) |
| `supported_types` | [`UrlTypes`](modules.md#urltypes) |
| `type` | ``"url"`` |

#### Defined in

fieldTypes.ts:495

___

### UrlTypes

Ƭ **UrlTypes**: ``"EXTERNAL"`` \| ``"CONTENT"`` \| ``"FILE"`` \| ``"EMAIL_ADDRESS"`` \| ``"BLOG"``

#### Defined in

fieldTypes.ts:489

___

### VideoFieldType

Ƭ **VideoFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | { `autoplay?`: `boolean` ; `conversion_asset?`: `any` ; `height?`: `number` ; `hide_controls?`: `boolean` ; `loop_video?`: `boolean` ; `max_height?`: `number` ; `max_width?`: `number` ; `mute_by_default?`: `boolean` ; `player_id?`: `number` ; `player_type?`: `string` ; `size_type?`: ``"exact"`` \| ``"auto"`` \| ``"auto_custom_max"`` \| ``"auto_full_width"`` ; `width?`: `number`  } |
| `default.autoplay?` | `boolean` |
| `default.conversion_asset?` | `any` |
| `default.height?` | `number` |
| `default.hide_controls?` | `boolean` |
| `default.loop_video?` | `boolean` |
| `default.max_height?` | `number` |
| `default.max_width?` | `number` |
| `default.mute_by_default?` | `boolean` |
| `default.player_id?` | `number` |
| `default.player_type?` | `string` |
| `default.size_type?` | ``"exact"`` \| ``"auto"`` \| ``"auto_custom_max"`` \| ``"auto_full_width"`` |
| `default.width?` | `number` |
| `type` | ``"videoplayer"`` |

#### Defined in

fieldTypes.ts:505

___

### WorkflowFieldType

Ƭ **WorkflowFieldType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `number` |
| `type` | ``"workflow"`` |

#### Defined in

fieldTypes.ts:522
