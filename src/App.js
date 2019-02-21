import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Beginner from "./components/Beginner";
import MainNav from "./components/MainNav";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  state = {
    intermediate: false,
    advanced: false
  };

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <BrowserRouter>
     <Switch>
       <Route path="/" exact component={MainNav} />
       <Route path="/register" component={Register} />
       <Route path="/login" component={Login} />
       <Route path="/beginner" component={Beginner} />

     </Switch>
 </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
