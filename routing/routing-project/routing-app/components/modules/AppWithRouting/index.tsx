import { Island } from '@hubspot/cms-components';

import App from '../../islands/App.js?island';

export { fields } from './Fields.js';

export const meta = {
  label: 'App With Routing',
};

export const Component = () => {
  return <Island id="app" module={App} />;
};
