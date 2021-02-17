import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Link, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/contact?info=phone">Contact - Phone</Link>
      <span> | </span>
      <Link to={{pathname:"/contact", search:"info=mail"}}>Contact - Mail</Link>
      <hr />

        <Route path="/" exact component={Home}/>
        <Route path="/contact" component={Contact}/>
     
    </BrowserRouter>
  );
}

export default App;
