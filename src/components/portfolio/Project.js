import React from 'react';
import ProjectItem from './ProjectItem';
import ProjectModal from './ProjectModal';

function PortfolioProject(props) {
  const [modalShow, setModalShow] = React.useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  return (
    <>
    <ProjectItem itemText="Project" imageSrc="/images/portfolio/cabin.png" onClick={handleShow} />
    <ProjectModal show={modalShow} onHide={handleClose} />
    </>
  )
}

export default PortfolioProject;