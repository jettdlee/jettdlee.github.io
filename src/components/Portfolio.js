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
        <div>
          <PortfolioProject itemText="Project"/>
        </div>
      </section>
    )
  }
}

export default Portfolio;
