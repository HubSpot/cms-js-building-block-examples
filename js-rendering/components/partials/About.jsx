import { IslandRoot } from '@hubspot/cms-components';
import Button from '../islands/Button.jsx?island';
import Link from '../Link';

function About() {
  return (
    <>
      <div>All About Me...</div>
      <div className='buttons'>
        <IslandRoot
          lazyModule={Button}
          hydateOn="load"/>
      </div>
      <Link href="./Home.jsx" title="title"/>
    </>
  )
}

export default About;
