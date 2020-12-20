import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';
import Blogs from './components/pages/blogs';
import About from './components/pages/about';
import Tutorials from './components/pages/tutorials';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Email from './components/pages/email';

// imports
import './assets/css/style.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      videos: [],
      latestBlogs: []
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/tutorials" component={Tutorials} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/email" component={Email} />

          <Footer />
        </div>
      </Router>
    );
  }
};
