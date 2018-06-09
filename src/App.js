import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./routes";
import routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gajes Project :
            react-mini-4
          </h1>
        </header>
        
          <div className="link-container">
        <Link to="/">
          <p>Route 1</p>
        </Link>

        <Link to="/2">
          <p>Route 2</p>
        </Link>

        <Link to="/3">
          <p>Route 3</p>
        </Link>
          {routes}        

          </div>

      </div>
    );
  }
}

export default App;
