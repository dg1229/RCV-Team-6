import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ballot from './components/Ballot/Ballot';
import Review from './components/Review/Review';
import Submit from './components/Submit/Submit';
import Begin from './components/Begin/Begin'
import Footer from './components/Footer/Footer';
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


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const [firstChoice, setFirst] = React.useState(false);
const [secondChoice, setSecond] = React.useState(false);
const [thirdChoice, setThird] = React.useState(false);
const [fourthChoice, setFourth] = React.useState(false);
const [fifthChoice, setFifth] = React.useState(false);

function changeFirst(candidate) {
  if(candidate){setFirst(candidate.content);}
}

function changeSecond(candidate){
  if(candidate){setSecond(candidate.content);}
}

function changeThird(candidate){
  if(candidate){setThird(candidate.content);}
}

function changeFourth(candidate){
  if(candidate){setFourth(candidate.content);}
}

function changeFifth(candidate){
  if(candidate){setFifth(candidate.content);}
}


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact render={() => (<Begin />)} />
          <Route path='/create' exact render={() => (<Ballot changeFirst={changeFirst} changeSecond={changeSecond} changeThird={changeThird} changeFourth={changeFourth} changeFifth={changeFifth} />)} />
          <Route path='/review' exact render={() => (<Review first={firstChoice} second={secondChoice} third={thirdChoice} fourth={fourthChoice} fifth={fifthChoice} />)} />
          <Route path='/submit' exact render={()=>(<Submit />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
