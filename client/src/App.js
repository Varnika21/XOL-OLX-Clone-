import {BrowserRouter, Switch, Route} from 'react-router-dom';


//components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Sell from './components/sell/Sell';
import DetailView from "./components/product/DetailView";
import {TemplateProvider} from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';


function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/product/:id" component={DetailView}/>
              <Route exact path="/sell" component={Sell}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
