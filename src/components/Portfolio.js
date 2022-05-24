import React from 'react';
import SectionHeader from './partials/SectionHeader';
import PortfolioProject from './portfolio/Project';
import '../styles/Portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio">
        <SectionHeader headerText="Portfolio" />
        {/* Project
        CPR Metron
        Machine Learning Stuff */}
        <div className="projects">
          <PortfolioProject itemTitle="Touching to See" imageSource="/images/portfolio/cabin.png">
            Touch me
          </PortfolioProject>
          <PortfolioProject itemTitle="CPR Metron" imageSource="/images/portfolio/cake.png">
            CPR
          </PortfolioProject>
        </div>
      </section>
    )
  }
}

export default Portfolio;
