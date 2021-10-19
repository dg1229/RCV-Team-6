
import React from 'react';

import QuestionIcon from '../../assets/question.png';
import LanguageIcon from '../../assets/united-states.png';


const reviewButton = {
  backgroundColor: "#2A64F5",
  height: "69px",
  width: "221px",
  color: "white",
  border: "none",
  fontSize: "16px",
  fontFamily: '"IBM Plex Mono", monospace',
  float: "right",
  marginTop: "2.5%",
  marginRight: "5%"
}

const resetChoice = {
  backgroundColor: "transparent",
  border: "none",
  fontSize: "16px",
  fontFamily: '"IBM Plex Mono", monospace',
  color: "#2A64F5",
  float: "right",
  marginTop: "4%",
  marginRight: "6%"
}

const helpButton = {
  backgroundColor: "transparent",
  border: "none",
  fontSize: "16px",
  fontFamily: '"IBM Plex Mono", monospace',
  float: "left",
  marginTop: "4%",
  marginLeft: "4%"
}

const languageButton = {
  backgroundColor: "transparent",
  border: "none",
  fontSize: "16px",
  fontFamily: '"IBM Plex Mono", monospace',
  float: "left",
  marginTop: "4%",
  marginLeft: "5%"
}

const footerStyle ={ 
  backgroundColor: '#D6D8D9', 
  height: '150px',
  marginBottom: '0px',
  position: 'absolute',
  width: '100vw',
  bottom: '0%',
  background: '#F4F4F4'
  
}

const castButton = {
  backgroundColor: "#2A64F5",
  display: "inline-block",
  height: "69px",
  width: "221px",
  color: "white",
  border: "none",
  fontSize: "16px",
  fontFamily: '"IBM Plex Mono", monospace',
  marginTop: "2.5%",
}

const editButton = {
  backgroundColor: "transparent",
  display: "inline-block",
  border: "none",
  fontSize: "16px",
  fontFamily: '"IBM Plex Mono", monospace',
  color: "#2A64F5",
  marginTop: "4%",
  marginRight: "4%"
}


function Footer(props) {


    if(props.page === 'create') {
        
        return (
      <footer style={footerStyle}>
        <button style={helpButton}><img src={QuestionIcon} alt='question icon'/> HELP</button>
        <button style={languageButton}><img src={LanguageIcon} alt='language icon'/> ENGLISH</button>
        <button style={reviewButton}>REVIEW &#8594;</button>
        <button style={resetChoice}>RESET ALL CHOICES</button>
      </footer>
        ) 

      
    }else if( props.page === 'review'){
        return (

            <footer style={{height: '150px'}}>
        <button style={editButton}>RETURN TO EDIT</button>
        <button style={castButton}>CAST YOUR BALLOT</button>
      </footer> 

        )
    }else if(props.page === 'submit'){
        return ('');
    }
}

export default Footer;

