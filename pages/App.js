// import React from 'react';
// import { Route } from 'react-router-dom';
// import './App.css';
import logo from './images/Logo_Big.gif';
import TopNavBar from '../common/TopNavBar';
import Jumbotron from '../common/Jumbotron';
import MiddleNavBar from '../common/MiddleNavBar';
import MainPage from './main_page/MainPage';
import FaqPage from './faq';
import AboutPage from './about_page/AboutPage';
import PricingPage from './pricing_page/PricingPage';
import PrepareToSellPage from './prepToSellPage/PrepareToSellPage';
import HowToBuyPage from './how_to_buy_page/HowToBuyPage';
import ContactPage from './contact_us_page/ContactPage';

function App() {
  return (
    <div className="container-fluid bg-secondary">
        <div className="col-lg-8 offset-lg-2 col-fluid">
          <TopNavBar logo={logo} />
          <Jumbotron />
          <MiddleNavBar />
        </div>
    </div>
  );
}

export default App;
