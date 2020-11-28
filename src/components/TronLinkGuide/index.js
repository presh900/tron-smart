import React from 'react';


import './TronLinkGuide.scss';

const WEBSTORE_URL = 'https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/';



const openTronLink = () => {
    window.open(WEBSTORE_URL, '_blank');
};

const TronLinkGuide = props => {
    const {
        installed = false
    } = props;

    if(!installed) {
        return (
            <div className='tronLink' onClick={ openTronLink }>
                <div className='info'>
                    <h6>TronLink or  Tron Browser  Required  </h6>

                </div>
            </div>
        );
    }

    return (
        <div className='tronLink hover' onClick={ openTronLink }>
            <div className='info'>
                <h6>Log in Required</h6>
                
            </div>
            
        </div>
    );
};

export default TronLinkGuide;