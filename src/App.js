import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Indexpage from './components/Indexpage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/signup" component={Register}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Home" component={Indexpage}></Route>
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
