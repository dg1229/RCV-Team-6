import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator';

function App() {
  const [data, setData] = React.useState(null);
  
  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
        </p>
        {testData.map((item, idx) => (
          <ProgressIndicator key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))};
      </header>
    </div>
  );
}

export default App;
