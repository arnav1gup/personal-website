import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import {withRouter} from 'react-router';
import {Component} from 'react';
import { Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import BlogDetails from "./pages/BlogDetails";

{/*const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});*/}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/work" component={Work} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/blog-details"component={BlogDetails}/>
            <Route path="/contact" component={Contact} />
        </Switch>
       </BrowserRouter>
    );
  }
}

export default App;
