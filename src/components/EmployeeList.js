import React from 'react';
import '../css/App.css';
import EmployeeCard from './EmployeeCard';
import Navbar from './Navbar';

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
            <Navbar navbar={{header: 'Employee Viewer', isHome: true}}/>
            <div className='row justify-content-center'>
            <EmployeeCard></EmployeeCard>
            </div>
        </div>
        );
    }
}

export default EmployeeList;
