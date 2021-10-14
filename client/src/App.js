import './App.css';
import React from 'react';
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator';
import Ballot from './components/Ballot/Ballot';

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
      <footer style={{backgroundColor:'#D6D8D9', height: '150px'}}></footer>
    </div>
  );
}

export default App;
