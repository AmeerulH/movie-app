import './App.css';
import Nav from './components/Navbar'
import Home from './pages/Home/Home'
import Details from './pages/Detail/Detail'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/details' component={Details} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
