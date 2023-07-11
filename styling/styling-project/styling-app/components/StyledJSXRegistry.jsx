import { StyleRegistry, useStyleRegistry } from 'styled-jsx';
import { useServerInsertedHtml } from '@hubspot/cms-components';

function InsertHTML() {
  const registry = useStyleRegistry();
  useServerInsertedHtml(() => {
    const styles = registry.styles();
    return <>{styles}</>;
  });
}

export default function StyledJSXRegistry({ children }) {
  return (
    <StyleRegistry>
      <InsertHTML />
      {children}
    </StyleRegistry>
  );
}
