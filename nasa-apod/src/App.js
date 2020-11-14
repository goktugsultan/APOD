import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './components/Home'
import Detail from './components/Detail'

import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={Detail} />
      </Switch>
    </Router>
    
  );
}

export default App;
