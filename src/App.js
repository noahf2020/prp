
import './App.css';
import Home from './Pages/Home'
import Header from './component/Header/Header'
import Portfolio from './Pages/Portfolio';
import  Portal  from './Pages/Portal';
import Articles from './Pages/Articles';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
  <Router>
    <Header />

    
            <Home />
  
  </Router>
  );
}

export default App;
