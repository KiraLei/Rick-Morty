import "./App.css";
//import Slider from './components/Slider'
import "./styles.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <main className="App">
            <Home />
          </main>
        </Route>
        <Route exact path="/detail/:itemid">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
