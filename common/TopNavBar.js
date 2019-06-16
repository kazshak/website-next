// import React from 'react';
// import { Link, Link } from 'react-router-dom';
import Link from 'next/link';

const TopNavBar = (props) => {
    const activeStyle = { color: "white" };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand"><img src={props.logo} alt="iList Realty" height="75"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#topNavBar" aria-controls="topNavBar" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav-pills" id="topNavBar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link href="/"><a className="nav-link" activeStyle={activeStyle}>Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/faq"><a className="nav-link" activeStyle={activeStyle}>FAQ</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link" activeStyle={activeStyle}>About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/pricing"><a className="nav-link" activeStyle={activeStyle}>Pricing Options</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/featured"><a className="nav-link" activeStyle={activeStyle}>Featured Listings</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default TopNavBar;

