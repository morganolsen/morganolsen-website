import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import PortfolioItem from './components/PortfolioItem';
import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio/:id" component={PortfolioItem} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
