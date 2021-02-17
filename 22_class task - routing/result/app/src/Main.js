
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

function Main() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                <Link to="/home">Home</Link>
                <span> | </span>
                <Link to="/search">Search</Link>
                <hr />
                </div>
                

                <Route path="/home" component={Home} />
                <Route path="/search" component={Search} /> 
            </BrowserRouter>
        </div>
    );
}

export default Main;
