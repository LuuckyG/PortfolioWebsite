import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import BlogPost from '../pages/blog/BlogPost'
import Contact from '../pages/Contact'
import Courses from '../pages/Courses'
import Projects from '../pages/Projects'


const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path="/about" component={About} />
    <Route exact path='/blog' component={Blog}/>
    <Route path='/blog/:blogPost' component={BlogPost}/>
    <Route path="/courses" component={Courses} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Router;
