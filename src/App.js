import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <EmployeeList></EmployeeList>
    </div>
  );
}

class EmployeeList extends React.Component {
  render() {
    return (
      <div className='employee-list'>
        <h1>Employee list for {this.props.company}</h1>
        <EmployeeCard></EmployeeCard>
      </div>
    );
  }
}

class EmployeeCard extends React.Component {
  render() {
    return (
      <div className='employee-card card'>
        <div className='card-body'>
          <h5 class='card-title'>Employee 1</h5> 
          <p className='card-text'>Hard worker, highly motivated, fast learner.</p>
          <a href="#" class="btn btn-primary">View Skills</a>
        </div>
      </div>
    );
  }
}

export default App;
