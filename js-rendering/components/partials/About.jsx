// http://883342099.hs-sitesqa.com.localhost:3000/partial/About
import { IslandRoot } from '@hubspot/cms-components';
import Button from '../islands/Button?island';

function About() {
  return (
    <>
      <div>All About Me...</div>
      <IslandRoot
        lazyModule={Button}
        hydateOn="load"
      ></IslandRoot>
      <IslandRoot
        lazyModule={Button}
        hydateOn="load"
      ></IslandRoot>
      <a href="./Home.jsx">Home.</a>
    </>
  )
}

export default About;
