
# @hubspot/cms-dev-server

`@hubspot/cms-dev-server` is a package that allows users to start an Express + Vite dev server enabling an auto-reloading local development workflow that is nearly identical to your deployed components. The `cms-dev-server` also enables rendering local versions of your components on live CMS pages to aid in development.

Users can start the cms-dev-server by running `hs-cms-dev-server /path/to/components-directory` in a project that has `@hubspot/cms-dev-server` installed.

For example, a CMS page with JS rendered components “https://cmssite.com/page" would be accessible by visiting one of:

- http://cmssite.com.hslocal.net:3000/page
- http://cmssite.com.localhost:3000/page

Or by visiting http://hslocal.net:3000/proxy and pasting in the page you want to proxy.

Similar to how previewing a page from the page editor works, you can force the page to render with the context of a contact by passing an `email` parameter. For example `http://cmssite.com.hslocal.net:3000/page?email=bh@hubspot.com` will cause the contact object to be populated based on the email parameter value.

You may also start the dev server with the `--ssl` option, which enables:

- https://cmssite.com.hslocal.net:3000/page
- https://cmssite.com.localhost:3000/page
