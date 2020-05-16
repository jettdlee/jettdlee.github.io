import React from 'react';
import AboutImages from '../partials/AboutImages';
import NamedItem from './NamedItem';
import { ToolsIcon } from '../../helpers/IconHelper';

function Tools() {
  return (
    <div id="tools">
      <div>
        <div className="tools">
          <NamedItem text="Tools"><ToolsIcon /></NamedItem>
          <AboutImages imageId='git' srcPath="/images/tools/git.png" alt="Git" />
          <AboutImages imageId="vim" srcPath="/images/tools/vim.png" alt="Vim" />
          <AboutImages imageId="bitbucket" srcPath="/images/tools/bitbucket.svg" alt="BitBucket" />
          <AboutImages imageId="jira" srcPath="/images/tools/jira.svg" alt="Jira" />
          <AboutImages imageId="mysql" srcPath="/images/tools/mysql.png" alt="MySql" />
          <AboutImages imageId="postman" srcPath="/images/tools/postman.png" alt="Postman" />
        </div>
      </div>
    </div>
  )
}

export default Tools;