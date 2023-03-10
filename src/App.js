import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route path="/movie/:id">
=======
        <Route path="/movie">
>>>>>>> 23aaed5eb5cc3b6adb3154d57e2c350b719419b0
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
 