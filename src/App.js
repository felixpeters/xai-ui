import React, { useState } from 'react';
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

  const [isOpen, toggleOpen] = useState(false);

  return (
      <Router>
        <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
          <div className="flex items-center justify-between px-4 py-3 sm:p-0">
            <div>
              <img src="./fpc_logo.png" className="h-12 sm:h-20" alt="Felix Peters Consulting"/>
            </div>
            <div className="sm:hidden">
              <button onClick={() => toggleOpen(!isOpen)} type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                  {isOpen
                    ? <path path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/> 
                    : <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                  }
                </svg>
              </button>
            </div>
          </div>
          <nav className={`${isOpen ? 'block' : 'hidden'} px-2 pb-4 pt-2 sm:flex sm:p-0`}>
            <Link to="/" className="block text-lg text-white rounded px-2 py-1 hover:bg-gray-800">Home</Link>
            <Link to="/survival" className="block mt-1 text-lg text-white rounded px-2 py-1 hover:bg-gray-800 sm:mt-0">Survival Analysis</Link>
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
        <footer className="bg-gray-900 flex flex-col sm:flex-row sm:justify-between items-center px-4 py-3">
          <div className="text-white text-sm font-thin">Social icons</div>
          <div className="text-white text-sm font-thin">&copy; 2020 by Felix Peters. All rights reserved.</div>
        </footer>
      </Router>
  );
}

export default App;
