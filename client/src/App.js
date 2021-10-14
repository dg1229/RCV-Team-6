import './App.css';
import React from 'react';
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator';

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
    </div>
  );
}

export default App;
