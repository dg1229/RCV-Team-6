import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Redirect } from 'react-router-dom';
import QuestionIcon from '../../assets/question.png';
import LanguageIcon from '../../assets/united-states.png';
import Popup from '../Popup/Popup';


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

const footerStyle = {
  backgroundColor: '#D6D8D9',
  height: '150px',
  marginBottom: '0px',
  position: 'absolute',
  width: '100vw',
  bottom: '0%',
  background: '#F4F4F4'
}

const footerStyleReview = {
  height: '150px',
  marginBottom: '0px',
  position: 'absolute',
  width: '100vw',
  bottom: '0%',
  
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
  justifyContent: 'center',
}

const editButton = {
  backgroundColor: "transparent",
  display: "inline-block",
  border: "none",
  fontSize: "16px",
  fontFamily: '"IBM Plex Mono", monospace',
  color: "#2A64F5",
  marginTop: "4%",
  marginRight: "4%",
  marginLeft: '36%'
}

const hideButton = {
  position: "fixed",
  width: "25%",
  marginLeft: "25%"
}


function Footer(props) {
  let history = useHistory();

  const [hide, setHide] = useState(false)

  if (props.page === 'create' || props.page === '') {
    const redirctReview = () => {
      history.push("/review");
    }

    const resetReview = () => {
      history.push("/create");
    }

    const showVideo = () => {
      setHide(true);
      setTimeout(() => {
        setHide(false)
      }, 33000);
    }

    return (
      <footer style={footerStyle}>
        <button style={helpButton}><img src={QuestionIcon} alt='question icon' onClick={showVideo}/> HELP</button>
        {hide ? <Popup /> : null}
        <button style={languageButton}><img src={LanguageIcon} alt='language icon' /> ENGLISH</button>
        <button style={reviewButton} onClick={redirctReview}>REVIEW &#8594;</button>
        <button style={resetChoice} onClick={resetReview}>RESET ALL CHOICES</button>
      </footer>
    )


  } else if (props.page === 'review') {
    const editBallot = () => {
      history.push("/create");
    }

    const castBallot = () => {
      history.push("/submit");
    }

    return (
      <footer style={footerStyleReview}>
        <button style={editButton} onClick={editBallot}>RETURN TO EDIT</button>
        <button style={castButton} onClick={castBallot}>CAST YOUR BALLOT</button>
      </footer>

    )
  } else if (props.page === 'submit') {
    return ('');
  }
}

export default Footer;

