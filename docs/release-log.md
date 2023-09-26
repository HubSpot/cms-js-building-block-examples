# Release Log

## @cms-dev-server@0.10.0

Type: Enhancement

Added `help/--help` command to the development server.

Example usage:

```sh
>hs-cms-dev-server help

              HubSpot CMS Dev Server

Usage: hs-cms-dev-server <path> [options]

Mandatory:
    <path>                  Path to the directory containing your assets.

Options:
    -c, --config            Path to alternate hubspot.config.yaml configuration.
    -a, --account           The account name or id to use for the dev server.
    --ssl                   Enables SSL for the dev server, serving it over an https:// URL.
    --storybook             Launches a Storybook dev server.

For more information on HubSpot CMS JS Rendering, visit:
https://github.hubspot.com/cms-js-building-block-examples/

```

## @cms-components@0.10.0

Type: Bug Fix

Change: Add support for visibility in FieldGroup

---

Type: Bug Fix

Change: Add support for `limits` for the "Spacing" field type.

---

Type: Bug Fix

Change: Add support for `resizable`, `show_advanced_options`, and `show_preview` for the "Video" field type.

---

Type: Enhancement

Change: Added support for `meta.json` icons via file imports

Example usage:

``` javascript
import reactIcon from './react-icon.svg';

export const meta = {
  label: `Module`,
  icon: reactIcon,
};
```
