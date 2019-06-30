import React from 'react';
import '../css/Admin.css';

// Import mock employee data
var data = require('../employees.json');
console.log(data);
var employees=data.employees;
console.log(employees);

class EmployeeTableEntry extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          location: this.props.location
        };
    }
    render() {
        console.log("Render entry " + this.state.location);
        var location = this.state.location;
        var filteredEmployees = employees.filter(function (e) {
            return (e.location === location);
        })
        return (
            filteredEmployees.map(employee =>
            <tr className='employee-row'>
                <th scope="row">1</th>
                <img className='employee-image' src={process.env.PUBLIC_URL + employee.image} alt='' />
                <td>{employee.name}</td>
                <td>{employee.location}</td>
                <td>{employee.title}</td>
            </tr>
            )
        );
    }
}

export default EmployeeTableEntry;