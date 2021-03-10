
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import NoMatch from "./components/NoMatch/NoMatch";


function App() {
  
  return (
    <Router>
      <Switch>

        <Route exact path="/">
            <Home></Home>
        </Route>
        
        <Route path="/home">
            <Home></Home>
        </Route>

        <Route path="/details/:idTeam">
           <LeagueDetails></LeagueDetails>
        </Route>
        
        <Route path="*">
           <NoMatch></NoMatch>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
