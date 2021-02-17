import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Link, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/contact">Contact</Link>
      <span> | </span>
      <Link to="/customers">Customers</Link>

      <hr />

      <Route path="/" exact component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/customers" render={()=> <h1> Our customers: google, microsoft, linkdin </h1>}/>

    </BrowserRouter>
  );
}

export default App;
