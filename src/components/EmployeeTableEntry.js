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
          location: '',
          filter: ''
        };
        this.employees = employees;
    }

    render() {
        // Filter employees by selected location
        var location = this.props.location;
        this.state.location = location;
        
        // Filter employees by substring
        var filter = this.props.filter;
        this.state.filter = filter;

        // Refresh employee dataset
        employees = this.employees;

        // If a location was selected, filter by location
        if (this.state.location !== '') {
            employees = employees.filter(function (e) {
                return (e.location === location);
            })
        }
        // If user hit "Search", filter by input string
        if (this.state.filter !== '') {
            employees = employees.filter(function (e) {
                return (e.name.includes(filter)) ||
                        (e.location.includes(filter)) ||
                        (e.title.includes(filter));
            })
        }
        // Reset location and filter
        this.state.filter = '';
        this.state.location = '';
        var count = 0;
        return (
            employees.map(employee =>
            <tr className='employee-row'>
                <th scope="row">{count=count+1}</th>
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