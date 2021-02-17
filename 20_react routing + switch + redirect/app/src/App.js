import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Link, Route,Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
      <Link to="/home">Home</Link>
      <span> | </span>
      <Link to="/contact">Contact</Link>
      <span> | </span>
      <Link to="/customers">Customers</Link>
      <span> | </span>
      <Link to="/branches">Branches</Link>

      <hr />

      {/* Switch renders only the first matching <Route> instead of all */}
      <Switch>
        <Route path="/" exact render={()=> <Redirect to="/home" />}/>
        <Route path="/home" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/customers" render={()=> <h1> Our customers: google, microsoft, linkdin </h1>}/>

        {/* path="" is to catch all routes that do not have a specific route above */}
        <Route path="" render={()=> <h1> Not found </h1>}/>
      </Switch>
  

    </BrowserRouter>
  );
}

export default App;
