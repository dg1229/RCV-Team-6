import React from 'react';
import PropTypes from 'prop-types';

const contentStyles = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: '"IBM Plex Mono", monospace'
}

const Submit = () => (
  <div style={contentStyles}>
    <video controls>
    <source src="/Videos/Ballot_Confirmation.mp4" type="video/mp4"></source>
    Sorry, your browser doesn't support embedded videos.
    </video>
  
    <div><b>SUCCESS!</b></div>
    <div>YOUR BALLOT HAS BEEN CAST</div>
    </div>
);

Submit.propTypes = {};

Submit.defaultProps = {};

export default Submit;
