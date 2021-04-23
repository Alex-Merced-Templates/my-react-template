import Container from "./components/Container"
import Home from "./pages/Home"
import Other from "./pages/Other"
import {Route, Switch, Link} from "react-router-dom"

function App() {
  return (
    <Container style={{width: "100%"}}>
      <Link to="/"><button>Home</button></Link>
      <Link to="/other"><button>Other</button></Link>
      <Switch>
        <Route exact path="/" render={(rp) => <Home {...rp}/>}/>
        <Route path="/other" render={(rp) => <Other {...rp}/>}/>
      </Switch>
    </Container>
  );
}

export default App;
