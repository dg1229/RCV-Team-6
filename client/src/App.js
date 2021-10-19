import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ballot from './components/Ballot/Ballot';
import Review from './components/Review/Review';
import Submit from './components/Submit/Submit';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact render={() => (<Ballot />)} />
          <Route path='/create' exact render={() => (<Ballot />)} />
          <Route path='/review' exact render={() => (<Review />)} />
          <Route path='/submit' exact render={()=>(<Submit />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
