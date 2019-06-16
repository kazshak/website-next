// import './bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/js/bootstrap.bundle.js'
// import React from 'react';
//import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'

// import './index.css';
import Head from 'next/head';

import logo from '../common/images/Logo_Big.gif';
import TopNavBar from '../common/TopNavBar';
import Jumbotron from '../common/Jumbotron';
import MiddleNavBar from '../common/MiddleNavBar';
import MainPage from './main_page/MainPage';

// import * as serviceWorker from './serviceWorker';

const Index = (props) => {
    return(
        <div className="container-fluid bg-secondary">
            <Head>
                <meta charset="utf-8" />
                <link rel="shortcut icon" href={logo} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="../static/bootstrap.min.css"></link>
                <title>iList Realty LLC</title>
            </Head>
            <div className="col-lg-8 offset-lg-2 col-fluid">
                <TopNavBar logo={logo} />
                <Jumbotron />
                <MiddleNavBar />
                <MainPage logo={logo} />
            </div>
        </div>
    );
};

// serviceWorker.unregister();

export default Index;
