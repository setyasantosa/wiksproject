import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './page/home/Home';
import About from './page/about/About';
import Contact from './page/contact/Contact';
import Project from './page/project/Project';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
