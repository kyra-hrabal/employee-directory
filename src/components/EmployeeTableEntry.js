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
        this.employees = employees;
    }

    componentDidMount() {
        console.log("Initial mount for EmployeeTableEntry");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Update of EmployeeTableEntry");
        console.log("Current location props: " + this.props.location);
        console.log("Old props location: " + prevProps.location);
    }

    render() {
        console.log('Rendering EmployeeTableEntry')
        console.log('Location filter: ' + this.props.location);
        console.log('Search filter: ' + this.props.filter);
        // If a location was selected, filter by location
        if (this.props.location !== '') {
            employees = this.employees.filter (e => {
                return (e.location === this.props.location);
            })
        }
        // If user hit "Search", filter by input string
        if (this.props.filter !== '') {
            employees = this.employees.filter(e => {
                return (e.name.includes(this.props.filter)) ||
                        (e.location.includes(this.props.filter)) ||
                        (e.title.includes(this.props.filter));
            })
        }
    
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