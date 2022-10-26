import React from 'react';
import ProjectItem from './ProjectItem';
import ProjectModal from './ProjectModal';

function PortfolioProject(props) {
  const [modalShow, setModalShow] = React.useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  return (
    <>
    <ProjectItem itemTitle={props.itemTitle} imageSource={props.imageSource} onClick={handleShow} >
      {props.children}
    </ProjectItem>
    <ProjectModal itemTitle={props.itemTitle} show={modalShow} onHide={handleClose} projectLink={props.projectLink} >
      {props.children}
    </ProjectModal>
    </>
  )
}

export default PortfolioProject;
