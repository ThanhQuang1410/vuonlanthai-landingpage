import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "./nav";
import Homepage from "./homepage";
import Footer from "./footer";
import Detail from "./detail";
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery

export default function App() {
  return (
      <Router>
        <>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/chitiet/:slug" component={Detail}/>
          </Switch>
          <Footer/>
        </>
      </Router>
  );
}
