import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import PortfolioItem from './components/PortfolioItem';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio/:id" component={PortfolioItem} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
