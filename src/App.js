import React from 'react';
import './App.css';
import EmployeeList from './EmployeeList';
import Admin from './Admin';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path="/" component={EmployeeList} />
        <Route path="/admin/" component={Admin} />
      </div>
    </Router>
  )
}


export default App;
