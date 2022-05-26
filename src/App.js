// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBAr from './components/navbar';
import Body from './components/body';
import { BrowserRouter as Router, Switch,Routes, Redirect,} from "react-router-dom";
import Portfolio from './components/portfolio';

function App() {
  return (
  
    <div className="App">
      <Router>
        <switch>
        <Routes exact path="/portfolio" component={Portfolio} />
          
        </switch>
      </Router>
      <NavBAr></NavBAr>
      <Body></Body>


     
    </div>
  );
}

export default App;
