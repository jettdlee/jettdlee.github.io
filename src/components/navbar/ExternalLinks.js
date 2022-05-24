import React from 'react';
import ExternalLinkIcon from './ExternalLinkIcon';
import { LinkedInIcon, TwitterIcon, GithubIcon } from '../../helpers/IconHelper';

function ExternalLinks() {
  return (
    <React.Fragment>
      <ExternalLinkIcon externalLink="https://www.linkedin.com/in/jet-tsyn-lee/">
        <LinkedInIcon />
      </ExternalLinkIcon>
      <ExternalLinkIcon externalLink="https://twitter.com/jettdlee">
        <TwitterIcon />
      </ExternalLinkIcon>
      <ExternalLinkIcon externalLink="https://github.com/jettdlee">
        <GithubIcon />
      </ExternalLinkIcon>
    </React.Fragment>
  );
}

export default ExternalLinks;
