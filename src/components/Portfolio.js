import React from 'react';
import SectionHeader from './partials/SectionHeader';
import PortfolioProject from './portfolio/Project';
import '../styles/Portfolio.css';
import { Button } from 'react-bootstrap';

class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio">
        <SectionHeader headerText="Portfolio" />
        {/* Project
        CPR Metron
        Machine Learning Stuff */}
        <div className="projects">
          <PortfolioProject itemTitle="Touching to See" imageSource="/images/portfolio/cabin.png" projectLink="https://github.com/jettdlee/vis_tac_cross_modal">
      Implementation of a Conditional Generative Adversarial Network for learning the cross-modal interaction between a visual and tactile perspective. This adapts images from the ViTac Dataset consisting of fabric materials captured from a camera as a visual perspective and a GelSight sensor as the tactile perspective. we propose a novel framework for the cross-modal sensory data generation for visual and tactile perception. Taking texture perception as an example, we apply conditional generative adversarial networks to generate pseudo visual images or tactile outputs from data of the other modality.
          </PortfolioProject>
          <PortfolioProject itemTitle="CPR Metron" imageSource="/images/portfolio/cake.png" projectLink="https://github.com/jettdlee/GarminCPRApp">
            CPR
          </PortfolioProject>
        </div>
      </section>
    )
  }
}

export default Portfolio;
