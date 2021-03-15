import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar'
import Home from './pages/home'
import Details from './pages/detail'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      </Router>
      <Home />
    </div>
  );
}

export default App;
