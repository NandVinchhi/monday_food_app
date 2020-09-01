import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Poll from "./screens/polls";
import New from "./screens/new";
import Track from "./screens/track";
import Cuisine from "./screens/cuisine";
import Vote from "./screens/vote";
import End from "./screens/end";
import Winner from "./screens/winner";



ReactDOM.render(
<Router>
<div className="App">
  <Route exact path="/" component={Poll} />
  <Route exact path="/new" component={New} />
  <Route exact path="/track" component={Track} />
  <Route exact path="/cuisine" component={Cuisine} />
  <Route exact path="/vote" component={Vote} />
  <Route exact path="/end" component={End} />
  <Route exact path="/winner" component={Winner} />
</div>
</Router>,
document.getElementById("root")

);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
