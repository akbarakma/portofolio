import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import { getMessage } from './store/action/messageAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessage());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
