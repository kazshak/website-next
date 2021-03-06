import React from 'react';

// import './InfoSection.css';

const InfoSection = (props) => {
    return (
        <div className="col-lg-9 bg-white p-5">
            {props.text}
            <style jsx>{`
                h2 {
                    font-size: 2rem;
                    color: #5B5B5B;
                    font-family: Arial, Helvetica, sans-serif;
                    letter-spacing: -1px;
                    padding-bottom: 15px;
                }
                
                h3 {
                    display: block;
                    font-size: 1.17rem;
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    font-weight: bold;
                    color: #5B5B5B;
                    font-family: Arial, Helvetica, sans-serif;
                    margin-top: 18px;
                    margin-bottom: 18px;
                }
                
                p {
                    font-size: 14px;
                    color: #5B5B5B;
                    font-family: Arial, Helvetica, sans-serif;
                    display: block;
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    margin-top: 14px;
                    margin-bottom: 14px;
                }
            `}</style>
        </div>
    );
};

export default InfoSection;