import React from 'react';
import './App.css';
import hmm2 from './img/hmm2.png';
import davidbrown from './img/davidbrown.jpg';
import hollyhoward from './img/hollyhoward.jpg';

var employees = [
  {
    'employee': 'Kyra Hrabal',
    'description': 'Intelligent, harder worker.',
    'image': hmm2
  },
  {
    'employee': 'David Brown',
    'description': 'Imaginative designer and artist.',
    'image': davidbrown
  },
  {
    'employee': 'Holly Howard',
    'description': 'Funny, clever, witty.',
    'image': hollyhoward
  }
]

function App() {
  return (
    <div className="App">
      <EmployeeList></EmployeeList>
    </div>
  );
}

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: 'Postlight',
    };
  }
  render() {
    return (
      <div className='employee-list'>
        <h1>Employee list for {this.state.company}</h1>
        <EmployeeCard></EmployeeCard>
      </div>
    );
  }
}

class EmployeeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  }
  render() {
    return (
      employees.map(employee =>
      <div className='row'>
        <div className='employee-card card'>
          <img src={employee.image} class="card-img-top" alt="..."></img>
          <div className='card-body'>
            <h5 class='card-title'>{employee.employee}</h5> 
            <p className='card-text'>{employee.description}</p>
            <button 
            onClick={() => this.setState({name: 'Kyra Hrabal'})}
            href="#" 
            class="btn btn-primary">View Skills</button>
          </div>
        </div>
      </div>
      )
    );
  }
}

export default App;
