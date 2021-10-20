import React, { useState } from 'react';

import Footer from '../Footer/Footer';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import VotedImage from '../../assets/voting-image.png';

const centerImage = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    width: "17%"
}

const mainText = {
    textAlign: "center",
    fontFamily: '"IBM Plex Mono", monospace',
    fontSize: '50px',
    marginLeft: '2%',
    marginBottom: '0%'
}

const paraText = {
    textAlign: "center",
    fontFamily: '"IBM Plex Mono", monospace',
    marginLeft: '2%'
}


const Submit = () => {
    return (
        <div >
            <ProgressIndicator completed="100" />
            <div>
                <img src={VotedImage} style={centerImage} alt='Voted Image'/>
                <h2 style={mainText}>SUCCESS!</h2>
                <p style={paraText}>YOUR BALLOT HAS BEEN CAST</p>
            </div>
            <Footer page={'submit'}  ></Footer>

        </div>
    );
};

export default Submit;
