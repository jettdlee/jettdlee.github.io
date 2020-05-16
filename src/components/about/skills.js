import React from 'react';
import AboutImages from '../partials/AboutImages';
import NamedItem from './NamedItem';
import { LaptopCodeIcon } from '../../helpers/IconHelper';

function Skills() {
  return (
    <div id="skills">
      <div>
        <div className="skill-img">
          <NamedItem text="Skills"><LaptopCodeIcon /></NamedItem>
          <AboutImages imageId="rails" srcPath="/images/skills/rails.png" alt="" />
          <AboutImages imageId="ruby" srcPath="/images/skills/ruby.png" alt="" />
          <AboutImages imageId="python" srcPath="/images/skills/python.png" alt="" />
          <AboutImages imageId="javascript" srcPath="/images/skills/javascript.png" alt="" />
          <AboutImages imageId="html5" srcPath="/images/skills/html5.svg" alt="" />
          <AboutImages imageId="java" srcPath="/images/skills/java.png" alt="" />
          <AboutImages imageId="react" srcPath="/images/skills/react.png" alt="" />
          <AboutImages imageId="sql" srcPath="/images/skills/sql.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Skills;