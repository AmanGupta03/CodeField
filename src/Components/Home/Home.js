import React, { Component, Fragment } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardCollection from '../CardCollection/CardCollection';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <div className="cards-container">
          <CardCollection />
        </div> 
        <Footer/>
      </Fragment>
    );
  }
}

export default Home;