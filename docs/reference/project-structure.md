## Project Structure

This is the top-level structure to be used for JS rendering projects:

```
project-folder/
│
├── js-package/
│   ├── components/
│   │   ├── partials/
│   │   └── modules/
│   ├── cms-assets.json
│   └── package.json
│
├── … optionally other project components …
│
└── hsproject.json
```

A `hsproject.json` file must be inside the root of your project folder in order for `hs project upload` to recognize your project. A `cms-assets.json` file must be inside of your JavaScript asset package subfolder so that the project build can recognize and correctly build your JS components.

This JS building blocks beta introduces the “CMS assets” project component alongside private apps, CRM extensions, and serverless functions. To learn more about HubSpot projects, you can check out the [projects beta documentation](https://developers.hubspot.com/docs/platform/build-and-deploy-using-hubspot-projects).

The examples in this repo have both a "CMS Assets" project component and a "HubL Theme" within them. This is done to illustrate one way a developer might organize code. That said a "HubL Theme" and a "CMS Asset Project Component" are two different things in HubSpot and currently there nothing that couples them. We have a `package.json`, `.eslintrc.js`, `prettierrc` at the same level as the "HubL Theme" and "CMS Assets Project Component" as a convenience. We leverage that structure to have helpful scripts in the examples' `package.json`.
