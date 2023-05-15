import { useState, CSSProperties } from 'react';
import { useIsAfterHydrationMount } from '@hubspot/cms-components';
import { Header } from '@hubspot/cms-components/modules';
import {
  button as buttonClass,
  hydrated as hydratedClass,
  hydrationText as hyrdationTextClass,
} from './ButtonCounter.module.css';

// Note changing ^ to `import classes from './ButtonCounter.module.css'` does _not_ work right now.
// It fails with an error around default not being exported, but only in RTP (something with a production
// build and the too basic `empty-css-imports` plugin in `resolveModulesPlugin.ts`?)

type ButtonCounterProps = {
  defaultCount: number;
  style: CSSProperties;
};

type DisabledProps = {
  disabled?: boolean;
};

const ButtonCounter = (props: ButtonCounterProps) => {
  const { defaultCount = 0, style } = props;
  const [count, setCount] = useState(defaultCount);
  const afterHydration = useIsAfterHydrationMount();

  let disabledProps: DisabledProps = { disabled: true };

  if (afterHydration) {
    disabledProps = {};
  }

  return (
    <>
      <Header headerContent="This is a Button!" headingLevel={3} />
      <p className={afterHydration ? hydratedClass : ''} style={style}>
        <button
          type="button"
          className={buttonClass}
          onClick={() => setCount((count) => count + 1)}
          {...disabledProps}
        >
          count is: {count}
        </button>
        <span className={hyrdationTextClass}>hydrated</span>
      </p>
    </>
  );
};

export default ButtonCounter;
