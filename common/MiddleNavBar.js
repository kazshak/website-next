// import React from 'react';
// import { Link, Link } from 'react-router-dom';
import Link from 'next/link';

// import './middleNavBar.css';

const MiddleNavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" style={{marginTop: "0"}}>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#middleNavBar" aria-controls="middleNavBar" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="middleNavBar">
                <div className="mr-auto ml-auto">
                    <div className="btn-group">
                        <button className="btn btn-primary dropdown-toggle mr-2" type="button" id="selling" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Selling A House</button>
                        <div className="dropdown-menu bg-light" aria-labelledby="selling">
                            <Link href="/about" ><a className="dropdown-item">Why choose us?</a></Link>
                            <Link href="/pricing" ><a className="dropdown-item">Pricing Options</a></Link>
                            <a className="dropdown-item" href="#">What's the value of your home?</a>
                            <Link href="/prepareToSell"><a className="dropdown-item">Preparing to sell</a></Link>
                            <Link href="/contactUs"><a className="dropdown-item">Contact Us</a></Link>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-primary dropdown-toggle mr-2" type="button" id="buying" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buying A House</button>
                        <div className="dropdown-menu bg-light" aria-labelledby="buying">
                            <Link href="/about"><a className="dropdown-item">Why choose us?</a></Link>
                            <Link href="/pricing"><a className="dropdown-item">Pricing Options</a></Link>
                            <Link href="/howToBuy"><a className="dropdown-item">How to buy a house</a></Link>
                            <Link href="/contactUs"><a className="dropdown-item">Contact Us</a></Link>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-primary dropdown-toggle mr-2" type="button" id="search" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search Properties</button>
                        <div className="dropdown-menu bg-light" aria-labelledby="search">
                            <a className="dropdown-item" href="#">Featured Listings</a>
                            <a className="dropdown-item" href="#">Search The MLS</a>
                        </div>
                    </div>
                    
                    <Link href="/faq">
                        <button className="btn btn-primary mr-2" type="button" href="#">FAQ</button>
                    </Link>
                    
                    <Link href="/contactUs">
                        <button className="btn btn-primary" type="button" href="#">Contact Us</button>
                    </Link>
                    
                </div>
            </div>
            <style jsx>{`
                #middleNavBar .btn {
                    font-weight: 400;
                }
            `}</style>
        </nav>
    );
};

export default MiddleNavBar;