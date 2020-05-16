import React from 'react';
import '../styles/MainPage.css';
import Portrait from './mainpage/portrait';
import Header from './mainpage/header';
import SubHeader from './mainpage/subheader';

class MainPage extends React.Component {
  render() {
    return (
      <section>
        <header className="App-header">
          <div className="flex-column">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <Portrait />
              <Header />
            </div>
            <SubHeader />
          </div>
        </header>
      </section>
    )
  }
}

export default MainPage;
