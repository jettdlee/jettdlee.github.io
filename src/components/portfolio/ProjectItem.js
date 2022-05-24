import React from 'react';
import { EllipsisVIcon } from '../../helpers/IconHelper';
import { Image } from 'react-bootstrap';

function ProjectItem(props) {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item-caption" onClick={props.onClick}>
        <div className="portfolio-item-caption-content">
          <div className="portfolio-item-text">
            {props.itemTitle}
          </div>
          <div className="portfolio-item-summary">
            {props.children}
          </div>
        </div>
        <div className="portfolio-item-icon">
          <EllipsisVIcon extraClasses="fa-2x" />
        </div>
      </div>
      <Image className="portfolio-item-image" src={props.imageSource} alt="" />
    </div>
  );
}

export default ProjectItem;
