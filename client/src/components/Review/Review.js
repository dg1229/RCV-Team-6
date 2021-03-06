import React, { useState } from 'react';
import Ballot from '../Ballot/Ballot';

import Footer from '../Footer/Footer';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';

const Review = (props) => {

  const { first, second, third, fourth, fifth } = props;


  const columnStyles = {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    marginTop: '5%',
    padding: 'auto',
  }

  const ballotStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'left',
    fontFamily: '"IBM Plex Mono", monospace',
    marginTop: "5%"
  }

  const candidateStyles = {
      padding: 16,
      paddingTop: 30,
      paddingLeft: 0,
      height: '12px',
      width: '250px',
      borderBottom: '1px lightgray solid',
      backgroundColor: 'white',
      color: 'black'
  }

  return(
  <div style={columnStyles}>
    <ProgressIndicator completed="50" />
    
    <div style={ballotStyles}>
    <div><b>REVIEW YOUR BALLOT</b></div>
    { first || second || third || fourth || fifth ? null : <div style={candidateStyles}>No Candidates Selected</div>}
    { first ? <div style={candidateStyles}>1. {first}</div> : null }
    { second ? <div style={candidateStyles}>2. {second}</div> : null }
    { third ? <div style={candidateStyles}>3. {third}</div> : null }
    { fourth ? <div style={candidateStyles}>4. {fourth}</div> : null }
    { fifth ? <div style={candidateStyles}>5. {fifth}</div> : null }
    </div>
    <Footer page={'review'}  ></Footer>
  </div>
  );
};


export default Review;
