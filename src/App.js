import React from 'react';
import './css/App.css';
import EmployeeList from './components/EmployeeList';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path="/" component={EmployeeList} />
        <Route path="/home" component={EmployeeList} />
        <Route path="/admin/" component={Admin} />
      </div>
    </Router>
  )
}


export default App;
