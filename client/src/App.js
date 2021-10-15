import './App.css';
import React from 'react';
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator';
import Ballot from './components/Ballot/Ballot';


const reviewButton = {
  backgroundColor: "#2A64F5",
  height: "69px",
  width: "221px",
  color: "white",
  border: "none",
  fontSize: "16pt",
  fontFamily: '"IBM Plex Mono", monospace',
  float: "right",
  marginTop: "2.5%",
  marginRight: "5%"
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
      <footer style={{backgroundColor:'#D6D8D9', height: '150px'}}>
        <button style={reviewButton}>REVIEW &#8594;</button>
      </footer>
    </div>
  );
}

export default App;
