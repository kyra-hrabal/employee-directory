import React from 'react';
import '../css/Admin.css';
import kathyhurst from '../img/kathyhurst.jpg';
import davidbrown from '../img/davidbrown.jpg';
import hollyhoward from '../img/hollyhoward.jpg';

var employees = [
    {
        'name': 'Kathy Hurst',
        'description': 'Intelligent, harder worker.',
        'image': kathyhurst,
        'location': 'Saint Petersburg, FL',
        'title': 'Project Manager'
    },
    {
        'name': 'David Brown',
        'description': 'Imaginative designer and artist.',
        'image': davidbrown,
        'location': 'New York, NY',
        'title': 'Senior Software Engineer'
    },
    {
        'name': 'Holly Howard',
        'description': 'Funny, clever, witty.',
        'image': hollyhoward,
        'location': 'Saint Petersburg, FL',
        'title': 'Executive Assistant'
    }
]

class EmployeeTableEntry extends React.Component{
    render() {
        return (
            employees.map(employee =>
            <tr className='employee-row'>
            <th scope="row">1</th>
            <img className='employee-image' src={employee.image} alt='' />
            <td>{employee.name}</td>
            <td>{employee.location}</td>
            <td>{employee.title}</td>
            </tr>
            )
        );
    }
}

export default EmployeeTableEntry;