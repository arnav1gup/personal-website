import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Skills} />
          <Route path="/portfolios" component={Projects} />
          <Route path="/work" component={Work} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/blogs/blog-details"component={BlogDetails}/>
          <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
