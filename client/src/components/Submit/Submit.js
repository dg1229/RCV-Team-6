import React from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../Footer/Footer';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';

const centerVideo = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    textAlign: "center",
    width: "17%"
}

const mainText = {
    textAlign: "center",
    fontFamily: '"IBM Plex Mono", monospace',
    fontSize: '50px',
    marginBottom: '0%'
}

const paraText = {
    textAlign: "center",
    fontFamily: '"IBM Plex Mono", monospace'
}


const Submit = () => {

    const history = useHistory()
      setTimeout(() => {
        history.push('/')
      }, 15000)

    return (
        <div >
            <ProgressIndicator completed="100" />
            <div>
                <video autoplay="autoplay" muted="muted" style={centerVideo}>
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
