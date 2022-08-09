// http://883342099.hs-sitesqa.com.localhost:3000/partial/About
import { IslandRoot } from '@hubspot/cms-components';
import Button from '../islands/Button.jsx?island';

function About() {
  return (
    <>
      <div>All About Me...</div>
      <div className='buttons'>
        <Button/>
        <IslandRoot
          lazyModule={Button}
          hydateOn="load"
        ></IslandRoot>
      </div>
      <a href="./Home.jsx">Home.</a>
    </>
  )
}

export default About;
