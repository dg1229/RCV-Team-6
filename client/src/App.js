import './App.css';
import React from 'react';
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator';
import Ballot from './components/Ballot/Ballot';
import QuestionIcon from './assets/question.png';
import LanguageIcon from './assets/united-states.png';


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

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
      <ProgressIndicator completed="50" />
      <Ballot />
      <footer style={{ backgroundColor: '#D6D8D9', height: '150px' }}>
        <button style={helpButton}><img src={QuestionIcon} alt='question icon'/> HELP</button>
        <button style={languageButton}><img src={LanguageIcon} alt='language icon'/> ENGLISH</button>
        <button style={reviewButton}>REVIEW &#8594;</button>
        <button style={resetChoice}>RESET ALL CHOICES</button>
      </footer>
    </div>
  );
}

export default App;
