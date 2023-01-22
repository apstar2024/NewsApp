// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            {/* <News pageSize={8} category='Sports' /> */}
            <Route exact path="/" element={<News pageSize={8} category="general" key={'General'}/>}/>
            <Route exact path="/general" element={<News pageSize={8} category="general" key={'General'}/>}/>
            <Route exact path="/Business" element={<News pageSize={8} category="Business" key={'Business'}/>}/>
            <Route exact path="/Entertainment" element={<News pageSize={8} category="Entertainment" key={'Entertainment'}/>}/>
            <Route exact path="/Health" element={<News pageSize={8} category="Health" key={'Health'}/>}/>
            <Route exact path="/Science" element={<News pageSize={8} category="Science" key={'Science'}/>}/>
            <Route exact path="/Sports" element={<News pageSize={8} category="Sports" key={'Sports'}/>}/>
            <Route exact path="/Technology" element={<News pageSize={8} category="Technology" key={'Technology'}/>}/>
          </Routes>
        </Router>
      </>
    );
  }
}
