import React from 'react';
import '../css/App.css';

// Mock employee data set
// var employees = [
//   {
//     'name': 'Kathy Hurst',
//     'description': 'Intelligent, harder worker.',
//     'image': kathyhurst,
//     'location': 'Saint Petersburg, FL',
//     'title': 'Project Manager'
//   },
//   {
//     'name': 'David Brown',
//     'description': 'Imaginative designer and artist.',
//     'image': davidbrown,
//     'location': 'New York, NY',
//     'title': 'Senior Software Engineer'
//   },
//   {
//     'name': 'Holly Howard',
//     'description': 'Funny, clever, witty.',
//     'image': hollyhoward,
//     'location': 'Saint Petersburg, FL',
//     'title': 'Executive Assistant'
//   },
//   {
//     'name': 'Miranda Ginsburg',
//     'description': 'Motivated',
//     'image': '',
//     'location': 'New York, NY',
//     'title': 'Project Manager'
//   },
//   {
//     'name': 'William Duntree',
//     'description': 'Super friendly.',
//     'image': '',
//     'location': 'Portland, OR',
//     'title': 'Software Engineer'
//   },
//   {
//     'name': 'Kelly Smith',
//     'description': 'Smart',
//     'image': '',
//     'location': 'New York, NY',
//     'title': 'Software Engineer'
//   }
// ]

var data = require('../employees.json');
console.log(data);
var employees=data.employees;
console.log(employees);
employees.map(employee => 
  console.log(employee.image)
)
// Require context image folder
const images = require.context('../img', true);
console.log(images);

class EmployeeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  //   var employeeGroup = []
  //   if (this.props.group == '1')      
  //     employeeGroup = employees.slice(3);
  //   else
  //     employeeGroup = employees.slice(4, -1);

  }
  render() {
    return (
      employees.map(employee =>
        <div className='employee-card card'>
          <img src={employee.image} className="card-img-top" alt="..."></img>
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