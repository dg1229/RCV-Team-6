import React, { useState } from 'react';

import Footer from '../Footer/Footer';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';

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
                <video controls>
                  <source src="/Videos/Ballot_Confirmation.mp4" type="video/mp4"></source>
                </video>
                <h2 style={mainText}>SUCCESS!</h2>
                <p style={paraText}>YOUR BALLOT HAS BEEN CAST</p>
            </div>
            <Footer page={'submit'}  ></Footer>

        </div>
    );
};

export default Submit;
