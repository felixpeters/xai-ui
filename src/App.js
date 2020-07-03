import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Survival from './Survival';
import './App.css';

const App = () => {

  return (
      <Router>
        <header class="bg-gray-900 flex justify-between items-center px-4 py-3">
          <div class="text-white text-3xl font-medium">
            <img src="./fpc_logo.png" class="h-20" alt=""/>
          </div>
          <nav className="flex">
            <Link to="/" className="text-lg text-white rounded px-2 py-1 hover:bg-gray-800">Home</Link>
            <Link to="/survival" className="text-lg text-white rounded px-2 py-1 hover:bg-gray-800">Survival Analysis</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/survival">
            <Survival />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer class="bg-gray-900 flex flex-col md:flex-row md:justify-between items-center px-4 py-3">
          <div class="text-white text-sm font-thin">Social icons</div>
          <div class="text-white text-sm font-thin">&copy; 2020 by Felix Peters. All rights reserved.</div>
        </footer>
      </Router>
  );
}

export default App;
