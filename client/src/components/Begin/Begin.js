import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const tapToBeginStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor:'white',
    color: 'black'

}

const Begin = () => {
    let history = useHistory();

    const beginClick = () => {
      history.push("/create");
    }

    return (
        <div style={tapToBeginStyle} onClick={beginClick}>
            <img src="/Videos/Idle Animation.gif" alt="touch to begin"/>
            {/* <h1 style={{margin: 'auto', width:'50%',lineHeight:'90vh',textAlign:'center'}}>   Tap to begin     </h1> */}
        </div>
    );
};


export default Begin;
