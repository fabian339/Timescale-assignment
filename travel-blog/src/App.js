import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Nav'
import Footer from './components/layout/Footer'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'

import './App.scss';

//For this assignment, I divided the code in section for modularity. 

function App() {
  console.log()
  return (
    //router that allows route changing
    <Router>
        <Navbar />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/" component={Home} />
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;
