import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import {
  useIsServerRender,
  usePageUrl,
  useBasePath,
} from '@hubspot/cms-components';

import Home from '../Home.js';
import About from '../About.js';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

const App = () => {
  const isServerRender = useIsServerRender();
  const pageUrl = usePageUrl();
  const basePath = useBasePath();

  console.log(basePath);
  console.log(pageUrl);

  let app;

  if (isServerRender) {
    app = (
      <StaticRouter basename={basePath} location={pageUrl.pathname}>
        <AppRoutes />
      </StaticRouter>
    );
  } else {
    app = (
      <BrowserRouter basename={basePath}>
        <AppRoutes />
      </BrowserRouter>
    );
  }

  return app;
};

export default App;
