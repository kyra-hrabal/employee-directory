import React from 'react';
import '../css/App.css';

// Import mock employee data
var data = require('../employees.json');
console.log(data);
var employees=data.employees;
console.log(employees);


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
        <div className='employee-card card'>
          <img src={process.env.PUBLIC_URL + employee.image} className="card-img-top" alt="..."></img>
          <div className='card-body'>
            <h5 className='card-title'>{employee.name}</h5> 
            <p className='card-text'>{employee.description}</p>
            <button 
            href="#" 
            className="btn btn-primary">View Skills</button>
          </div>
        </div>
      )
    );
  }
}

export default EmployeeCard;