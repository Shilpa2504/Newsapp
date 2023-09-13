import './App.css';

import React, { Component } from 'react'
import Navbar from'./components/Navbar';
import News from'./components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class  extends Component {
  pageSize=9;
  render() {
    return (
      <div>
        <Router>
       <Navbar/>
     
       <Routes>
       
          <Route exact path="/"element={<News key="general" pageSize={this.pageSize} country="in" category="General"/>}></Route>
          <Route exact path="/business"element={<News  key="business" pageSize={9} country="in" category="Business"/>}></Route>
          <Route exact path="/sports"element={<News  key="sports" pageSize={9} country="in" category="Sports"/>}></Route>
          <Route exact path="entertainment"element={<News key="entertainment" pageSize={9} country="in" category="Entertainment"/>}></Route>
          <Route exact path="/health"element={<News  key="health" pageSize={9} country="in" category="Health"/>}></Route>
          <Route exact path="/science"element={<News key="science" pageSize={9} country="in" category="Science"/>}></Route>
          <Route exact path="/technology"element={<News  key="technology" pageSize={9} country="in" category="Technology"/>}></Route>
    

        </Routes> 
       </Router>   
      </div>
    )
  }
}
